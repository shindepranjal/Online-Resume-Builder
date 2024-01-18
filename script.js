function addNewWEField(){
  // console.log("adding new field");
let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder","Enter Here");

let weob=document.getElementById("we");
let weAddButtonob=document.getElementById("weAddButton");
weob.insertBefore(newNode,weAddButtonob);
}

function addNewAQField(){
  
let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqField');
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder","Enter Here");

let aqob=document.getElementById("aq");
let aqAddButtonob=document.getElementById("aqAddButton");
aqob.insertBefore(newNode,aqAddButtonob);
}

function addNewPRField(){

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('PRField');
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder","Enter Here");

let PRob=document.getElementById("PR");
let PRAddButtonob=document.getElementById("PRAddButton");
PRob.insertBefore(newNode,PRAddButtonob);


}

// generate resume
function generateCV(){
  // console.log("generating cv");
  let nameField=document.getElementById("nameField").value;
  let nameT1=document.getElementById("nameT1");
  nameT1.innerHTML=nameField;

  //direct
  document.getElementById("nameT2").innerHTML=nameField;

  //contact
  document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

  //email
  document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;

  //address
  document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

  //github
  document.getElementById("giT").innerHTML=document.getElementById("giField").value;

  //linkedin
  document.getElementById("liT").innerHTML=document.getElementById("liField").value;

  //leetcode
  document.getElementById("leT").innerHTML=document.getElementById("leField").value;

  //objective
  document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

  // work experience
  let wes = document.getElementsByClassName("weField");
  let str = " ";
  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  let aqs=document.getElementsByClassName('eqField');
  let str1=' '
  for(let e of aqs){
    str1+=`<li> ${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML=str1;

  // document.getElementById('cv-form').style.display='none';
  // document.getElementById('cv-template').style.display='block';


}

// print resume
function printCV(){
  window.print();
}
