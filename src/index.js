console.log("Inside index.js");

import { layoutFactory } from "./js/layout";
import { ourStoryFactory } from "./js/ourStoryPage";
import { locationFactory } from "./js/locationsPage";
import { menuFactory } from "./js/menuPage";
import { indexPageFactory } from "./js/indexPage";

const OUR_STORY_NAV = "Our Story";
const LOCATION_NAV = "Location";
const MENU_NAV = "Menu";
const HOME_NAV = "Home";

let layout = layoutFactory();
let index = indexPageFactory();
let ourStory = ourStoryFactory();
let location = locationFactory();
let menu = menuFactory();

layout.createHeader();
index.render();
ourStory.render();
location.render();
menu.render();
layout.createFooter();

function navigate(navigation) {
    console.log(navigation);

    let indexPage = document.querySelector(".index-page");
    let locationPage = document.querySelector(".location-page");
    let menuPage = document.querySelector(".menu-page");
    let ourStoryPage = document.querySelector(".our-story-page");

    ourStoryPage.classList.add("hidden");
    locationPage.classList.add("hidden");
    menuPage.classList.add("hidden");

    if (navigation === OUR_STORY_NAV) {
        ourStoryPage.classList.remove("hidden");
        indexPage.classList.add("hidden");
    }
    else if (navigation === LOCATION_NAV) {
        locationPage.classList.remove("hidden");
        indexPage.classList.add("hidden");
    }
    else if (navigation === HOME_NAV) {
        indexPage.classList.remove("hidden");
    }
    else {
        menuPage.classList.remove("hidden");
        indexPage.classList.add("hidden");
    }
}

function createEventListeners() {
    let navLinksArray = Array.from(document.querySelectorAll(".nav-link"));

    for (let i = 0; i < navLinksArray.length; i++) {
        let link = navLinksArray[i];
        link.addEventListener("click", function () {
            navigate(this.innerHTML);
        });
    }
}

createEventListeners();