//navbar hide and show on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".nav1").classList.remove('hide')
    } else {
        document.querySelector(".nav1").classList.add('hide')
    }
    prevScrollpos = currentScrollPos;
}


//fade effect for elements
$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(100, 1);
                }
            } else {
                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo(100, 0);
                }
            }
        });
    }).scroll();
});

//play video when in view
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
var vid = document.querySelector(".vi");
vid.playbackRate = 1;
function videoScroll() {

    if (document.querySelectorAll('video[autoplay]').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('video[autoplay]');

        for (var i = 0; i < videoEl.length; i++) {

            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;

            if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                thisVideoEl.play();
            } else {
                thisVideoEl.pause();
            }

        }
    }

}


function subscribemailboxFun() {
    var em2 = document.querySelector('.subscribemail').value;
    console.log(em2)
    subscribeInv(em2)
}

function subscribeInv(email) {

    if (email.length == 0) {
        swal("Wait up...", "Please enter a valid email address to continue.", 'warning');
    }
    else {
        if (validateEmail(email)) {

            //window.location.replace("https://app.pepcorns.com/#!/signup");
            //window.location("https://pep.bitnamiapp.com/founders/#!/signup")
            send_request(JSON.stringify({ "email": email }))
        }
        else {
            swal("..mmmm", "The email ID seems incorrect.Do you mind checking it once.", 'warning');
        }
    }
}


function websiteEmailCamp(email) {
    //?referralcode=1234&emailCampaign=123rerw
    if (email.length == 0) {
        swal("Wait up...", "Please enter a valid email address to continue.", 'warning');
    }
    else {
        if (validateEmail(email)) {
            window.open("https://app.pepcorns.com/#!/signup?referralcode=websitecamp&emailCampaign=" + email);
            //send_request(JSON.stringify({ "email": email}))
        }
        else {
            swal("..mmmm", "The email ID seems incorrect.Do you mind checking it once.", 'warning');
        }
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function send_request(payload) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        // debugger
        if (xhttp.readyState === 4) {
            console.log("Respone-", xhttp.response);
            swal("Hi..", JSON.parse(xhttp.response).message, "success");
        }

    }
    xhttp.open("POST", "https://devapi.pepcorns.com/api/v1/web/subscribe", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(payload);
}
