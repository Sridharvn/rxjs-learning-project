import { Observable } from "rxjs";

var observable = Observable.create((observer: any) => {
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
});

var observer = observable.subscribe(
  (x: any) => {
    addItem(x);
  },
  (error: any) => addItem(error),
  () => addItem("Completed")
);
var observer2 = observable.subscribe((x: any) => {
  addItem(x);
});

observer.add(observer2);

setTimeout(() => {
  observer.unsubscribe();
}, 6001);

function addItem(val: any) {
  var node = document.createElement("li");
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
