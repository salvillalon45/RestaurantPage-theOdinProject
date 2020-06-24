const menuFactory = function() {

    const contentMain = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("menu-page");
    main.classList.add("hidden");

    function createMenu() {
        console.log("Inside createMenu()");

        const menuContainerText = document.createElement("div");
        const menuContainer = document.createElement("div");
        const menuCard1 = document.createElement("div");
        const menuCard2 = document.createElement("div");
        const menuCard3 = document.createElement("div");
        const menuCard4 = document.createElement("div");
        const menuCard5 = document.createElement("div");
        const menuCard6 = document.createElement("div");

        menuContainerText.classList.add("menu-container-text");
        menuContainer.classList.add("menu-container");
        menuCard1.classList.add("menu-card");
        menuCard2.classList.add("menu-card");
        menuCard3.classList.add("menu-card");
        menuCard4.classList.add("menu-card");
        menuCard5.classList.add("menu-card");
        menuCard6.classList.add("menu-card");

        menuCard1.innerHTML = '<img src="../src/assets/images/burger.jpg">\n' + '<h3>Burger</h3>';
        menuCard2.innerHTML = '<img src="../src/assets/images/pho.jpg">\n' + '<h3>Pho</h3>';
        menuCard3.innerHTML = '<img src="../src/assets/images/tacos.jpg">\n' + '<h3>Tacos de Carne Asada</h3>';
        menuCard4.innerHTML = '<img src="../src/assets/images/pancakes.jpg">\n' + '<h3>Pancakes</h3>';
        menuCard5.innerHTML = '<img src="../src/assets/images/steak.jpg">\n' + '<h3>Steak</h3>';
        menuCard6.innerHTML = '<img src="../src/assets/images/shrimps.jpg">\n' + '<h3>Roasted Shrimp</h3>'
        menuContainerText.innerHTML = '<h1>Our Menu</h1>';

        menuContainer.append(menuCard1);
        menuContainer.append(menuCard2);
        menuContainer.append(menuCard3);
        menuContainer.append(menuCard4);
        menuContainer.append(menuCard5);
        menuContainer.append(menuCard6);

        main.append(menuContainerText);
        main.append(menuContainer);
        contentMain.append(main);
    }

    function render() {
        createMenu();
    }

    return {
        render
    }
}

export { menuFactory }
