const inputBox = document.getElementById("input"),
  listCont = document.querySelector(".list-cont"),
  taskCount = document.getElementById("taskCount"),
  remainingTasks = document.getElementById("remainingTasks"),
  completedTasks = document.getElementById("completedTasks");

function updateCounts() {
  const totalTasks = listCont.querySelectorAll("li").length;
  const completed = listCont.querySelectorAll(".checked").length;
  const remaining = totalTasks - completed;

  taskCount.textContent = `Total Tasks: ${totalTasks}`;
  completedTasks.textContent = `Completed Tasks: ${completed}`;
  remainingTasks.textContent = `Remaining Tasks: ${remaining}`;
}

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
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    dateTime.textContent = `${formattedTime}, ${formattedDate}`;
    li.appendChild(dateTime);

    inputBox.value = "";
    saveData();
    updateCounts();
  }
}

listCont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
      updateCounts();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      updateCounts();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listCont.innerHTML);
}

function showTasks() {
  listCont.innerHTML = localStorage.getItem("data") || "";
  updateCounts();
}

showTasks();
