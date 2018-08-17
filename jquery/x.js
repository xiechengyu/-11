console.log($(".content_box3").nextAll());
$(function () {
    // var btn = $(".box4-top").find("div");
    var num = 0;

    $(".box4-top").find("div").click(function () {
        if(num%2 == 1){
            $(".content_box3").nextAll().animate({top:"-=420px"},1000);
            num++;
        }
        else {
            $(".content_box3").nextAll().animate({top:"+=420px"},1000);
            num++;
        }
    })
})