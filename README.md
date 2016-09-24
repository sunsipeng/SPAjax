# SPAjax
AJAX封装

使用方式
 
SP.ajax({
	url:'http://127.0.0.1:3000/reactTest1',
	mothod:'post',
	async:true,
	data:{
		uname:'sipeng',
		passwd:'password'
	},
	success: function(data){
		console.log("请求成功。。");
		console.log(data);
	},
	error:function(status){
		console.log("请求失败。。");
		console.log(status);
		
	}
});


 使用方式跟jquery的ajax是一样的，只不过讲$换成SP即可
