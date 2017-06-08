/**
 * Features: AJAX封装
 * Date: 2016-9-24
 * Author: sipeng
 * Site: www.sipeng.net
 */
(function(win){
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
					request.error(xhr.status);
				   }
				    break;
			 	   default :
					break;
			   }
			}
			//判断请求方式
			var type = request.type.toUpperCase();
			if(type == 'GET'){
				xhr.open( request.type, request.url + '?' + self.serialize(request.data) ,request.async);
				xhr.send();
			}else if(type == 'POST'){
				xhr.open( request.type, request.url + '?' ,request.async);
				xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
				xhr.send(self.serialize( request.data ));
			}

		}
		//序列化参数
		this.serialize = function(data){
			var serArr = [];
			if( data ){
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
	}
	win.SP = new SP();
})(window);
