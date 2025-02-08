import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  Observable,
  merge,
  map,
  from,
} from "rxjs";

from([
  { firstName: "Sridhar", lastName: "V N", age: "25" },
  { firstName: "John", lastName: "Doe", age: "30" },
  { firstName: "Jane", lastName: "Smith", age: "28" },
  { firstName: "Alice", lastName: "Johnson", age: "35" },
  { firstName: "Bob", lastName: "Brown", age: "40" },
])
  .pipe(map((person) => person.firstName))
  .subscribe((x: any) => addItem(x));

function addItem(val: any) {
  const node = document.createElement("li");
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
