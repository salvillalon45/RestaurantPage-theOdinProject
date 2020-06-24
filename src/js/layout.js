const layoutFactory = function() {

    const contentMain = document.querySelector("#content");
    const main = document.createElement("main");

    function createHeader() {
        console.log("inside createHeader()");

        const header = document.createElement("header");
        const navContainer = document.createElement("div");
        const logoContainer = document.createElement("div");
        const navLinks = document.createElement("nav");
        const menu = document.createElement("ul");
        const navLink1 = document.createElement("li");
        const navLink2 = document.createElement("li");
        const navLink3 = document.createElement("li");
        const navLink4 = document.createElement("li");

        navContainer.classList.add("nav-container");
        logoContainer.classList.add("logo-container");
        navLinks.classList.add("nav-links");
        menu.classList.add("menu");
        navLink1.classList.add("nav-link");
        navLink2.classList.add("nav-link");
        navLink3.classList.add("nav-link");
        navLink4.classList.add("nav-link");

        logoContainer.innerHTML = '<p class="logo">Sal\'s Kitchen</p>';
        // navLinks.innerHTML = '<ul class="menu">\n' + '<li class="nav-link">Our Story</li>\n' + '<li class="nav-link">Menu</li>\n' + '<li class="nav-link">Location</li>\n' + '</ul>'
        navLink4.innerHTML = "Home";
        navLink1.innerHTML = "Our Story";
        navLink2.innerHTML = "Menu";
        navLink3.innerHTML = "Location";

        menu.append(navLink4);
        menu.append(navLink1);
        menu.append(navLink2);
        menu.append(navLink3);
        navLinks.append(menu);

        navContainer.append(logoContainer);
        navContainer.append(navLinks);

        header.append(navContainer);

        contentMain.append(header);
    }

    function createFooter() {
        console.log("Inside createFooter()");

        const footer = document.createElement("footer");
        footer.classList.add("footer");

        footer.innerHTML = '<ul class="social-icons">\n' +
            '                    <li><span>&copy; 2020 Made by Salvador Villalon</span></li>\n' +
            '                    <li>\n' +
            '                        <a href="https://www.linkedin.com/in/salvadorvillalon/" class="social-icon">\n' +
            '                            <i class="fa fa-linkedin" aria-hidden="true"></i>\n' +
            '                        </a>\n' +
            '                    </li>\n' +
            '                    <li>\n' +
            '                        <a href="https://salvillalon45.github.io/" class="social-icon">\n' +
            '                            <i class="fa fa-user" aria-hidden="true"></i>\n' +
            '                        </a>\n' +
            '                    </li>\n' +
            '                </ul>';

        contentMain.append(footer);
    }

    function render() {
        createHeader();
        createFooter();
    }


    return {
        render, createHeader, createFooter
    }
}

export { layoutFactory };