/*实现通过点击li标签时设置class为active更换背景图片*/
var leftNavs=document.querySelectorAll(".content .leftNav ul li");
console.log(leftNavs);
for (var i=0;i<leftNavs.length;i++){
	leftNavs[i].onclick=function(){
		for (var j=0;j<leftNavs.length;j++){
			leftNavs[j].className="";
		}
		this.className="active";
	}
}

var top_nav=document.querySelectorAll(".bottomnav ul li");
console.log(top_nav);
for (var s=0;s<top_nav.length;s++){
	top_nav[s].onmousemove=function(){
		for (var k=0;k<top_nav.length;k++){
			top_nav[k].className="";
		}
		this.className="nav_active";
	}
	/*鼠标移出时设置第一个li的颜色是红色*/
	top_nav[s].onmouseout=function(){
		for (var k=0;k<top_nav.length;k++){
			top_nav[k].className="";
		}
		top_nav[0].className="nav_active";
		
	}
}

