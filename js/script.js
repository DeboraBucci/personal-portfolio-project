// VARIABLES :
const code = document.querySelectorAll(".code");
const projectsLinks = document.querySelectorAll(".projects-links");
let span;

// PROJECTS-LINKS FINDER FUNCTION:
const findSpan = function (event) {
  const close = event.target.parentNode.closest(".projects-links");
  span = close.querySelectorAll("span");
};

// MOUSEOVER :
projectsLinks.forEach((element) =>
  element.addEventListener("mouseover", function (event) {
    findSpan(event);
    span.forEach((span) => {
      span.style.color = "#ff7300";
      span.style.transition = "1s";
    });
  })
);

// MOUSEOUT :
projectsLinks.forEach((element) =>
  element.addEventListener("mouseout", function (event) {
    findSpan(event);
    span.forEach((span) => {
      span.style.color = "transparent";
      span.style.transition = "1.5s";
    });
  })
);
