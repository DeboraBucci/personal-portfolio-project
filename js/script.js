// VARIABLES :
const code = document.querySelectorAll(".code");
const projectsLinks = document.querySelectorAll(".projects-links");
let p;

// PROJECTS-LINKS FINDER FUNCTION:
const findP = function (event) {
  const close = event.target.parentNode.closest(".projects-links");
  p = close.querySelectorAll("span");
};

// MOUSEOVER :
projectsLinks.forEach((element) =>
  element.addEventListener("mouseover", function (event) {
    findP(event);
    p.forEach((p) => {
      p.style.color = "#ff7300";
      p.style.transition = "1s";
    });
  })
);

// MOUSEOUT :
projectsLinks.forEach((element) =>
  element.addEventListener("mouseout", function (event) {
    findP(event);
    p.forEach((p) => {
      p.style.color = "transparent";
      p.style.transition = "2s";
    });
  })
);
