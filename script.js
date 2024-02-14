$(document).ready(function() {
    $('.card').hover(function() {
        $(this).toggleClass('open');
        $('.shadow').toggle();
    });
});