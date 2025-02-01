import { Observable } from "rxjs";

var observable = Observable.create((observer: any) => {
  observer.next("Hey Guys");
});

observable.subscribe((x: any) => {
  addItem(x);
});

function addItem(val: any) {
  var node = document.createElement("li");
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
