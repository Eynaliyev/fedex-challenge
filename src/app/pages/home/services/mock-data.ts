import { defer } from "rxjs";
import { Gyph } from '../models/gyph.model';
/* Helper function
 Creates async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

// data after being parsed
export const mockGyphs: Gyph[] = [
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
      "url": "https://giphy.com/gifs/DNCE-3oKIPusxB2uXOmoP0k",
      "slug": "DNCE-3oKIPusxB2uXOmoP0k",
      "bitly_gif_url": "https://gph.is/2of28YL",
      "bitly_url": "https://gph.is/2of28YL",
      "embed_url": "https://giphy.com/embed/3oKIPusxB2uXOmoP0k",
      "username": "DNCE",
      "source": "https://www.youtube.com/watch?v=J7it_g_gAY4",
      "title": "Barking Nicki Minaj GIF by DNCE",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.youtube.com",
      "source_post_url": "https://www.youtube.com/watch?v=J7it_g_gAY4",
      "is_sticker": 0,
      "import_datetime": "2017-03-31 01:33:10",
      "trending_datetime": "2017-08-29 04:45:01",
    },
    {
      "type": "gif",
      "id": "wtqEhmpTMmjRK",
      "url": "https://giphy.com/gifs/puppy-puppies-gif-wtqEhmpTMmjRK",
      "slug": "puppy-puppies-gif-wtqEhmpTMmjRK",
      "bitly_gif_url": "https://gph.is/1O6eqre",
      "bitly_url": "https://gph.is/1O6eqre",
      "embed_url": "https://giphy.com/embed/wtqEhmpTMmjRK",
      "username": "",
      "source": "https://everyhtingslove.tumblr.com/post/111691078552",
      "title": "dog GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "everyhtingslove.tumblr.com",
      "source_post_url": "https://everyhtingslove.tumblr.com/post/111691078552",
      "is_sticker": 0,
      "import_datetime": "2015-02-21 21:32:07",
      "trending_datetime": "1970-01-01 00:00:00",
    }
  ]
};
