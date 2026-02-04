document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("studentNameInput");
    const addBtn = document.getElementById("addStudentBtn");
    const resetBtn = document.getElementById("resetAllBtn");
    const taskList = document.getElementById("studentList");

    
    addBtn.addEventListener("click", function () {
        const studentName = input.value.trim();

        if (studentName === "") {
            alert("Please enter a student name!");
            return; 

        }

        const li = document.createElement("li");
        const span = document.createElement("span");
        const presentBtn = document.createElement("button");
        const absentBtn = document.createElement("button");
        const delBtn = document.createElement("button");

        span.textContent = studentName;
        presentBtn.textContent = "PRESENT";
        absentBtn.textContent = "ABSENT";
        delBtn.textContent = "DELETE";

        
        presentBtn.addEventListener("click", () => {
            li.classList.add("present");
            li.classList.remove("absent");
        });

        
        absentBtn.addEventListener("click", () => {
            li.classList.add("absent");
            li.classList.remove("present");
        });

        
        span.addEventListener("dblclick", () => {
            li.classList.toggle("absent");
            li.classList.remove("present");
        });

        
        delBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(presentBtn);
        li.appendChild(absentBtn);
        li.appendChild(delBtn);
        taskList.appendChild(li);

        input.value = "";
    });


    resetBtn.addEventListener("click", () => {
        taskList.innerHTML = "";
    });

});
