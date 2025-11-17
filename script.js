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

function checkDoneTyping(){
    if ($("#typed").html() == $("#typed-strings").html().trim().slice(3,-4)){
        clearInterval(check);
        $("#typed").toggleClass('hidden-cursor', true);
        setTimeout(() => {
            showSearchbar();
        }, 200);
    }
}

var check = setInterval(checkDoneTyping, 10);

function randomImage() {
    console.log("selecting random image");
    var i = Math.floor(Math.random() * 3);
    let img = $("img").get(0);
    if (img.src.includes(i)) {
        return randomImage();
    }
    $("img").attr("src", `assets/${i}.jpg`);
}

function searchbarHidden() {
    return $("#searchbar").css("display") == 'none'
}

function showSearchbar(key=null) {
    if (searchbarHidden()) {
        $("#searchbar").css("display", "flex");
        $("input").get(0).focus();
        if (key && key != "Meta") {
            $("#input").val(key);
        }
    }

}

document.body.onkeyup = function(e) {
    showSearchbar(e.key);
    document.body.onkeyup = null;
}

function setup() {
    randomImage();
    setInterval(getTime, 1000);
}

setup();
