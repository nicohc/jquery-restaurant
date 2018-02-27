

$('.presentation').on( 'click', function () {
    $('.menu_text').slideUp()
    $('.carte_text').slideUp()
    $('.presentation_text').slideDown()
});

$('.menu').on( 'click', function () {
    $('.presentation_text').slideUp()
    $('.carte_text').slideUp()
    $('.menu_text').slideDown()
});

$('.carte').on( 'click', function () {
    $('.presentation_text').slideUp()
    $('.menu_text').slideUp()
    $('.carte_text').slideDown("slow")
});
