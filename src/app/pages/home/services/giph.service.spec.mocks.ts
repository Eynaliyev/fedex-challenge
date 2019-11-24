import { defer } from "rxjs";
import { Giph } from '../models/giph.model';
/* Helper function
 Creates async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

// data after being parsed
export const mockGiphs: Giph[] = [
  {
    id: "3oKIPusxB2uXOmoP0k",
    url: "https://giphy.com/gifs/DNCE-3oKIPusxB2uXOmoP0k"
  },
  {
    id: "wtqEhmpTMmjRK",
    url: "https://giphy.com/gifs/puppy-puppies-gif-wtqEhmpTMmjRK"
  }
];

export const mockResponse: any = {
  "data": [
    {
      "type": "gif",
      "id": "3oKIPusxB2uXOmoP0k",
      "images": {
        "downsized_large": {
          "url": "https://giphy.com/gifs/DNCE-3oKIPusxB2uXOmoP0k"
        }
      },
    },
    {
      "type": "gif",
      "id": "wtqEhmpTMmjRK",
      "url": "https://giphy.com/gifs/puppy-puppies-gif-wtqEhmpTMmjRK",
      "images": {
        "downsized_large": {
          "url": "https://giphy.com/gifs/puppy-puppies-gif-wtqEhmpTMmjRK"
        }
      },
    }
  ]
};
