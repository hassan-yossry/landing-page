/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/*
 *@description builds the navigation bar
 *@params {string} nabar_id the id of the navigation bar
 *@return undefiened
 */
function build_navbar(navbar_id) {
  const navbar_list = document.getElementById(navbar_id);
  let sections = document.querySelectorAll("section");

  //add the li and the anchor elements store the corresponding section id as attr
  for (const section of sections) {
    const sectionText = section.getAttribute("data-nav");
    const sectionId = section.getAttribute("id");
    navbar_list.insertAdjacentHTML(
      "beforeend",
      `<li><a href="#" data-id="${sectionId}" class="menu__link your-active-class">${sectionText}</a></li>`
    );
  }

  //add a click event to scroll to the corresponding section smoothly
  //the event is delegated
  navbar_list.addEventListener("click", (evt) => {
    if (evt.target.nodeName === "A") {
      evt.preventDefault();
      document
        .getElementById(evt.target.getAttribute("data-id"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
}

/*
 *@description adds your-active-class to sections
 *@return undefiened
 */
function activate_visibleSections() {
  document.querySelectorAll("section").forEach((elm) => {
    const theTop = elm.getBoundingClientRect().top;
    //changed for responsiveness
    const height = Math.abs(theTop - elm.getBoundingClientRect().bottom);
    if (theTop < 0.5 * height && theTop > -0.5 * height) {
      if (!elm.classList.contains("your-active-class")) {
        elm.classList.add("your-active-class");
        document
          .querySelector(`a[data-id="${elm.id}"]`)
          //added a css rule for anchor tags similar to hover effect
          .classList.add("your-active-class");
      }
    } else {
      elm.classList.remove("your-active-class");
      document
        .querySelector(`a[data-id="${elm.id}"]`)
        .classList.remove("your-active-class");
    }
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */
// build the nav
build_navbar("navbar__list");

// Add class 'active' to section when near top of viewport
activate_visibleSections();

//activate visible sections on scrolling
document.addEventListener("scroll", activate_visibleSections);
