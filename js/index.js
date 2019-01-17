
    var loginOrNot = false;
    if (getCookie("login") == "") {
        setCookie("login", "false")
    } else {
        loginOrNot = getCookie("login")
    }
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
    var bannerIndex = 0;
    var bannerTimer;

    function autoplay() {
        bannerIndex++;
        if (bannerIndex == 6) {
            bannerIndex = 0;
        }
        $(".banner ul li").eq(bannerIndex).fadeIn(1500).siblings().fadeOut(1500);
        $(".banner .dots a").eq(bannerIndex).addClass("active").siblings().removeClass("active");
    }
    bannerTimer = setInterval(autoplay, 5000)
    $(".banner").mouseenter(function () {
        clearInterval(bannerTimer)
    })
    $(".banner").mouseleave(function () {
        bannerTimer = setInterval(autoplay, 5000)
    })
    $(".banner .goPre").eq(0).click(
        function () {
            bannerIndex--
            if (bannerIndex == -1) {
                bannerIndex = 5
            }
            $(".banner ul li").eq(bannerIndex).fadeIn(1500).siblings().fadeOut(1500);
            $(".banner .dots a").eq(bannerIndex).addClass("active").siblings().removeClass("active");
        }
    )
    $(".banner .goNext").eq(0).click(
        function () {
            bannerIndex++
            if (bannerIndex == 6) {
                bannerIndex = 0
            }
            $(".banner ul li").eq(bannerIndex).fadeIn(1500).siblings().fadeOut(1500);
            $(".banner .dots a").eq(bannerIndex).addClass("active").siblings().removeClass("active");
        }
    )
    var liRec = document.getElementsByClassName("liRec")
    for (let i = 0; i < liRec.length; i++) {
        if ((i + 1) % 4 == 0) {
            liRec[i].style.marginRight = "0";
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
    window.onload = function () {
        var ajax = null;
        if (XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        ajax.open("get", "json/tuijian.json");
        ajax.setRequestHeader( "If-Modified-Since","0" );
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var arrTuijian = JSON.parse(ajax.responseText);
                for (let i = 0; i < arrTuijian.length; i++) {
                    document.getElementsByClassName("ulRec")[0].children[i].innerHTML =
                        `<a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>`
                }
            }
        }
        var ajax1 = null;
        if (XMLHttpRequest) {
            ajax1 = new XMLHttpRequest();
        } else {
            ajax1 = new ActiveXObject("Microsoft.XMLHTTP");
        }
        ajax1.open("get", "json/remai.json");
        ajax1.setRequestHeader( "If-Modified-Since","0" );
        ajax1.send();
        ajax1.onreadystatechange = function () {
            if (ajax1.readyState == 4 && ajax1.status == 200) {
                var arrTuijian = JSON.parse(ajax1.responseText);
                for (let i = 0; i < arrTuijian.length; i++) {
                    document.getElementsByClassName("ulRec")[1].innerHTML +=
                        `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
                }
                document.getElementsByClassName("ulRec")[1].innerHTML += `<div class="clear"></div>`
            }
        }
        setTimeout(function () {
            var hot = document.getElementsByClassName("hot")
            for (let j = 0; j < hot.length; j++) {
                if (hot[j].innerHTML == "undefined") {
                    hot[j].remove();
                    // console.log(this)
                }
            }
            var liRec = document.getElementsByClassName("liRec")
            for (let i = 0; i < liRec.length; i++) {
                if ((i + 1) % 4 == 0) {
                    liRec[i].style.marginRight = "0";
                }
            }
        }, 10)

    }