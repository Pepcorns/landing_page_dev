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
var vid = document.getElementByClass("vi");
vid.playbackRate = 2;
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


