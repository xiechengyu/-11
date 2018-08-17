$(".dhl>.dhl1>.yxlb").click(function () {
    $(".dhl>.dhl1>.yxlb").css({"display":"none"});
    $(".dhl>.dhl1>.yxlb1").css({"display":"block"});
    $(".dhl>.dhl1>.blackarea").slideDown();
});
$(".dhl>.dhl1>.yxlb1").click(function () {
    $(".dhl>.dhl1>.yxlb1").css({"display":"none"});
    $(".dhl>.dhl1>.yxlb").css({"display":"block"});
    $(".dhl>.dhl1>.blackarea").slideUp(300);

});
$(".dhl>.dhl1>.blackarea>.blackarea1>.sjt").click(function () {
    $(".dhl>.dhl1>.blackarea").slideUp();
    $(".dhl>.dhl1>.yxlb1").css({"display":"none"});
    $(".dhl>.dhl1>.yxlb").css({"display":"block"});
});

var index = 0;

var nextimg = ["images/2fef129e-7d07-45c2-a599-584774956fd7.jpg","images/c8083c5d-32ba-4657-87b5-713e9fcae702.jpg","images/a043f6f3-8ea9-4eb2-b227-f4a0c373d43c.jpg","images/73aae00a-c497-4c84-9452-cbd7583c6db7.jpg","images/3e3f9460-50b3-4da9-9fac-69a27f864c95.jpg"];
var nexth2 = ["倾茶一盏 邀君入梦","你想玩的，这里都有","反斗海战","缘起逆水寒","全新版本！落银城！"];
var nextp = ["网易水墨国风茶系手游","海量原创游戏任你挑选","网易首款水上对战手游","七夕结缘甜蜜开启","《猎魂觉醒》新玩法开启"];
var previmg = ["images/73aae00a-c497-4c84-9452-cbd7583c6db7.jpg","images/3e3f9460-50b3-4da9-9fac-69a27f864c95.jpg","images/2fef129e-7d07-45c2-a599-584774956fd7.jpg","images/c8083c5d-32ba-4657-87b5-713e9fcae702.jpg","images/a043f6f3-8ea9-4eb2-b227-f4a0c373d43c.jpg"];
var prevh2 = ["缘起逆水寒","全新版本！落银城！","倾茶一盏 邀君入梦","你想玩的，这里都有","反斗海战"];
var prevp = ["七夕结缘甜蜜开启","《猎魂觉醒》新玩法开启","网易水墨国风茶系手游","海量原创游戏任你挑选","网易首款水上对战手游"];


function fn(){
    $(".wyyxcarousel>.wyyxcarousel1 .carouselimg").eq(index).stop().delay(0).fadeIn(2000).siblings().delay(0).fadeOut(500);
    $(".carouselzsd>li").eq(index).addClass("wyyxcurrent").siblings().removeClass("wyyxcurrent");
}


function prev(){
    $(".wyyxcarousel>.wyyxcarousel1 .nr-prev-1 .nr-prev .pho img").attr({"src":previmg[index]});
    $(".wyyxcarousel>.wyyxcarousel1 .nr-prev-1 .nr-prev h2").html(prevh2[index]);
    $(".wyyxcarousel>.wyyxcarousel1 .nr-prev-1 .nr-prev p").html(prevp[index]);
}
function next(){
    $(".wyyxcarousel>.wyyxcarousel1 .nr-next-1 .nr-next .pho img").attr({"src":nextimg[index]});
    $(".wyyxcarousel>.wyyxcarousel1 .nr-next-1 .nr-next h2").html(nexth2[index]);
    $(".wyyxcarousel>.wyyxcarousel1 .nr-next-1 .nr-next p").html(nextp[index]);
}


//左侧按钮轮播
$(".carousel-prev").click(function () {
    index --;
    if(index == -1){
        index = 4;
    }
    fn();
    prev();
});
//右侧按钮轮播
$(".carousel-next").click(function () {
    index ++;
    if(index == 5){
        index = 0;
    }
    fn();
    next();
});


//左侧按钮进入时出现左侧内容
$(".carousel-prev").mouseover(function () {
    $(".wyyxcarousel .wyyxcarousel1 .carousel-prev").css({"background":"rgba(60,61,63)"});
    $(".wyyxcarousel>.wyyxcarousel1 .nr-prev-1 .nr-prev").css({"display":"block"});
    prev();
});
//左侧按钮失去内容
$(".leftcarousel").mouseout(function () {
    $(".wyyxcarousel .wyyxcarousel1 .carousel-prev").css({"background":"#cf0f32"});
    $(".wyyxcarousel>.wyyxcarousel1 .nr-prev-1 .nr-prev").css({"display":"none"});
    prev();
});

//右侧按钮出现内容
$(".carousel-next").mouseover(function () {
    $(".wyyxcarousel .wyyxcarousel1 .carousel-next").css({"background":"rgba(60,61,63)"});
    $(".wyyxcarousel>.wyyxcarousel1 .nr-next-1 .nr-next").css({"display":"block"});
    next();
});
//右侧按钮失去内容
$(".rightcarousel").mouseout(function () {
    $(".wyyxcarousel .wyyxcarousel1 .carousel-next").css({"background":"#cf0f32"});
    $(".wyyxcarousel>.wyyxcarousel1 .nr-next-1 .nr-next").css({"display":"none"});
    next();
});




//定时器自动轮播
var timer = setInterval(function () {
    index ++;
    if(index == 5){
        index = 0;
    }
    fn();
    prev();
    next();
},5000);


$(".carouselzsd").mouseenter(function () {
    clearInterval(timer);
});
$(".carouselzsd").mouseleave(function () {
    timer = setInterval(function () {
        index ++;
        if(index == 5){
            index = 0;
        }
        fn();
        prev();
        next();
    },5000);
});

//指示灯对应轮播
$(".carouselzsd>li").click(function () {
    clearInterval(timer);
    index = $(this).index();
    fn();
    prev();
    next();
});
