import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  Observable,
  merge,
  map,
  from,
  skipUntil,
} from "rxjs";

const observable1 = new Observable((observer) => {
  let i = 1;
  setInterval(() => {
    observer.next(i++);
  }, 1000);
});

const observable2 = new Subject();

setTimeout(() => {
  observable2.next("Hey!!");
}, 3000);

const newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
  const node = document.createElement("li");
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
