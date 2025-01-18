const inputBox = document.getElementById("input"),
  listCont = document.querySelector(".list-cont");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCont.appendChild(li);
    let delBtn = document.createElement("span");
    delBtn.innerHTML = "&#x2716;";
    li.appendChild(delBtn);
    let dateTime = document.createElement("div");
    dateTime.innerHTML = "Date and Time";
    li.appendChild(dateTime);

    // Time and Date 

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    dateTime.textContent = `${formattedTime}, ${formattedDate}`;
  }
  inputBox.value = "";
  saveData();
}

listCont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listCont.innerHTML);
}

function showTasks() {
  listCont.innerHTML = localStorage.getItem("data");
}
showTasks();
