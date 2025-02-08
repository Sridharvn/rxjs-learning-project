import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

const subject = new ReplaySubject(30, 200);

subject.subscribe(
  (data: any) => addItem(`Observer 1 Added data ${data}`),
  (err: any) => addItem(`There is an error : ${err}`),
  () => addItem("Completed")
);
var i = 1;
var int = setInterval(() => {
  subject.next(i++);
}, 1000);
setTimeout(() => {
  var observer2 = subject.subscribe((data: any) =>
    addItem(`Observer 2 Added data ${data}`)
  );
}, 5000);

function addItem(val: any) {
  const node = document.createElement("li");
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
