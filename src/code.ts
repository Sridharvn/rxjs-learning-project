import { Subject } from "rxjs";

var subject = new Subject();

subject.subscribe(
  (data: any) => addItem(`Observer 1 Added data ${data}`),
  (err: any) => addItem(`There is an error : ${err}`),
  () => addItem("Completed")
);
subject.next("Add Item");

var observer2 = subject.subscribe((data: any) =>
  addItem(`Observer 2 Added data ${data}`)
);

subject.next("Second thing sent");
subject.next("Third thing sent");

observer2.unsubscribe();

subject.next("The final thing has been sent");

function addItem(val: any) {
  const node = document.createElement("li");
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
