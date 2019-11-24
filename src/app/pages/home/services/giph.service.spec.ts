import { TestBed } from '@angular/core/testing';

import { GiphService } from './giph.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  mockResponse,
  mockGiphs,
  asyncData
} from "./giph.service.spec.mocks";

let httpClientSpy: { get: jasmine.Spy };
let giphService: GiphService;

describe('giphService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GiphService]
  }));
  httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  giphService = new GiphService(<any>httpClientSpy);

  it('should be created', () => {
    const service: GiphService = TestBed.get(GiphService);
    expect(service).toBeTruthy();
  });
  it("should convert getGiphList response to giph", () => {
    const res = giphService.responseToGiph(mockResponse);
    expect(res).toEqual(mockGiphs, "expected giphs");
  });

  it("should return expected giphs (HttpClient called once)", () => {
    httpClientSpy.get.and.returnValue(asyncData(mockResponse));

    giphService
      .getGiphList('puppies', 1, 10)
      .subscribe(
        giphs => expect(giphs).toEqual(mockGiphs, "expected response"),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });
});
