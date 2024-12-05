Shery.mouseFollower();
Shery.makeMagnet(".magnet");

function toogleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

let darkmode = localStorage.getItem("darkmode");
const colorswitch = document.querySelector(".color-switch");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.removeItem("darkmode");
};

if (darkmode === "active") enableDarkMode();

if (colorswitch) {
  colorswitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
  });
}



// Select the custom cursor element
const customCursor = document.querySelector('.custom-cursor');

// Update the cursor position on mousemove
document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

