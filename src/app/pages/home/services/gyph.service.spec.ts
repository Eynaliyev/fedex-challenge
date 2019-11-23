import { TestBed } from '@angular/core/testing';

import { GyphService } from './gyph.service';
import { HttpClientModule } from '@angular/common/http';
import {
  mockResponse,
  mockGyphs,
  asyncData
} from "./mock-data";

let httpClientSpy: { get: jasmine.Spy };
let gyphService: GyphService;

describe('GyphService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [GyphService]
  }));
  httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  gyphService = new GyphService(<any>httpClientSpy);

  it('should be created', () => {
    const service: GyphService = TestBed.get(GyphService);
    expect(service).toBeTruthy();
  });
  it("should convert getGyphList response to gyph", () => {
    const res = gyphService.responseToGyph(mockResponse);
    expect(res).toEqual(mockGyphs, "expected gyphs");
  });

  it("should return expected gyphs (HttpClient called once)", () => {
    httpClientSpy.get.and.returnValue(asyncData(mockResponse));

    gyphService
      .getGyphList('puppies', 1, 10)
      .subscribe(
        gyphs => expect(gyphs).toEqual(mockGyphs, "expected response"),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });
});
