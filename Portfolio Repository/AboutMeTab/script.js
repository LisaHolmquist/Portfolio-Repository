

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const animated = document.querySelectorAll(".animated");
        if(entry.isIntersecting){
            animated.forEach(item => {
                item.classList.add("inView");
            });
            
            // console.log("running");
        } else {
            //console.log("outOfView");
            animated.forEach(item => {
                item.classList.remove("inView");
            });
        };
    });
});

const prigrid = document.querySelector(".primaryGrid");
observer.observe(prigrid);
