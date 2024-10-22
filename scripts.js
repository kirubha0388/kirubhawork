let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

function show() {
  const navList = document.getElementById("navList");

  // Apply the 'right: 0' style to the nav ul
  navList.style.right = "0";
}

function hide() {
  const navList = document.getElementById("navList");

  navList.style.right = "-16rem";
}

const scrollTopBtn = document.getElementsByClassName("scroll-top")[0];

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// function servicesDropdown(event) {
//   event.preventDefault();
//   const servicesDropdown = document.querySelector(".services_dropdown ul");
//   const projectsDropdown = document.querySelector(".projects_dropdown ul");

//   if (projectsDropdown.style.display === "block") {
//     projectsDropdown.style.display = "none";
//   }

//   if (servicesDropdown.style.display === "block") {
//     servicesDropdown.style.display = "none";
//   } else {
//     servicesDropdown.style.display = "block";
//   }
// }

// function projectsDropdown(event) {
//   event.preventDefault();
//   const projectsDropdown = document.querySelector(".projects_dropdown ul");
//   const servicesDropdown = document.querySelector(".services_dropdown ul");

//   if (servicesDropdown.style.display === "block") {
//     servicesDropdown.style.display = "none";
//   }

//   if (projectsDropdown.style.display === "block") {
//     projectsDropdown.style.display = "none";
//   } else {
//     projectsDropdown.style.display = "block";
//   }
// }

// function handleResize() {
//   const windowWidth = window.innerWidth;

//   const projectsDropdown = document.querySelector(".projects_dropdown ul");
//   const servicesDropdown = document.querySelector(".services_dropdown ul");

//   if (windowWidth > 420) {
//     document
//       .getElementById("projectsLink")
//       .removeEventListener("click", projectsDropdown);

//     document
//       .getElementById("serviceLink")
//       .removeEventListener("click", servicesDropdown);
//   } else {
//     document
//       .getElementById("projectsLink")
//       .addEventListener("click", projectsDropdown);

//     document
//       .getElementById("serviceLink")
//       .addEventListener("click", servicesDropdown);
//   }
// }

// window.addEventListener("resize", handleResize);

// handleResize();
