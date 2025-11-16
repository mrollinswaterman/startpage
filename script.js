let clock = $("#clock");

function getTime() {
    let time = new Date();
    let currentTime = time.toLocaleTimeString(
        'en-US',{ timeStyle: 'short' }
    );
    let currentDate = time.toLocaleDateString(
        'en-US',
        { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
    );
    clock.html(`${currentTime}&nbsp${currentDate}`);
}

function randomImage() {
    console.log("selecting random image");
    var i = Math.floor(Math.random() * 3);
    let img = $("img").get(0);
    if (img.src.includes(i)) {
        return randomImage();
    }
    $("img").attr("src", `assets/${i}.jpg`);
}

document.body.onkeyup = function(e) {
    if (e.key == " ") {
        //$("input").get(0).focus();
    }
}

function setup() {
    randomImage();
    setInterval(getTime, 1000);
}

setup();
