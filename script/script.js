/*let rankbutton1=document.querySelector('#one');
let rankbutton2=document.querySelector('#two');
let rankbutton3=document.querySelector('#three');
 var select;
let rankselect=document.querySelector('#rankselect');
rankselect.addEventListener('click',sel);

function sel()

{ select=prompt("select rank");

alert("select holds"+select);

rankbutton1.addEventListener('click',input);  }

function input()
{

    let name=prompt('Enter student name'); 

    if(select==1)
    {
        rankbutton1.textContent=name; }

        else if(select==2)
        {

            rankbutton2.textContent=name;
        }
     
        else if (select==3)
  {          rankbutton3.textContent=name;}


}

rankbutton2.addEventListener('click',input);
rankbutton3.addEventListener('click',input); */


let themebtn=document.querySelector('#theme');
let th="lightcolor";


function tog()
{
if(th==="lightcolor")
{

    console.log(th);
    th="darkcolor";
    document.querySelector(".inner-body").style.backgroundColor="white";
    document.querySelector(".inner-body").style.color="black";


}
else if(th==="darkcolor")
{
    console.log(th);
    th="lightcolor";
    document.querySelector(".inner-body").style.backgroundColor="black";
    document.querySelector(".inner-body").style.color="white";

    

}



}
themebtn.addEventListener('click', tog);

function navigate() {
    var dropdown = document.getElementById("dropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    
    if (selectedValue !== "#") {
      window.location.href = selectedValue;
    }
  }