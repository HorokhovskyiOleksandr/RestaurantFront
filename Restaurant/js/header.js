'use strict';
let logo = document.getElementsByClassName("LogoName");
let topScroll = 0;
let i=0;


function LogoAnimation(){
    
    if(i<logo.length){
        for(let i=0;i<logo.length;i++){
            $(logo).removeClass('rotate360')  
            $(logo[i]).delay(i*100).queue(function (next) { 
            $(this).stop().addClass('rotate360'); 
            next();
            })    
        }
   
    }
}

//function LogoAnimationBack(){
//        if(i<logo.length){
//    
//    for(let i=0;i<logo.length;i++){
//      $(logo).removeClass('rotate360')  
//    $(logo[logo.length-i]).delay(i*100).queue(function (next) { 
//    
//    $(this).stop().addClass('rotate360'); 
//    next();
//    
//  })
//        
//}}
//}
LogoAnimation();
setInterval(LogoAnimation,10000);


 
 
let screenWidth = $(window).innerWidth();
$(window).resize(function(){
    screenWidth = $(window).innerWidth();
}) 
$(window).scroll(function(){
    if(screenWidth>800){
    $('#header').addClass('headerOnScrool');
    $('#header #Logo').addClass('logoOnScrool');
    $('#header #menu').addClass('menuOnScrool');
    $('#fakeHeader').addClass('fakeHeaderOnScroll');
    $('.menu').css({'opacity':0.5})}
    let y = window.pageYOffset;
    if(y==0&&y<20&&screenWidth){
    $('#header').removeClass('headerOnScrool');
    $('#header #Logo').removeClass('logoOnScrool');
    $('#header #menu').removeClass('menuOnScrool');
         $('#fakeHeader').removeClass('fakeHeaderOnScroll');
        
        
    }
    topScroll = $(window).scrollTop();
    if(topScroll>1000){
        $('#slideTop').fadeIn(1000);
         
    }
    else{
        $('#slideTop').hide();
    }
});
$('#slideTop').click(function(){
         $('html,body').animate({scrollTop:0},1000);
         })
$('#menuList li a').click(function(e){
        e.preventDefault();
        let href = $(this).attr('href');
        let top = $('#'+href).offset().top;
        let headerHeight = $('#header').height();

        if(headerHeight>0&&headerHeight<80){
        $('html, body').animate({'scrollTop':top-70},2000)
        }
        else if(headerHeight>70&&headerHeight<129){
        $('html, body').animate({'scrollTop':top-128},2000)
        }
        else if(headerHeight>130){
        $('html, body').animate({'scrollTop':top},2000)
        }
   
        
})

$.fn.scrollStopped = function(callback) {
  let that = this, $this = $(that);
  $this.scroll(function(ev) {
    clearTimeout($this.data('scrollTimeout'));
    $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
  });
};
$(window).scrollStopped(function(ev){
  console.log(ev);
  $('.menu').css({'opacity':1})
});






