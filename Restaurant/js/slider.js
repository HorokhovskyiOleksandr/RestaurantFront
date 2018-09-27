'use strict';
$(document).ready(function(){
$('#sliderContainer').slick({
   prevArrow: $('#prev'),
   nextArrow: $('#next'),
    dots:true,
    dotsClass:'dot',
    
   infinite: true,
   autoplay:true,
   autoplaySpeed:2000,
   speed: 1000,
   slidesToShow: 1,
   
    
   responsive: [
    {
      breakpoint: 800,
      settings: {
        infinite: true,
        prevArrow:'',
        nextArrow:'',
      }
    }]
})
$('#bottomSlider').slick({
   prevArrow: $('.prev'),
   nextArrow: $('.next'),
   infinite: true,
   autoplay:true,
   autoplaySpeed:2000,
   speed: 1000,
   slidesToShow: 1,
   responsive: [
    {
      breakpoint: 800,
      settings: {
        infinite: true,
        prevArrow:'',
        nextArrow:'',
      }
    }]
})
})
