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
            document.getElementsByClassName("toTop")[0].style.display = "block"
        } else {
            document.getElementsByClassName("toTop")[0].style.display = "none"
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