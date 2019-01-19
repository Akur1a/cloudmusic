var loginOrNot = false;
// setCookie("login", "false")
loginOrNot = getCookie("login")
if (loginOrNot) {
    document.getElementsByClassName("arr")[0].style.position = "relative"
    document.getElementsByClassName("arr")[0].style.top = "-12px"
    document.getElementsByClassName("arr")[0].style.fontSize = "20px"
    document.getElementsByClassName("userInfo")[0].children[0].innerHTML =
        `<img src="images/touxiang.jpg" alt="" style="width:36px; height:36px; border-radius: 50%;">`
    document.getElementsByClassName("userInfo")[0].onmouseenter = function () {
        document.getElementsByClassName("arr")[0].innerHTML = "&#xe506;"
        document.getElementsByClassName("loginBox")[0].style.display = "block"
        var str =
            `<ul>
                <li>
                    <a href="#"><span class="iconfont">&#xe509;</span>&nbsp;&nbsp;我的订单</a>
                </li>
                <li>
                    <a href="#"><span class="iconfont">&#xe640;</span>&nbsp;&nbsp;我的优惠券</a>
                </li>
                <li>
                    <a href="#"><span class="iconfont">&#xe514;</span>&nbsp;&nbsp;我的收货地址</a>
                </li>
                <li>
                    <a href="#"><span class="iconfont">&#xe501;</span>&nbsp;&nbsp;网易云音乐首页</a>
                </li>
                <li style="border-top:1px solid #999;width:145px;" >
                    <a href="#" class="quit"><span class="iconfont">&#xe657;</span>&nbsp;&nbsp;退出</a>
                </li>
            </ul>`
        document.getElementsByClassName("loginBox")[0].innerHTML = str
        $(".quit").click(function () {
            loginOrNot = false;
            setCookie("login", "")
            window.location.reload()
        })
    }
    document.getElementsByClassName("userInfo")[0].onmouseleave = function () {
        document.getElementsByClassName("iconfont")[1].innerHTML = "&#xe68a;"
        document.getElementsByClassName("loginBox")[0].style.display = "none"
    }
} else {
    document.getElementsByClassName("userInfo")[0].onmouseenter = function () {
        document.getElementsByClassName("iconfont")[1].innerHTML = "&#xe506;"
        document.getElementsByClassName("loginBox")[0].style.display = "block"
    }
    document.getElementsByClassName("userInfo")[0].onmouseleave = function () {
        document.getElementsByClassName("iconfont")[1].innerHTML = "&#xe68a;"
        document.getElementsByClassName("loginBox")[0].style.display = "none"
    }
}

document.onscroll = function () {
    var sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    if (sTop > 100) {
        document.getElementsByClassName("toTop")[0].style.display = "block";
    } else {
        document.getElementsByClassName("toTop")[0].style.display = "none";
    }
    if (sTop > 800) {
        $(".topbar").slideDown(300);
    } else {
        $(".topbar").slideUp(300);
    }
}
$(".toTop").click(function () {
    $("body,html").animate({
        "scrollTop": 0
    }, 500)
})
if (!loginOrNot) {
    $(".shopcart a").attr("href", "login.html");
    $(".rightNav a").eq(0).attr("href", "login.html");
}

function $id(id) {
    return document.getElementById(id)
}
var box = document.querySelectorAll(".main-top-left")[0],
    small = document.querySelectorAll(".imgbox")[0],
    mask = $id("mask"),
    big = document.querySelectorAll(".bigimg")[0],
    bigImg = document.querySelectorAll(".bigimg img")[0],
    smallImg = $id("smallImg");
small.onmouseover = function () {
    mask.style.display = "block";
    big.style.display = "block";
    bigImg.onmouseenter = function () {
        mask.style.display = "none";
        big.style.display = "none";
    }
}
small.onmouseout = function () {
    mask.style.display = "none";
    big.style.display = "none";
}
small.onmousemove = function (e) {
    var e = e || event;
    var x = e.pageX - box.offsetLeft - mask.offsetWidth / 2;
    var y = e.pageY - box.offsetTop - mask.offsetHeight / 2;
    var maxL = smallImg.offsetWidth - mask.offsetWidth;
    var maxT = smallImg.offsetHeight - mask.offsetHeight;
    x = x < 0 ? 0 : (x > maxL ? maxL : x);
    y = y < 0 ? 0 : (y > maxT ? maxT : y);
    mask.style.left = x + "px";
    mask.style.top = y + "px";
    var bigImgLeft = x * (bigImg.offsetWidth - big.offsetWidth) / (smallImg.offsetWidth - mask.offsetWidth);
    var bigImgTop = y * (bigImg.offsetHeight - big.offsetHeight) / (smallImg.offsetHeight - mask.offsetHeight);
    bigImg.style.left = -bigImgLeft + "px";
    bigImg.style.top = -bigImgTop + "px";
}
$(".smnav ul li").click(function () {
    $(this).addClass("active").siblings().removeClass();
    smallImg.src = this.children[0].src;
    bigImg.src = this.children[0].src;
    $(".main .main-top .main-top-right .basic .color-select ul li").eq($(this).attr("index")).addClass("active").siblings().removeClass();
})
$(".main .main-top .main-top-right .basic .color-select ul li").click(function () {
    if ($(this).html() == "红色") {
        $(this).addClass("active").siblings().removeClass();
        $(".smnav ul li").eq(0).addClass("active").siblings().removeClass();
        bigImg.src = smallImg.src = "images/detail/0.png";
    } else if ($(this).html() == "黑色") {
        $(this).addClass("active").siblings().removeClass();
        $(".smnav ul li").eq(1).addClass("active").siblings().removeClass();
        bigImg.src = smallImg.src = "images/detail/1.png";
    } else {
        $(this).addClass("active").siblings().removeClass();
        $(".smnav ul li").eq(2).addClass("active").siblings().removeClass();
        bigImg.src = smallImg.src = "images/detail/2.png";
    }
})
$(".main .main-top .main-top-right .basic .num ul li").click(function () {
    if ($(this).html() == "+") {
        document.querySelectorAll(".main .main-top .main-top-right .basic .num ul input")[0].value++;
    } else {
        if (document.querySelectorAll(".main .main-top .main-top-right .basic .num ul input")[0].value == 1) {
            document.querySelectorAll(".main .main-top .main-top-right .basic .num ul input")[0].value = 1;
        } else {
            document.querySelectorAll(".main .main-top .main-top-right .basic .num ul input")[0].value--;
        }
    }
})
$(".main .taocan ul li").click(function () {
    $(this).addClass("active").siblings().removeClass();
    var index = $(this).attr("index")
    document.querySelectorAll(".main .taocan img")[0].src = `images/detail/taocan/${index}.png`
})