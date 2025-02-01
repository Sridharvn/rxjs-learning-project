import { Observable } from "rxjs";
import { share } from "rxjs/operators";

var observable = new Observable((observer: any) => {
  try {
    observer.next("Hey Guys");
    observer.next("How're you?");
    // observer.complete();
    // observer.next("Completed");
    setInterval(() => {
      observer.next("I am Good");
    }, 1000);
  } catch (error) {
    observer.error(error);
  }
}).pipe(share());

var observer = observable.subscribe(
  (x: any) => {
    addItem(x);
  },
  (error: any) => addItem(error),
  () => addItem("Completed")
);

setTimeout(() => {
  var observer2 = observable.subscribe((x: any) =>
    addItem("Subscriber 2 : " + x)
  );
}, 1000);

function addItem(val: any) {
  var node = document.createElement("li");
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
