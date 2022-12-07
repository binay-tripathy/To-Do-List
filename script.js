let input = document.querySelector("#inputfield");
let addBtn = document.querySelector("#button");
let tasks = document.querySelector(".tasks");

//adding task on pressing enter key
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addBtn.click();
    }
});


//adding new item
addBtn.addEventListener("click", () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement("div");
        newItem.classList.add("item"); 
        newItem.classList.add("row");
        newItem.classList.add("mt-3");
        newItem.classList.add("pt-3");
        newItem.innerHTML =
            `
            <p class = "item-value col-8">${input.value}</p>
            <div class="item-btn mb-3 col-3">
                <i class="fa-sharp fa-solid fa-check"></i>
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </div>
            `
        tasks.appendChild(newItem);
        input.value = "";
    }
    else {
        alert("Please enter a task!");
    }
})

//completed item
tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-check")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
    }
})

//delete item 
tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-xmark")) {
        e.target.parentElement.parentElement.remove();
    }
})
