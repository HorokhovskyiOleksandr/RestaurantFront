'use strict';

let fishes = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png'];
let startPosition = 0;
let finishPosition = 0;
let minsize= 150;
let maxsize = 350;
let size = 0;
let windowWidth = window.innerWidth+200; 
let windowAdaptive = window.innerWidth;
let fishAnimationCheck = true;
console.log(windowAdaptive)
function compareRandom(a, b) {
  return Math.random() - 0.5;
}



function fishAnimation(){
    fishes.sort(compareRandom);
    for(let i=0;i<fishes.length;i++){
    size = Math.floor(minsize + Math.random() * (maxsize + 1 - 0));
    $('#menuBackground').append('<img data-count='+i+' class="fish" src="img/fishes/'+fishes[i]+'">');
    $('.fish[data-count='+i+']').css({'margin-top':50*i,'left':'-50%','width':size});
    
    $('.fish[data-count='+i+']').delay(1300*i).animate({'left':windowWidth},20000)

}
    }
function fishAnimationEnd(){
    $('.fish').detach();
}

if(windowAdaptive>900){
fishAnimation()
setInterval(fishAnimation,29310)
setInterval(fishAnimationEnd,29300)
}


$(window).scroll(function(){
    let topScrolled =$(this).scrollTop();
    let HeightOfWindow = $(window).height();
    let halfHeightOfWindow = $(window).height()/2;
    let topMenu = $('#menuContainer').offset().top-halfHeightOfWindow;
    let menuScrolled = topScrolled - topMenu;
    
    if(topScrolled>=topMenu){
        $('.fish').css({'top':menuScrolled-halfHeightOfWindow})
    }
})
$(window).resize(function(){
    let windowResizeWidth = $(this).width();
    if(windowResizeWidth<800){
        
        $('.fish').hide();
        
    }
    if(windowResizeWidth>800){
        $('.fish').show()
    }
})


