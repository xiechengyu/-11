var index = 0;
//遍历选项卡
$('.cut-a').each(function(){
    //选项卡点击事件
    $(this).click(function () {
        //获取当前下标
        index = $(this).index();
        changeImg();
    })
})
function changeImg(){
    //图片切换
    $('.cuta-i').attr("src","img/c-up" + index + ".jpg");
    //选项卡样式显示隐藏
    $('.cut-a').eq(index).addClass("cu-active").siblings().removeClass("cu-active");
    //使用有误
    // $('.cut-a:eq(index)').addClass("cu-active").siblings().removeClass("cu-active");

    //选项卡相应的三角形显示隐藏
    $('.triangle').eq(index).addClass("tri-active").parent().siblings().children(".triangle").removeClass("tri-active");
    // 使用有误
    // $('.triangle').eq(index).addClass("tri-active").parent().siblings().children().last().removeClass("tri-active");

}
var indexs = 0;
$('.cbox1').each(function() {
    $(this).mouseenter(function () {
        indexs = $(this).index();
        $('.cdown').eq(indexs).stop().animate({width: '40px'}, "slow");
        $(this).animate({opacity:'0.8'},"fast");
        $(this).animate({opacity:'1'},"fast");
    })
    $(this).mouseleave(function () {
        indexs = $(this).index();
        $('.cdown').eq(indexs).stop().animate({width: '20px'}, "slow");
    })
})