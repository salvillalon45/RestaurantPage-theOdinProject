const locationFactory = function() {

    const contentMain = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("location-page");
    main.classList.add("hidden");

    function createLocation() {
        const locationContainer = document.createElement("div");

        locationContainer.classList.add("location-container");

        locationContainer.innerHTML = '<h1>Locations</h1>\n' + '<p>Calexico, CA</p>\n' + '<br>\n' + '<p>Chula Vista, CA</p>\n' + '<br>\n' + '<p>New York, NY</p>\n' + '<br>\n' + '<p>Chicago, IL</p>\n' + '<br>\n' + '<p>Irvine, CA</p>\n' + '<br>\n' + '<p>San Diego, CA</p>';

        main.append(locationContainer);
        contentMain.append(main);
    }

    function render() {
        createLocation();
    }

    return {
        render
    }
}

export { locationFactory }
