const inputBox = document.getElementById("input"),
  listCont = document.querySelector(".list-cont");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listCont.appendChild(li)
    let delBtn = document.createElement("span")
    delBtn.innerHTML = "&#x2716;"
    li.appendChild(delBtn)
  }
  inputBox.value=""
  saveData()
}


listCont.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveData()
  }
}, false);

function saveData(){
  localStorage.setItem("data", listCont.innerHTML)
}

function showTasks(){
  listCont.innerHTML = localStorage.getItem("data");
}
showTasks();
