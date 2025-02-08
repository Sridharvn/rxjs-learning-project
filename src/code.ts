import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  Observable,
  merge,
  map,
} from "rxjs";

new Observable((observer) => {
  observer.next("Hey there!");
})
  .pipe(map((val: string) => val.toUpperCase()))
  .subscribe((x: any) => addItem(x));

function addItem(val: any) {
  const node = document.createElement("li");
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
