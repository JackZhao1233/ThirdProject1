/*滑动到指定界面*/
$(document).ready(function(){
    $("#marvel1").click(function(){
       $("html,body").animate({
           //这个时间还是可以的
           scrollTop:$("#marvelone").offset().top},{duration:1000,easing:"swing"});
           return false;
    });
});