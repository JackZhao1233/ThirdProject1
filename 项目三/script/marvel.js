/*滑动到指定界面
$(document).ready(function(){
    $("#marvel1").click(function(event){
        event.preventDefault()
       $("html,body").animate({
           //这个时间还是可以的
           scrollTop:$("#marvelone").offset().top},{duration:1000,easing:"swing"});
           return false;
    });
});*/
$(document).ready(function($) {
    $(".anchor").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });});
$(function(){
    $(window).resize();
});

$(window).scroll(function (){
    var offsetTop = $(window).scrollTop();
    if(offsetTop > 20){
        $('.header-prequel').addClass('header-specter');
    }else{
        $('.header-prequel').removeClass('header-specter');
    }
});
