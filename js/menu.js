let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let homeContent = document.querySelector(".home_content");

btn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        homeContent.classList.add("home_content_left");
    } else {
        homeContent.classList.remove("home_content_left");
    }
});

searchBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        homeContent.classList.add("home_content_left");
    } else {
        homeContent.classList.remove("home_content_left");
    }
});
