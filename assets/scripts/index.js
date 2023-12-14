const app = {
    // Variables
    targetCrisisImage: document.querySelector('.reveal .slides section script div'),
    // Main run
    run: () => {
        console.log(app.targetCrisisImage);
        app.openCrisisImgInView()
    },
    isInView: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
        openCrisisImgInView: () => {
        if (app.isInView(app.targetCrisisImage))
            app.targetCrisisImage.classList.add("in-view")
    }
}

// app.run();