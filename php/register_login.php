<?php
	header("content-type:text/html;charset=utf-8");
	$conn = mysql_connect("localhost","root","root");
	mysql_select_db("1822",$conn);
	mysql_query("set names utf8");
	//该接口实现注册和登录两个功能
	$status = $_GET["status"];//控制接口功能
	$uname = $_GET["uname"];//邮箱
	$upwd = $_GET["upwd"];//密码
	
	if( $status == "register" ){//注册功能
		$sql = "SELECT * FROM `user` WHERE `uname`=$uname";
		$res = mysql_query( $sql );
		$arr = mysql_fetch_array( $res );
		if($arr){
			echo 2;
		}else{
			$sql1 = "INSERT INTO `user`(`uname`, `upwd`) VALUES ('$uname','$upwd')";
			$row1 = mysql_query($sql1);
			// echo $row;
			if( $row1 ){
				echo 1;//ok
			}else{
				echo 0;//failed
			}
		}		
	}else if( $status == "login" ){//登录功能
		$sql = "SELECT * FROM `user` WHERE `uname`=$uname";
		$res = mysql_query( $sql );
		$arr = mysql_fetch_array( $res );
		if( $arr ){
			if( $arr["upwd"] == $upwd ){
				echo 1;//登录成功
			}else{
				echo 2;//密码错误
			}
		}else{
			echo 0;//用户名不存在
		}
	}
?>