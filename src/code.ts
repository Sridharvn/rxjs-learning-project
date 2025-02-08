import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  Observable,
  merge,
} from "rxjs";

var observable = Observable.create((observer: any) => {
  observer.next("Hey there!");
});
var observable2 = Observable.create((observer: any) => {
  observer.next("How's it going?");
});

var newObs = merge(observable, observable2);

newObs.subscribe((x) => addItem(x));

function addItem(val: any) {
  const node = document.createElement("li");
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
