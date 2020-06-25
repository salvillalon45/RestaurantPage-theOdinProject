const indexPageFactory = function() {

    let debug = 0;
    const contentMain = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("index-page");

    function createJumbotron() {
        console.log("Inside createJumbotron()");

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

        debug === 1 && (offerCard1.innerHTML = '<img src="../src/assets/images/burger.jpg">\n' + '<h3>Burger</h3>\n' + '<h4>Get two burgers</h4>\n' + '<h4>for the price of one</h4>');
        debug === 0 && (offerCard1.innerHTML = '<img src="./assets/images/burger.jpg">\n' + '<h3>Burger</h3>\n' + '<h4>Get two burgers</h4>\n' + '<h4>for the price of one</h4>');

        debug === 1 && (offerCard2.innerHTML = '<img src="../src/assets/images/pho.jpg">\n' + '<h3>Pho</h3>\n' + '<h4>Get one pho,</h4>\n' + '<h4>get the second one free</h4>');
        debug === 0 && (offerCard2.innerHTML = '<img src="./assets/images/pho.jpg">\n' + '<h3>Pho</h3>\n' + '<h4>Get one pho,</h4>\n' + '<h4>get the second one free</h4>');

        debug === 1 && (offerCard3.innerHTML = '<img src="../src/assets/images/tacos.jpg">\n' + '<h3>Tacos de Carne Asada</h3>\n' + '<h4>Get tacos and</h4>\n' + '<h4>drink combo for a low price</h4>');
        debug === 0 && (offerCard3.innerHTML = '<img src="./assets/images/tacos.jpg">\n' + '<h3>Tacos de Carne Asada</h3>\n' + '<h4>Get tacos and</h4>\n' + '<h4>drink combo for a low price</h4>');

        offerContainer.append(offerCard1);
        offerContainer.append(offerCard2);
        offerContainer.append(offerCard3);

        main.append(offerContainer);
        contentMain.append(main);
    }

    function render() {
        createJumbotron();
        createOfferContainerText();
        createOfferContainer();
    }

    return {
        render
    }
}

export { indexPageFactory };