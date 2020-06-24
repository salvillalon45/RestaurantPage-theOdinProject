const ourStoryFactory = function() {

    const contentMain = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("our-story-page");
    main.classList.add("hidden");

    function createOurStory() {
        const ourStoryContainer = document.createElement("div");

        ourStoryContainer.classList.add("our-story-container");

        ourStoryContainer.innerHTML = '<h1>Our Story</h1>\n' +
            '            <p>Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Enim blandit volutpat maecenas volutpat blandit. Dui id ornare arcu odio. Arcu cursus euismod quis viverra nibh. Elementum tempus egestas sed sed risus pretium quam. Vulputate mi sit amet mauris commodo quis. Sapien eget mi proin sed libero enim. Proin gravida hendrerit lectus a. Ipsum dolor sit amet consectetur. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Nec dui nunc mattis enim ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. At quis risus sed vulputate. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Convallis convallis tellus id interdum velit. Diam quis enim lobortis scelerisque fermentum. Turpis massa tincidunt dui ut ornare lectus. Condimentum id venenatis a condimentum vitae sapien pellentesque.</p>\n' +
            '            <br>\n' +
            '            <p>Id aliquet lectus proin nibh nisl condimentum id venenatis a. Nec ultrices dui sapien eget mi proin. Integer feugiat scelerisque varius morbi enim. Elementum sagittis vitae et leo duis. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Pretium fusce id velit ut tortor pretium. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Varius morbi enim nunc faucibus a pellentesque sit. Diam ut venenatis tellus in metus. Sem viverra aliquet eget sit amet tellus cras adipiscing. Lacus sed viverra tellus in. Accumsan tortor posuere ac ut consequat semper.</p>\n' +
            '            <br>\n' +
            '            <p>Lobortis scelerisque fermentum dui faucibus in ornare quam. Vitae aliquet nec ullamcorper sit amet. Adipiscing enim eu turpis egestas pretium aenean pharetra. Varius vel pharetra vel turpis nunc eget lorem dolor. Hendrerit dolor magna eget est lorem. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Gravida in fermentum et sollicitudin ac. Ultricies leo integer malesuada nunc vel. Ultricies lacus sed turpis tincidunt id aliquet risus. Turpis nunc eget lorem dolor. Quis commodo odio aenean sed adipiscing diam. Amet commodo nulla facilisi nullam. Nisl purus in mollis nunc sed id semper risus. Est velit egestas dui id ornare arcu odio.</p>\n' +
            '            <br>\n' +
            '            <p>Massa vitae tortor condimentum lacinia quis. Sed enim ut sem viverra aliquet eget. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Eget egestas purus viverra accumsan. Sem integer vitae justo eget magna fermentum iaculis eu non. Congue nisi vitae suscipit tellus. Sit amet mattis vulputate enim nulla. Eget aliquet nibh praesent tristique. Nulla at volutpat diam ut venenatis tellus. Turpis nunc eget lorem dolor. Turpis egestas integer eget aliquet.</p>';

        main.append(ourStoryContainer);
        contentMain.append(main);
    }

    function render() {
        createOurStory();
    }

    return {
        render
    }
}

export { ourStoryFactory }
