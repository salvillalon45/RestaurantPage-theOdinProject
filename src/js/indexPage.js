const indexPageFactory = function() {

    const contentMain = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("index-page");
    // main.classList.add("hidden");

    function createHeader() {
        console.log("inside createHeader()");

        const header = document.createElement("header");
        const navContainer = document.createElement("div");
        const logoContainer = document.createElement("div");
        const navLinks = document.createElement("nav");

        navContainer.classList.add("nav-container");
        logoContainer.classList.add("logo-container");
        navLinks.classList.add("nav-links");

        logoContainer.innerHTML = '<p class="logo">Sal\'s Kitchen</p>';
        navLinks.innerHTML = '<ul class="menu">\n' + '<li class="nav-link">Our Story</li>\n' + '<li class="nav-link">Menu</li>\n' + '<li class="nav-link">Location</li>\n' + '</ul>'

        navContainer.append(logoContainer);
        navContainer.append(navLinks);

        header.append(navContainer);

        contentMain.append(header);
    }

    function createJumbotron() {
        console.log("Inside createJumbotron()");

        // Jumbotron section
        const jumbotron = document.createElement("div");
        const overlayContainer = document.createElement("div");
        const jumbotronText = document.createElement("div");

        jumbotron.classList.add("jumbotron");
        overlayContainer.classList.add("overlay-container");
        jumbotronText.classList.add("jumbotron-text");

        jumbotronText.innerHTML = '<h1>You Hungry? We got you with deals!</h1>\n' + '<h2>Order in with pick up or free delivery!</h2>';

        overlayContainer.append(jumbotronText);
        jumbotron.append(overlayContainer);

        main.append(jumbotron);

        contentMain.append(main);
    }

    function createOfferContainerText() {
        console.log("Inside createOfferContainerText()");

        const offerContainerText = document.createElement("div");
        offerContainerText.classList.add("offer-container-text");
        offerContainerText.innerHTML = '<h2>We got good offers this month!</h2>';

        main.append(offerContainerText);
        contentMain.append(main);
    }

    function createOfferContainer() {
        console.log("Inside createOfferContainer()");

        const offerContainer = document.createElement("div");
        const offerCard1 = document.createElement("div");
        const offerCard2 = document.createElement("div");
        const offerCard3 = document.createElement("div");

        offerContainer.classList.add("offer-container");
        offerCard1.classList.add("offer-card");
        offerCard2.classList.add("offer-card");
        offerCard3.classList.add("offer-card");

        // offerCard1.innerHTML = '<img src="../src/assets/images/burger.jpg">\n' + '<h3>Burger</h3>\n' + '<h4>Get two burgers</h4>\n' + '<h4>for the price of one</h4>';
        offerCard1.innerHTML = '<img src="./assets/images/burger.jpg">\n' + '<h3>Burger</h3>\n' + '<h4>Get two burgers</h4>\n' + '<h4>for the price of one</h4>';
        // offerCard2.innerHTML = '<img src="../src/assets/images/pho.jpg">\n' + '<h3>Pho</h3>\n' + '<h4>Get one pho,</h4>\n' + '<h4>get the second one free</h4>'
        offerCard2.innerHTML = '<img src="./assets/images/pho.jpg">\n' + '<h3>Pho</h3>\n' + '<h4>Get one pho,</h4>\n' + '<h4>get the second one free</h4>'
        // offerCard3.innerHTML = '<img src="../src/assets/images/tacos.jpg">\n' + '<h3>Tacos de Carne Asada</h3>\n' + '<h4>Get tacos and</h4>\n' + '<h4>drink combo for a low price</h4>'
        offerCard3.innerHTML = '<img src="./assets/images/tacos.jpg">\n' + '<h3>Tacos de Carne Asada</h3>\n' + '<h4>Get tacos and</h4>\n' + '<h4>drink combo for a low price</h4>'

        offerContainer.append(offerCard1);
        offerContainer.append(offerCard2);
        offerContainer.append(offerCard3);

        main.append(offerContainer);
        contentMain.append(main);
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
        // createHeader();
        createJumbotron();
        createOfferContainerText();
        createOfferContainer();
        // createFooter();
    }


    return {
        render
    }
}

export { indexPageFactory };