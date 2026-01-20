let current = 0;
const slides = document.querySelectorAll(".slide");

const title = document.getElementById("main-title");
const name = document.getElementById("user-name");
const page = document.getElementById("page-number");

function update() {
  slides.forEach((s, i) =>
    s.classList.toggle("active", i === current - 1)
  );

  if (current > 0) {
    title.classList.add("minimized");
    name.classList.add("minimized");
    page.classList.add("onscreen");
    page.textContent = current;
  } else {
    title.classList.remove("minimized");
    name.classList.remove("minimized");
    page.classList.remove("onscreen");
  }

  document.documentElement.style.setProperty(
    "--bg-offset",
    `-${current * 20}%`
  );
}

window.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" && current < slides.length) current++;
  if (e.key === "ArrowLeft" && current > 0) current--;
  update();
});
