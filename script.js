const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('#circle2');

gsap.to(circle1,{
    x:50,
    y:50,
    yoyo:true,
    repeat:-1,
    duration:4,
});
gsap.from(circle2,{
    x:50,
    y:50,
    yoyo:true,
    repeat:-1,
    duration:4,
});

const inputbox = document.querySelector('#input');
const listcontainer = document.querySelector('#list-container');

function addtask() {
   if(inputbox.value === ""){
    alert("please enter something");
   }
   else{
    let li = document.createElement('li');
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
   
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span); 
}

    inputbox.value = "";
    saveData();
    
}
listcontainer.addEventListener('click',function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
        
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTasks() {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        listcontainer.innerHTML = savedData;
    }
}

showTasks();