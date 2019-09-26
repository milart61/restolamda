
 jQuery(document).ready(function($){
// -------------burger menu----------------
$('.menu-btn-span').click(function(event) {
    $('.menu-btn-ul').toggleClass('active');
    $('.menu-btn-span-none').toggleClass('active');
    $('.menu-btn-span').toggleClass('active');
    
    
    


});

    $('.menu-btn-span-none').click(function(event) {
    $('.menu-btn-span-none').toggleClass('active');
    $('.menu-btn-ul').toggleClass('active');
    $('.menu-btn-span').toggleClass('active');

});
});