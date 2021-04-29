import { of, from, Observable } from "rxjs";
import { delay, map, mergeMap } from "rxjs/operators";

const artist: Array<string> = [
  "Ge",
  "Geo",
  "George",
  "George Mi",
  "George Mich",
  "George Michael",
];

const fakeSearchApi = (artist: unknown): Observable<unknown> => {
  return of(`Response for: ${artist}`).pipe(delay(1000));
};

/* 
  from(artist)
  .pipe(map((artist) => fakeSearchApi(artist)))
  .subscribe((res) => res.subscribe((inner) => console.log(inner)));

 */

/* from(artist)
  .pipe(mergeMap((artist) => fakeSearchApi(artist)))
  .subscribe((res) => console.log(res)); */

from(artist)
  .pipe(mergeMap((artist) => fakeSearchApi(artist)))
  .subscribe((res) => console.log(res));
