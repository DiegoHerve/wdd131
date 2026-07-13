
const hamburgerBtn = document.getElementById("hamburger-btn");
const navigation = document.querySelector(".navigation");

hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        hamburgerBtn.textContent = "✖";
        hamburgerBtn.setAttribute("aria-expanded", "true");
    } else {
        hamburgerBtn.textContent = "☰";
        hamburgerBtn.setAttribute("aria-expanded", "false");
    }
});


document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;