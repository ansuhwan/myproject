"use strict";

const delayBtn = document.querySelector(".delay-page-btn");

delayBtn.addEventListener("click", ()=>{
  const delay1 = document.querySelector(".delay-page");
  delay1.style.display="none"
});
// text move
//text 옆(오른쪽)으로 움직이기
/* let layer1 = document.getElementById("home");
let layer2 = document.getElementById("about");
scroll = window.pageYOffset;
document.addEventListener("scroll", function (e) {
  let offset = window.pageYOffset;
  scroll = offset;
  // layer1.style.width = (100 + scroll/5) + '%'
  layer1.style.top = -scroll / 5 + "%";
  layer1.style.position = "absolute";
  layer1.style.width = "100%";
  about.style.marginTop = "700px";
  navbar.style.position="absolute"
  navbar.style.width = "100%";
  navbar.style.top = "0px";
}); */
const about = document.getElementById("about");
document.addEventListener("scroll",()=>{
  let op = 2- (window.pageYOffset / about.offsetHeight);
  about.style.opacity = op;

});
scrollEffect();

//text 위로 움직이기
/* let text = document.getElementById('text_up');
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e){
  let offset = window.pageYOffset;
  scroll = offset;
  // layer2.style.width = (100 + scroll/5) + '%'
  text.style.top = - scroll/5 + '%';
  let totaltop = text.style.top;
}); */

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  
  navbar.style.position="fixed"
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});
const arrowUp2 = document.querySelector("#toggleTheme");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp2.classList.add("visible");
  } else {
    arrowUp2.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  }
  e.target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
// 색 반전
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
