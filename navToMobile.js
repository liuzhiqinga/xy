//判断如果是PC端浏览器自动跳转到pc/index.html
//如果是苹果安卓手机自动跳转到mobile/index.html
var userAgent = navigator.userAgent.toLowerCase();

//如果是安卓 iPhone iPad，转mobile
if ( userAgent.indexOf('android') != -1 
	|| userAgent.indexOf('iphone') != -1
	|| userAgent.indexOf('ipad') != -1 ) {
		
	location.href = '../mobile/index.html';

} 
				