function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value.trim();

    if (taskValue !== "") {
      var taskList = document.getElementById("taskList");
      var newTaskItem = document.createElement("li");
      newTaskItem.textContent = taskValue;
      taskList.appendChild(newTaskItem);
      taskInput.value = "";
    }
  }
  function addTask() {
      var taskInput = document.getElementById("taskInput");
      var taskValue = taskInput.value.trim();

      if (taskValue !== "") {
          var taskList = document.getElementById("taskList");
          var newTaskItem = document.createElement("li");
          newTaskItem.textContent = taskValue;
          newTaskItem.addEventListener("click", function() {
              this.remove(); // Remove the task item when clicked
          });
          taskList.appendChild(newTaskItem);
          taskInput.value = "";
      }
  }