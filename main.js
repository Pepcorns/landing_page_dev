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
                    $(".brand-logo ").attr("src", "http://placekitten.com/300/300");
                    $(".brand-logo ").attr("src", "http://placekitten.com/200/200");
                }
            }
        });
    }).scroll();
});


// $(document).ready(function () {
//     $(window).on("scroll", function () {
//         var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//         $(".brand-logo").each(function () {
//             var objectBottom = $(this).offset().top + $(this).outerHeight();
//             console.log(objectBottom - windowBottom)
//             if (objectBottom < windowBottom) {
//                 $(".brand-logo ").attr("src", "http://placekitten.com/300/300");
//             } else {
//                 $(".brand-logo ").attr("src", "http://placekitten.com/200/200");
//             }
//         })

//     })
// })

$(document).ready(function () {
    $(window).on("scroll", function () {
        console.log($(this).scrollTop())
        var wW = $(window).width()
        if (wW < 1440) {
            if ($(this).scrollTop() >= 2600) {
                console.log("new")
                $(".brand-logo ").attr("src", "http://placekitten.com/300/300");
            } else {
                console.log("old");
                $(".brand-logo ").attr("src", "http://placekitten.com/200/200");
            }
        } else if (wW > 1440) {
            if ($(this).scrollTop() >= 3100) {
                console.log("new")
                $(".brand-logo ").attr("src", "http://placekitten.com/300/300");
            } else {
                console.log("old");
                $(".brand-logo ").attr("src", "./assets/an_2.gif");
            }
        } else {
            if ($(this).scrollTop() >= 2600) {
                console.log("new")
                $(".brand-logo ").attr("src", "http://placekitten.com/300/300");
            } else {
                console.log("old");
                $(".brand-logo ").attr("src", "http://placekitten.com/200/200");
            }
        }

    })
})