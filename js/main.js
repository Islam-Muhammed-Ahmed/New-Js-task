/*
1. The addEventListener() method is used to add an event listener to the container.
2. The click event is added to the container. so any new div adde will e in side the container & every thing will be applied on it.
3. The function is called when the click event is triggered.
4. The if statement checks if the target element is the bin icon.
5. If it is, the element is removed.
6. The else if statement checks if the target element is the sad icon.
7. If it is, the icon is removed and a heart icon is added.
8. The else if statement checks if the target element is the heart icon.
9. If it is, the heart icon is removed and a sad icon is added.
10. The else if statement checks if the target element is the star icon.
11. If it is, the star icon is added to the beginning of the container.
12. The else if statement checks if the target element is the orange star icon.
13. If it is, the orange star icon is removed and a star icon is added to the end of the container.
*/
let btn = document.querySelector("button");
let inputValue = document.querySelector("input");
let form = document.querySelector("form");
let container = document.getElementById("contain");

container.addEventListener("click", function(eo) {
    if (eo.target.className == "icon-bin i-cons") {
        eo.target.parentElement.parentElement.remove();
    } else if (eo.target.className == "icon-sad2 i-cons") {
        eo.target.classList.add("displaynone");
        let heart = `<span class="icon-heart"> </span>`;
        eo.target.parentElement.parentElement
            .getElementsByClassName("task-text")[0]
            .classList.add("finished");
        eo.target.parentElement.innerHTML += heart;
    } else if (eo.target.className == "icon-heart") {
        eo.target.parentElement.parentElement
            .getElementsByClassName("task-text")[0]
            .classList.remove("finished");
        eo.target.classList.add("displaynone");
        let sad = `<span class="icon-sad2 i-cons"></span>`;
        eo.target.parentElement.innerHTML += sad;
    } else if (eo.target.className == "icon-star-full i-cons") {
        eo.target.classList.add("orange");
        container.prepend(eo.target.parentElement);
    } else if (eo.target.className == "icon-star-full i-cons orange") {
        eo.target.classList.remove("orange");
        container.append(eo.target.parentElement);
    }
});

// Switch case work as the same as If condition
/*
container.addEventListener("click", function(eo) {
    switch (eo.target.className) {
        case "icon-bin i-cons":
            eo.target.parentElement.parentElement.remove();
            break;
        case "icon-sad2 i-cons":
            eo.target.classList.add("displaynone");
            let heart = `<span class="icon-heart"> </span>`;
            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.add("finished");
            eo.target.parentElement.innerHTML += heart;
            break;
        case "icon-heart":
            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.remove("finished");
            eo.target.classList.add("displaynone");
            let sad = `<span class="icon-sad2 i-cons"></span>`;
            eo.target.parentElement.innerHTML += sad;
            break;
        case "icon-star-full i-cons":
            eo.target.classList.add("orange");
            container.prepend(eo.target.parentElement);
            break;
        case "icon-star-full i-cons orange":
            eo.target.classList.remove("orange");
            container.append(eo.target.parentElement);
            break;

        default:
            break;
    }
});
*/

/*========working on adding new tasks===============
1. First, we create a new <form> element and set its action to the #todo-list ID.
2. We create a new <input> element and set its type to text and its name to task.
3. We create a new <button> element and set its type to submit.
4. We add an event listener to the form that listens for the submit event.
5. We prevent the default behavior of the submit event.
6. We create a new <div> element and set its class to task.
7. We create a new <span> element and set its class to icon-star-full.
8. We create a new <p> element and set its class to task-text.
9. We create a new <div> element and set its class to task-icons.
10. We create a new <span> element and set its class to icon-bin.
11. We create a new <span> element and set its class to icon-sad2.
12. We append the task to the #todo-list element.
13. We clear the value of the input element.
14. We add the code to the bottom of the page.
*/
form.addEventListener("submit", function(eo) {
    eo.preventDefault();
    let task = `
    <div class="task">
            <span class="icon-star-full i-cons"> </span>
            <p lang="ar" class="task-text">${inputValue.value}</p>
            <div>
                <span class="icon-bin i-cons"> </span>
                <span class="icon-sad2 i-cons"> </span>
            </div>
        </div>
    `;
    container.innerHTML += task;
    inputValue.value = "";
});
/*
1. First, we create a new <script> element and set its type to text/javascript.
2. Next, we create a new variable called darkTheme and set it equal to the id of the HTML element that we want to add the event listener to.
3. Then, we create a new variable called darkTheme and set it equal to the id of the HTML element that we want to add the event listener to.
*/
let darkTheme = document.getElementById("dark");
darkTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});