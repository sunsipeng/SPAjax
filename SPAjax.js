/**
 * Features: AJAX封装
 * Date: 2016-9-24
 * Author: sipeng
 * Site: www.sipeng.net
 */
var SP = function(){
	this.ajax = function(request){
		xhr = new XMLHttpRequest();
		var self = this;
		xhr.onreadystatechange = function () {
			switch ( xhr.readyState ) {
				case 4:
					if ( xhr.status == 200 ) {
						var $xhr = eval("("+xhr.responseText+")");
						//请求成功回调函数
						request.success($xhr);
					} else {
						//请求失败回调函数
						console.log( "xhr请求失败："+xhr.status );
						request.error(xhr.status);
					}
					break;
				default :
					break;
			}
		}
		//判断请求方式
		var mothod = request.mothod.toUpperCase();
		if(mothod == 'GET'){
			console.log("get");
			xhr.open( request.mothod, request.url + '?' + self.serialize(request.data) ,request.async);
			xhr.send();
		}else if(mothod == 'POST'){
			console.log("post");
			xhr.open( request.mothod, request.url + '?' ,request.async);
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
			xhr.send(self.serialize( request.data ));
		}

	}
	//序列化参数
	this.serialize = function(data){
		var serArr = [];
		if( data.consttructor == Array ){
			for(var i = 0; i< data.length; i++){
				serArr.push( data[i].name + '=' + encodeURIComponent( data[j].value ) );
			}
		}else{
			for(var d in data){
				serArr.push( d + '=' + encodeURIComponent( data[d] ) );
			}
		}
		return serArr.join("&");
	}
}

window.SP = new SP();
