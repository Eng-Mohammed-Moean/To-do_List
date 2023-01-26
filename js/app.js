const button = document.querySelector("button");
const container = document.getElementById("container");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (eo) => {
    eo.preventDefault();
    const task = `<div class="task">
    <i class="icon fa-solid fa-star"></i>
    <p class="text-p">${input.value}</p>
    <di class="icon-end">
        <i class="icon fa-solid fa-trash"></i>
        <i class="icon fa-sharp fa-solid fa-face-angry"></i>
    </di>

</div>`;
    container.innerHTML += task;
    input.value = "";
})




container.addEventListener("click", (eo) => {
    switch (eo.target.className) {
        case "icon fa-solid fa-trash":
            eo.target.parentElement.parentElement.remove();
            break;
        case "icon fa-sharp fa-solid fa-face-angry":
            eo.target.style.display = "none";
            const icon = ` <i class="fa-solid fa-heart"></i>`;
            eo.target.parentElement.parentElement.getElementsByClassName("text-p")[0].classList.add("paragraph");
            eo.target.parentElement.innerHTML += icon;
            break;
        case "fa-solid fa-heart":
            eo.target.style.display = "none";
            eo.target.parentElement.parentElement.getElementsByClassName("text-p")[0].classList.remove("paragraph");
            const new_icon = `<i class="icon fa-sharp fa-solid fa-face-angry"></i>`;
            eo.target.parentElement.innerHTML += new_icon;
            break;
        case "icon fa-solid fa-star":
            eo.target.classList.add("orenge");
            eo.target.style.opacity = 1;
            // حط الاب للعنصر الذي سوف يحدث عليه الحدث في قمة حاوية التاسكات
            container.prepend(eo.target.parentElement);
            break;
        case "icon fa-solid fa-star orenge":
            eo.target.classList.remove("orenge");
            container.append(eo.target.parentElement);
            break;


        default:
            alert("Click on the icon")
            break;
    }
})