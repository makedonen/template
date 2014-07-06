$(document).ready(function(){
    $(".match-height").matchHeight();
    $(".match-height2").matchHeight();
    $(".match-height3").matchHeight();
    $('.slider').slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }]

    });
    $('#slider-next').click(function(){
        $('.slider').slickNext();
        return false;
    });
    $('#slider-prev').click(function(){
        $('.slider').slickPrev();
        return false;
    });

    $('a.scroll-btn').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 500);
        return false
        });
})