

function isSmallScreen() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        //console.log("true");
        document.getElementById("image").style.display='none';
    }
}


const matchResult = window.matchMedia("(max-width: 768px)");
//console.log(matchResult);
