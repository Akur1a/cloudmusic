
    var loginOrNot = false;
    // setCookie("login", "false")
    loginOrNot = getCookie("login")
    // console.log(loginOrNot)
    if (loginOrNot) {
        document.getElementsByClassName("arr")[0].style.position = "relative"
        document.getElementsByClassName("arr")[0].style.top = "-12px"
        document.getElementsByClassName("arr")[0].style.left = "0px"
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
    var arrTuijian = [];
    var ajax = null;
    if (XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.open("get", "json/list.json");
    ajax.setRequestHeader("If-Modified-Since", "0");
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            arrTuijian = JSON.parse(ajax.responseText);
            for (var i = 0; i < arrTuijian.length; i++) {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
            document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        }

        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }

        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    }
    $(".selector-top ul li").eq(0).click(function () {
        $(".active").removeClass();
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            document.getElementsByClassName("ulRec")[0].innerHTML +=
                `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-top ul li").eq(1).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            if (arrTuijian[i].class == "耳机") {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-top ul li").eq(2).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            if (arrTuijian[i].class == "键盘") {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-top ul li").eq(3).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            if (arrTuijian[i].class == "雨伞") {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-top ul li").eq(4).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            if (arrTuijian[i].class == "充电宝") {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-top ul li").eq(5).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            if (arrTuijian[i].class == "尤克里里") {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-bottom ul li").eq(0).click(function () {
        $(".active").removeClass();
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            document.getElementsByClassName("ulRec")[0].innerHTML +=
                `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-bottom ul li").eq(1).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            if (parseInt(arrTuijian[i].price.substr(1)) < 129) {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-bottom ul li").eq(2).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            if (parseInt(arrTuijian[i].price.substr(1)) < 200 && parseInt(arrTuijian[i].price.substr(1)) > 128) {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-bottom ul li").eq(3).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        $(".selector-nav a").eq(0).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
            if (parseInt(arrTuijian[i].price.substr(1)) > 199) {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })
    $(".selector-nav a").eq(0).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian.length; i++) {
                document.getElementsByClassName("ulRec")[0].innerHTML +=
                    `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian[i].title}</a>
                    <p class="price">${arrTuijian[i].price}</p>
                </div>
            </li>`
            }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j = 0; j < hot.length; j++) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })



    var arrTuijian1 = [];
    var ajax1 = null;
    if (XMLHttpRequest) {
        ajax1 = new XMLHttpRequest();
    } else {
        ajax1 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax1.open("get", "json/list.1.json");
    ajax1.setRequestHeader("If-Modified-Since", "0");
    ajax1.send();
    ajax1.onreadystatechange = function () {
        if (ajax1.readyState == 4 && ajax1.status == 200) {
            arrTuijian1 = JSON.parse(ajax1.responseText);
        }
    }
    $(".selector-nav a").eq(1).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian1.length; i++) {
            document.getElementsByClassName("ulRec")[0].innerHTML +=
                `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian1[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian1[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian1[i].title}</a>
                    <p class="price">${arrTuijian1[i].price}</p>
                </div>
            </li>`
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j =  hot.length-1; j >=0; j--) {
            if (hot[j].innerHTML == "undefined") {
                hot[j].remove();
            }
        }
    })


    var arrTuijian2 = [];
    var ajax2 = null;
    if (XMLHttpRequest) {
        ajax2 = new XMLHttpRequest();
    } else {
        ajax2 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax2.open("get", "json/list.2.json");
    ajax2.setRequestHeader("If-Modified-Since", "0");
    ajax2.send();
    ajax2.onreadystatechange = function () {
        if (ajax2.readyState == 4 && ajax2.status == 200) {
            arrTuijian2 = JSON.parse(ajax2.responseText);
        }
    }
    $(".selector-nav a").eq(2).click(function () {
        $(".active").removeClass();
        $(this).addClass("active");
        document.getElementsByClassName("ulRec")[0].innerHTML = ""
        for (var i = 0; i < arrTuijian2.length; i++) {
            document.getElementsByClassName("ulRec")[0].innerHTML +=
                `<li class="liRec">
                        <a href="detail.html"  target="_blank"  class="detailImg"><img src="images/tuijian/${arrTuijian2[i].img}.png" alt=""></a>
                <div class="goodName" style="text-align: center;">
                    <span class="hot">${arrTuijian2[i].sale}</span>
                    <a href="detail.html" target="_blank"" >${arrTuijian2[i].title}</a>
                    <p class="price">${arrTuijian2[i].price}</p>
                </div>
            </li>`
        }
        document.getElementsByClassName("ulRec")[0].innerHTML += `<div class="clear"></div>`
        var liRec = document.getElementsByClassName("liRec")
        for (let i = 0; i < liRec.length; i++) {
            if ((i + 1) % 4 == 0) {
                liRec[i].style.marginRight = "0";
            }
        }
        var hot = document.getElementsByClassName("hot")
        for (let j =  hot.length-1; j >=0; j--) {
            if (hot[j].innerHTML == "undefined") {
                console.log(hot)
                hot[j].remove();
            }
        }
    })