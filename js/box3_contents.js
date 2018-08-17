var boxChange = document.getElementsByClassName('box2_title_change')[0];
var case1 = document.getElementsByClassName('box2_left_content_case1')[0];
var case2 = document.getElementsByClassName('box2_left_content_case2')[0];
var case3 = document.getElementsByClassName('box2_left_content_case3')[0];
var content_box = document.getElementsByClassName('box2_left_content_case1_box');
var iChange = 0;
boxChange.onclick = function () {
    iChange ++;
    if (iChange % 3 == 0){
        case1.style.display = "block";
        case2.style.display = "none";
        case3.style.display = "none";
        /*$(".box2_left_content_case1_box").fadeIn("slow");*/
        $(".box2_left_content_case1_box:eq(0)").fadeIn(300,function () {
            $(".box2_left_content_case1_box:eq(1)").fadeIn(300,function () {
                $(".box2_left_content_case1_box:eq(2)").fadeIn(300,function () {
                    $(".box2_left_content_case1_box:eq(3)").fadeIn(300,function () {
                        $(".box2_left_content_case1_box:eq(4)").fadeIn(300,function () {
                            $(".box2_left_content_case1_box:eq(5)").fadeIn(300)
                        })
                    })
                })
            })
        });
        for (var i = 12;i < 18;i++){
            content_box[i].style.display = "none";
        }
    } else if (iChange % 3 == 1) {
        case1.style.display = "none";
        case2.style.display = "block";
        case3.style.display = "none";
        $(".box2_left_content_case1_box:eq(6)").fadeIn(300,function () {
            $(".box2_left_content_case1_box:eq(7)").fadeIn(300,function () {
                $(".box2_left_content_case1_box:eq(8)").fadeIn(300,function () {
                    $(".box2_left_content_case1_box:eq(9)").fadeIn(300,function () {
                        $(".box2_left_content_case1_box:eq(10)").fadeIn(300,function () {
                            $(".box2_left_content_case1_box:eq(11)").fadeIn(300)
                        })
                    })
                })
            })
        });
        for (var i = 0;i < 6;i++){
            content_box[i].style.display = "none";
        }
    }else if (iChange % 3 == 2) {
        case1.style.display = "none";
        case2.style.display = "none";
        case3.style.display = "block";
        /*$(".box2_left_content_case1_box").fadeIn("slow");*/
        $(".box2_left_content_case1_box:eq(12)").fadeIn(300,function () {
            $(".box2_left_content_case1_box:eq(13)").fadeIn(300,function () {
                $(".box2_left_content_case1_box:eq(14)").fadeIn(300,function () {
                    $(".box2_left_content_case1_box:eq(15)").fadeIn(300,function () {
                        $(".box2_left_content_case1_box:eq(16)").fadeIn(300,function () {
                            $(".box2_left_content_case1_box:eq(17)").fadeIn(300)
                        })
                    })
                })
            })
        });
        for (var i = 6;i < 12;i++){
            content_box[i].style.display = "none";
        }
    }


}
$(document).ready(function () {
    /*左侧盒子：进入官网*/
    $(".case1_box_btn:eq(0)").mouseover(function () {
        $(".case1_box_btn:eq(0) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(0)").mouseout(function () {
        $(".case1_box_btn:eq(0) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(0)").mouseenter(function () {
        $(".case1_box_background:eq(0)").slideDown(500);
    })
    $(".content_case1_box_img:eq(0)").mouseleave(function () {
        $(".case1_box_background:eq(0)").slideUp(300);
    })

    $(".case1_box_btn:eq(1)").mouseover(function () {
        $(".case1_box_btn:eq(1) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(1)").mouseout(function () {
        $(".case1_box_btn:eq(1) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(1)").mouseenter(function () {
        $(".case1_box_background:eq(1)").slideDown(500);
    })
    $(".content_case1_box_img:eq(1)").mouseleave(function () {
        $(".case1_box_background:eq(1)").slideUp(300);
    })

    $(".case1_box_btn:eq(2)").mouseover(function () {
        $(".case1_box_btn:eq(2) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(2)").mouseout(function () {
        $(".case1_box_btn:eq(2) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(2)").mouseenter(function () {
        $(".case1_box_background:eq(2)").slideDown(500);
    })
    $(".content_case1_box_img:eq(2)").mouseleave(function () {
        $(".case1_box_background:eq(2)").slideUp(300);
    })

    $(".case1_box_btn:eq(3)").mouseover(function () {
        $(".case1_box_btn:eq(3) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(3)").mouseout(function () {
        $(".case1_box_btn:eq(3) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(3)").mouseenter(function () {
        $(".case1_box_background:eq(3)").slideDown(500);
    })
    $(".content_case1_box_img:eq(3)").mouseleave(function () {
        $(".case1_box_background:eq(3)").slideUp(300);
    })

    $(".case1_box_btn:eq(4)").mouseover(function () {
        $(".case1_box_btn:eq(4) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(4)").mouseout(function () {
        $(".case1_box_btn:eq(4) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(4)").mouseenter(function () {
        $(".case1_box_background:eq(4)").slideDown(500);
    })
    $(".content_case1_box_img:eq(4)").mouseleave(function () {
        $(".case1_box_background:eq(4)").slideUp(300);
    })

    $(".case1_box_btn:eq(5)").mouseover(function () {
        $(".case1_box_btn:eq(5) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(5)").mouseout(function () {
        $(".case1_box_btn:eq(5) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(5)").mouseenter(function () {
        $(".case1_box_background:eq(5)").slideDown(500);
    })
    $(".content_case1_box_img:eq(5)").mouseleave(function () {
        $(".case1_box_background:eq(5)").slideUp(300);
    })


    $(".case1_box_btn:eq(6)").mouseover(function () {
        $(".case1_box_btn:eq(6) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(6)").mouseout(function () {
        $(".case1_box_btn:eq(6) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(6)").mouseenter(function () {
        $(".case1_box_background:eq(6)").slideDown(500);
    })
    $(".content_case1_box_img:eq(6)").mouseleave(function () {
        $(".case1_box_background:eq(6)").slideUp(300);
    })

    $(".case1_box_btn:eq(7)").mouseover(function () {
        $(".case1_box_btn:eq(7) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(7)").mouseout(function () {
        $(".case1_box_btn:eq(7) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(7)").mouseenter(function () {
        $(".case1_box_background:eq(7)").slideDown(500);
    })
    $(".content_case1_box_img:eq(7)").mouseleave(function () {
        $(".case1_box_background:eq(7)").slideUp(300);
    })

    $(".case1_box_btn:eq(8)").mouseover(function () {
        $(".case1_box_btn:eq(8) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(8)").mouseout(function () {
        $(".case1_box_btn:eq(8) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(8)").mouseenter(function () {
        $(".case1_box_background:eq(8)").slideDown(500);
    })
    $(".content_case1_box_img:eq(8)").mouseleave(function () {
        $(".case1_box_background:eq(8)").slideUp(300);
    })

    $(".case1_box_btn:eq(9)").mouseover(function () {
        $(".case1_box_btn:eq(9) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(9)").mouseout(function () {
        $(".case1_box_btn:eq(9) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(9)").mouseenter(function () {
        $(".case1_box_background:eq(9)").slideDown(500);
    })
    $(".content_case1_box_img:eq(9)").mouseleave(function () {
        $(".case1_box_background:eq(9)").slideUp(300);
    })

    $(".case1_box_btn:eq(10)").mouseover(function () {
        $(".case1_box_btn:eq(10) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(10)").mouseout(function () {
        $(".case1_box_btn:eq(10) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(10)").mouseenter(function () {
        $(".case1_box_background:eq(10)").slideDown(500);
    })
    $(".content_case1_box_img:eq(10)").mouseleave(function () {
        $(".case1_box_background:eq(10)").slideUp(300);
    })

    $(".case1_box_btn:eq(11)").mouseover(function () {
        $(".case1_box_btn:eq(11) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(11)").mouseout(function () {
        $(".case1_box_btn:eq(11) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(11)").mouseenter(function () {
        $(".case1_box_background:eq(11)").slideDown(500);
    })
    $(".content_case1_box_img:eq(11)").mouseleave(function () {
        $(".case1_box_background:eq(11)").slideUp(300);
    })

    $(".case1_box_btn:eq(12)").mouseover(function () {
        $(".case1_box_btn:eq(12) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(12)").mouseout(function () {
        $(".case1_box_btn:eq(12) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(12)").mouseenter(function () {
        $(".case1_box_background:eq(12)").slideDown(500);
    })
    $(".content_case1_box_img:eq(12)").mouseleave(function () {
        $(".case1_box_background:eq(12)").slideUp(300);
    })

    $(".case1_box_btn:eq(13)").mouseover(function () {
        $(".case1_box_btn:eq(13) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(13)").mouseout(function () {
        $(".case1_box_btn:eq(13) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(13)").mouseenter(function () {
        $(".case1_box_background:eq(13)").slideDown(500);
    })
    $(".content_case1_box_img:eq(13)").mouseleave(function () {
        $(".case1_box_background:eq(13)").slideUp(300);
    })

    $(".case1_box_btn:eq(14)").mouseover(function () {
        $(".case1_box_btn:eq(14) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(14)").mouseout(function () {
        $(".case1_box_btn:eq(14) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(14)").mouseenter(function () {
        $(".case1_box_background:eq(14)").slideDown(500);
    })
    $(".content_case1_box_img:eq(14)").mouseleave(function () {
        $(".case1_box_background:eq(14)").slideUp(300);
    })

    $(".case1_box_btn:eq(15)").mouseover(function () {
        $(".case1_box_btn:eq(15) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(15)").mouseout(function () {
        $(".case1_box_btn:eq(15) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(15)").mouseenter(function () {
        $(".case1_box_background:eq(15)").slideDown(500);
    })
    $(".content_case1_box_img:eq(15)").mouseleave(function () {
        $(".case1_box_background:eq(15)").slideUp(300);
    })

    $(".case1_box_btn:eq(16)").mouseover(function () {
        $(".case1_box_btn:eq(16) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(16)").mouseout(function () {
        $(".case1_box_btn:eq(16) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(16)").mouseenter(function () {
        $(".case1_box_background:eq(16)").slideDown(500);
    })
    $(".content_case1_box_img:eq(16)").mouseleave(function () {
        $(".case1_box_background:eq(16)").slideUp(300);
    })

    $(".case1_box_btn:eq(17)").mouseover(function () {
        $(".case1_box_btn:eq(17) img").attr('src',"images/content_left_right_red.png");
    })
    $(".case1_box_btn:eq(17)").mouseout(function () {
        $(".case1_box_btn:eq(17) img").attr('src',"images/content_left_right.png");
    })
    $(".content_case1_box_img:eq(17)").mouseenter(function () {
        $(".case1_box_background:eq(17)").slideDown(500);
    })
    $(".content_case1_box_img:eq(17)").mouseleave(function () {
        $(".case1_box_background:eq(17)").slideUp(300);
    })


    /*右侧盒子按钮*/
    $(".box_right_content_case:eq(0)").mouseover(function () {
        $(".box_right_content_case:eq(0) img:eq(1)").attr('src',"images/content_right_right_red.png");
    })
    $(".box_right_content_case:eq(0)").mouseout(function () {
        $(".box_right_content_case:eq(0) img:eq(1)").attr('src',"images/content_right_right.png");
    })
    $(".box_right_content_case:eq(1)").mouseover(function () {
        $(".box_right_content_case:eq(1) img:eq(1)").attr('src',"images/content_right_right_red.png");
    })
    $(".box_right_content_case:eq(1)").mouseout(function () {
        $(".box_right_content_case:eq(1) img:eq(1)").attr('src',"images/content_right_right.png");
    })
    $(".box_right_content_case:eq(2)").mouseover(function () {
        $(".box_right_content_case:eq(2) img:eq(1)").attr('src',"images/content_right_right_red.png");
    })
    $(".box_right_content_case:eq(2)").mouseout(function () {
        $(".box_right_content_case:eq(2) img:eq(1)").attr('src',"images/content_right_right.png");
    })
    $(".box_right_content_case:eq(3)").mouseover(function () {
        $(".box_right_content_case:eq(3) img:eq(1)").attr('src',"images/content_right_right_red.png");
    })
    $(".box_right_content_case:eq(3)").mouseout(function () {
        $(".box_right_content_case:eq(3) img:eq(1)").attr('src',"images/content_right_right.png");
    })
    $(".box_right_content_case:eq(4)").mouseover(function () {
        $(".box_right_content_case:eq(4) img:eq(1)").attr('src',"images/content_right_right_red.png");
    })
    $(".box_right_content_case:eq(4)").mouseout(function () {
        $(".box_right_content_case:eq(4) img:eq(1)").attr('src',"images/content_right_right.png");
    })
    $(".box_right_content_case:eq(5)").mouseover(function () {
        $(".box_right_content_case:eq(5) img:eq(1)").attr('src',"images/content_right_right_red.png");
    })
    $(".box_right_content_case:eq(5)").mouseout(function () {
        $(".box_right_content_case:eq(5) img:eq(1)").attr('src',"images/content_right_right.png");
    })


});
