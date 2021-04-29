import { of } from "rxjs";
import { map, tap } from "rxjs/operators";

const songs = [
  {
    song: "Jesus to a child",
    artist: "George Michael",
  },
  {
    song: "Earth Song",
    artist: "Michael Jackson",
  },
  {
    song: "Besame Mucho",
    artist: "Andrea Bocelli",
  },
];

const songs$ = of(songs);

songs$
  .pipe(
    tap(() => {
      console.log("ich bin dran mit Songs");
    }),
    map((mySongs) => mySongs.map((s) => s.artist))
  )
  .subscribe((artist) => console.log(artist)); //?
