# SPAjax
AJAX封装

使用方式：

Example：
```javascript

 SP.ajax({
 
	url:'http://127.0.0.1:3000/reactTest1',
	type:'post',
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

```



使用方式跟jquery的ajax是一样的，只不过讲$换成SP即可
 
若需要将data传入为数组，现仅只支持name字段和value字段

例如：
data: [

  {name:'name1',value:'value1'},
  
  {name:'name2',value:'value2'},
  
  {name:'name3',value:'value3'}
  
]

