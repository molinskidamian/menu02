let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});

searchBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});
