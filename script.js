function addNewWEField(){
  // console.log("adding new field");
let newNode=document.createElement('textarea')
newNode.classList.add('form-control')
newNode.classList.add('weField')

let weob=document.getElementById("we");
let weAddButtonob=document.getElementById("weAddButton");
weob.insertBefore(newNode,weAddButtonob);
}