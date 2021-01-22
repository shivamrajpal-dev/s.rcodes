let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".navLinks");
let smallCursor = document.querySelector(".smallCursor");
let aboutPage = document.querySelector(".About-page");
let landingPage = document.querySelector(".landing-page");
let ProjectsPage = document.querySelector(".projects-page");
let mouseHoverclass;
console.log(landingPage);
const Cursor = (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
};

window.addEventListener("mousemove", Cursor);

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add(mouseHoverclass);
    link.classList.add("hovered-link");
    smallCursor.style.display = "none";
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove(mouseHoverclass);
    link.classList.remove("hovered-link");
    smallCursor.style.display = "block";
  });
});
landingPage.addEventListener("mouseover", () => {
  mouseCursor.style.borderColor = "var(--pink)";
  smallCursor.style.borderColor = "var(--cream)";
  mouseHoverclass = "link-grow";
});
aboutPage.addEventListener("mouseover", () => {
  mouseCursor.style.borderColor = "var(--cream)";
  smallCursor.style.borderColor = "var(--blue)";
  mouseHoverclass = "cursor-bg";
});
ProjectsPage.addEventListener("mouseover", () => {
  mouseCursor.style.borderColor = "var(--pink)";
  smallCursor.style.borderColor = "var(--cream)";
  mouseHoverclass = "link-grow";
});
