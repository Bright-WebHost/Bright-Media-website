$(document).ready(function(){
    $('.slider').slick({
slidesToShow: 3, // Adjust the number of images to show at once
slidesToScroll: 3,
infinite: true,
dots: false,
arrows: true,
autoplay: true, // Enable autoplay
autoplaySpeed: 4000, // Set autoplay speed to 4 seconds
responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1, // Adjust for smaller screens
    }
}
]
});
$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', 
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true, 
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});
});