let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".navLinks");
let smallCursor = document.querySelector(".smallCursor");
let aboutPage = document.querySelector(".About-page");
let landingPage = document.querySelector(".landing-page");
let ProjectsPage1 = document.querySelector(".project-page1");
let ProjectsPage2 = document.querySelector(".project-page2");
let contactPage = document.querySelector(".contact-page");
let button = document.querySelector("#button");
let svg = document.querySelector("#svg");
let mouseHoverclass;
let linkcolor;
console.log(landingPage);
const Cursor = (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
};

window.addEventListener("mousemove", Cursor);

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add(mouseHoverclass);
    link.style.color = linkcolor;
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
  linkcolor = "var(--blue)";
  navLinks.forEach((link) => {
    link.style.color = "var(--cream)";
  });
});
aboutPage.addEventListener("mouseover", () => {
  mouseCursor.style.borderColor = "var(--cream)";
  smallCursor.style.borderColor = "var(--blue)";
  mouseHoverclass = "cursor-bg";
  linkcolor = "var(--pink)";
  navLinks.forEach((link) => {
    link.style.color = "var(--blue)";
  });
});
ProjectsPage1.addEventListener("mouseover", () => {
  mouseCursor.style.borderColor = "var(--pink)";
  smallCursor.style.borderColor = "var(--cream)";
  mouseHoverclass = "link-grow";
  linkcolor = "var(--blue)";
  navLinks.forEach((link) => {
    link.style.color = "var(--cream)";
  });
});
ProjectsPage2.addEventListener("mouseover", () => {
  mouseCursor.style.borderColor = "var(--pink)";
  smallCursor.style.borderColor = "var(--cream)";
  mouseHoverclass = "link-grow";
  linkcolor = "var(--blue)";
  navLinks.forEach((link) => {
    link.style.color = "var(--cream)";
  });
});
contactPage.addEventListener("mouseover", () => {
  mouseCursor.style.borderColor = "var(--blue)";
  smallCursor.style.borderColor = "var(--pink)";
  mouseHoverclass = "grow";
  linkcolor = "var(--cream)";
  navLinks.forEach((link) => {
    link.style.color = "var(--blue)";
  });
});

button.addEventListener("mouseover", () => {
  svg.style.fill = "rgb(51, 250, 250)";
});
button.addEventListener("mouseleave", () => {
  svg.style.fill = "rgb(18, 32, 32)";
});
