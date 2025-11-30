let clock = $("#clock");
let input = $("#input");

function isAlphaNumeric(code) {
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  return true;
};

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

function showSearchbar(key='') {
    console.log(key);
     // in input not focused and empty, focus it and add keypress to the value
    if (!document.activeElement != input && input.val() == '') {
        input.focus();
        input.val(key);
    }

    // if input is hidden, show it
    if ($("#data-wrapper").hasClass('hidden')){
        $("#data-wrapper").toggleClass('hidden');
        let checkEmpty = setInterval(() => {
            if (input.val() == '') {
                $("#data-wrapper").toggleClass('hidden');
                clearInterval(checkEmpty);
            }
        }, 100);
    }
}

$("#data-wrapper").on('mouseover', () => {
    if ($("#data-wrapper").hasClass('hidden')){
        $("#data-wrapper").toggleClass('hidden');
    }
});

$("#data-wrapper").on('mouseleave', () => {
    if (!$("#data-wrapper").hasClass('hidden')){
        $("#data-wrapper").toggleClass('hidden');
    }
});

document.body.onkeydown = function(e) {
    if (isAlphaNumeric(e.code)){
        showSearchbar(e.key);
    } else {
        showSearchbar();
    }

}

$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});

function setup() {
    input.focus();
    setInterval(getTime, 1000);
}

setup();
