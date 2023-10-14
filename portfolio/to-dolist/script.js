const inputBox= document.getElementById("inputbox")
const listContainer= document.getElementById("listcontainer")
function addTask(){
    if(inputBox.value===''){
        alert("There's no task input! Please enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}
