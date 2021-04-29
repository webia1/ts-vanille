/* const arr: Array<string> = ["s", "t"];

let someAny: any;

function greetMe(name: string): string {
  return `Hi ${name}!`;
}

type Point = { x: number; y: number };

function printC(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printC({ x: 3, y: 7 });

type Id = number | string; // <-- Id is a union type

function getId(id: Id): string {
  if (typeof id === "string") {
    id = id.toUpperCase();
  }
  return String(id);
}

console.log(typeof getId(4), getId("hallo"));
 */

let a = [1, 2, 3];

let b = [...a, 4, 5];

console.log(a);
console.log(b);
