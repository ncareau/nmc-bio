var lnStickyNavigation;

$(document).ready(function () {

    $('.jumbotron').css({height: ($(window).height()) + 'px'});

    applyClickEvent();
    applyNavigationFixForPhone();
    applyStickyNavigation();
    nmcAnim();

    // applyResize();
});

function nmcAnim() {

    var l1 = $("#l1");
    var l2 = $("#l2");
    var l3 = $("#l3");

    var w1 = $("#w1");
    var w2 = $("#w2");
    var w3 = $("#w3");

    var l1_offset = l1.offset();
    var l2_offset = l2.offset();
    var l3_offset = l3.offset();

    w1.show();
    w2.show();
    w3.show();

    var l1_new_offset = l1.offset();
    var l2_new_offset = l2.offset();
    var l3_new_offset = l3.offset();

    l1.velocity({
        translateX: l1_offset.left - l1_new_offset.left,
        translateY: l1_offset.top - l1_new_offset.top
    }, {duration: 0})
        .delay(750).velocity({
        translateX: 0,
        translateY: 0
    }, 1200, "easeOutBack");

    l2.velocity({
        translateX: l2_offset.left - l2_new_offset.left,
        translateY: l2_offset.top - l2_new_offset.top
    }, {duration: 0})
        .delay(750).velocity({
        translateX: 0,
        translateY: 0
    }, 1200, "easeOutBack");

    l3.velocity({
        translateX: l3_offset.left - l3_new_offset.left,
        translateY: l3_offset.top - l3_new_offset.top
    }, {duration: 0})
        .delay(750).velocity({
        translateX: 0,
        translateY: 0
    }, 1200, "easeOutBack");

    w1.delay(1500).velocity({
        opacity:1
    }, 1000, "easeOutBack");

    w2.delay(1500).velocity({
        opacity:1
    }, 1000, "easeOutBack");

    w3.delay(1500).velocity({
        opacity:1
    }, 1000, "easeOutBack");

}

function applyClickEvent() {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        if ($($.attr(this, 'href')).length > 0) {
            $('html, body').animate(
                {
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 400);
        }
        return false;
    });
}

function applyNavigationFixForPhone() {
    $('.navbar li a').click(function (event) {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
    });
}

function applyStickyNavigation() {
    lnStickyNavigation = $('.scroll-down').offset().top + 20;

    $(window).on('scroll', function () {
        stickyNavigation();
    });

    stickyNavigation();
}

function stickyNavigation() {
    if ($(window).scrollTop() > lnStickyNavigation) {
        $('body').addClass('fixed');
    }
    else {
        $('body').removeClass('fixed');
    }
}

/* RESIZE FUNCTION */

function applyResize() {
    $(window).on('resize', function () {
        lnStickyNavigation = $('.scroll-down').offset().bottom + 20;

        $('.jumbotron').css({height: ($(window).height()) + 'px'});
    });
}
