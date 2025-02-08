import { Subject } from "rxjs";

var subject = new Subject();

subject.subscribe(
  (data: any) => addItem("Added data" + data),
  (err: any) => addItem("There is an error : " + err),
  () => addItem("Completed")
);

subject.next("Add Item");

function addItem(val: any) {
  const node = document.createElement("li");
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}
