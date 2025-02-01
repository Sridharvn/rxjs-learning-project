import { Observable } from "rxjs";

var observable = Observable.create((observer: any) => {
  try {
    observer.next("Hey Guys");
    observer.next("How're you?");
    observer.complete();
    observer.next("Completed");
  } catch (error) {
    observer.error(error);
  }
});

observable.subscribe(
  (x: any) => {
    addItem(x);
  },
  (error: any) => addItem(error),
  () => addItem("Completed")
);

function addItem(val: any) {
  var node = document.createElement("li");
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
