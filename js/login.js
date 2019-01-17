    var loginOrNot = false;
    // setCookie("login", "false")
    loginOrNot = getCookie("login")
    console.log(loginOrNot)
    if (!loginOrNot) {
        document.getElementsByClassName("arr")[0].style.position = "relative"
        document.getElementsByClassName("arr")[0].style.top = "-35px"
        document.getElementsByClassName("arr")[0].style.left = "40px"
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
    $.fn.extend({
        down: function () {
            //为操作的元素绑定鼠标按下事件
            this.bind("mousedown", function (e) {
                //this指向 ：dom元素 
                //记录偏移量  偏移量属性记录在jq对象
                this.disx = e.offsetX;
                this.disy = e.offsetY;
                $(document).bind("mousemove", function (e) {
                    this.move(e);
                }.bind(this))

                $(document).bind("mouseup", function () {
                    this.up();
                }.bind(this))

                return false; //阻止浏览器默认行为
            }.bind(this))
        },
        move: function (e) {
            this.parent().css({
                left: e.pageX - this.disx,
                top: e.pageY - this.disy
            })
        },
        up: function () {
            $(document).unbind("mousemove");
        }
    })

    $(".topbar").down();
    $(".toLogin").click(function () {
        $(".register").css("display", "none")
        $(".login").css("display", "block")
    })
    $(".toRegister").click(function () {
        $(".register").css("display", "block")
        $(".login").css("display", "none")
    })
    $(".reg").click(function () {
        $(".register").css("display", "block")
    })
    $(".tologin").click(function () {
        $(".login").css("display", "block")
    })
    $(".close").click(function () {
        $(".register").css("display", "none")
        $(".login").css("display", "none")
    })
    $(".submit").click(function () {
        var uname = $(".tel").eq(0).val();
        var upwd = $(".pwd").eq(0).val();
        if ((/^1(3|4|5|7|8)\d{9}$/.test(uname)) && (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(upwd))) {
            var ajax = new XMLHttpRequest();
            var data = `status=register&uname=${uname}&upwd=${upwd}`; //路径参数
            ajax.open("get", "php/register_login.php?" + data);
            ajax.setRequestHeader( "If-Modified-Since","0" );
            ajax.send();
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var res = ajax.responseText;
                    if (res == 1) {
                        alert("注册成功，跳转登录页面。");
                        $(".register").css("display", "none")
                        $(".login").css("display", "block")
                    } else if (res == 2) {
                        if (confirm("手机号已注册，是否登录")) {
                            $(".register").css("display", "none")
                            $(".login").css("display", "block")
                        }
                    } else {
                        alert("注册失败");
                    }
                }
            }
        } else {
            alert("输入有误！")
        }
    })
    $(".loginbtn").click(function(){
        var uname = $(".uname").eq(0).val();
        var upwd = $(".upwd").eq(0).val();
        if ((/^1(3|4|5|7|8)\d{9}$/.test(uname)) && (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(upwd))) {
            var ajax = new XMLHttpRequest();
            var data = `status=login&uname=${uname}&upwd=${upwd}`; //路径参数
            ajax.open("get", "php/register_login.php?" + data);
            ajax.setRequestHeader( "If-Modified-Since","0" );
            ajax.send();
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var res = ajax.responseText;
                    if (res == 1) {
                        alert("登录成功，跳转回上一页面。");
                        setCookie("login", "true")
                        window.history.go(-1)
                    } else if (res == 2) {
                        alert("密码错误")
                    } else {
                        if (confirm("用户名不存在，是否注册")) {
                            $(".register").css("display", "block")
                            $(".login").css("display", "none")
                        }
                    }
                }
            }
        } else {
            alert("输入有误！")
        }
    })