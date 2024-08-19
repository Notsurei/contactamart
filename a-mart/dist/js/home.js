$(document).ready(function(){
    var $carousel = $('.Caro');
    $carousel.slick({
        autoplay:true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
        // adaptiveHeight: true
    });

    $('.prev-arrow').click(function() {
        $carousel.slick('slickPrev');
    });

    $('.next-arrow').click(function() {
        $carousel.slick('slickNext');
    });


    //cho nút xuất hiện khi scroll xuống
    const $scrollButton = $('.scrollback');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // Show button after scrolling 200px
            $scrollButton.addClass('visible');
        } else {
            $scrollButton.removeClass('visible');
        }
    });
});
