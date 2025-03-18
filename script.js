const input=document.querySelector(".place");
const submit=document.querySelector(".submit");
const list=document.querySelector(".list");

submit.addEventListener("click",function(){
   let value=input.value;
    const listitem=document.createElement("li");
    listitem.textContent=value;
    list.appendChild(listitem);

const deletebtn =document.createElement("button");
deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
deletebtn.addEventListener("click",function(){
    list.removeChild(listitem);
    
})
listitem.appendChild(deletebtn);
list.appendChild(listitem);
input.value="";

})
       