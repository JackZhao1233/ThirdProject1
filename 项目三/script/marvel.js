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

$(document).ready(function(){
    $(".solve").click(function(){
       $("html,body").animate({
           //这个时间还是可以的
           scrollTop:$(".section1").offset().top},{duration:1000,easing:"swing"});
           return false;
    });
    $(".company").click(function(){
        $("html,body").animate({
            //这个时间还是可以的
            scrollTop:$(".companyone").offset().top},{duration:1000,easing:"swing"});
            return false;
     });
    $(".connect").click(function(){
       $("html,body").animate({
           //这个时间还是可以的
           scrollTop:$(".connectone").offset().top},{duration:1000,easing:"swing"});
           return false;
    });
});

$(window).scroll(function (){
    var offsetTop = $(window).scrollTop();
    if(offsetTop > 20){
        $('.header-prequel').addClass('header-specter');
    }else{
        $('.header-prequel').removeClass('header-specter');
    }
});
