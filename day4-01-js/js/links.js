//var btn_spans=document.querySelectorAll(".index_service .title span");
//var img_containers=document.querySelectorAll("index_service .containt img_containt");
//var index=0;
//for (var i=0;i<btn_spans.length;i++){
//	btn_spans[i].index=i;
//	btn_spans[i].onclick=function(){
//		for (var j=0;j<btn_spans.length;j++){
//			btn_spans[j].className="";
//			var container=img_containers[this.index];
//			for (var k=0;k<img_containers.length;k++){
//				img_containers[k].style.display="none";
//			}
//			container.style.display="block";
//		}
//		this.className="active";
//	}
//}
//
var index=0;
$('.index_service .title .span2').click(function(){
	$(this).siblings('span').removeClass('active');
	$(this).addClass('active');  
	$('.img_containt_brand').css('display','none');
	$('.img_containt_business').css('display','block');
});

$('.index_service .title .span1').click(function(){
	$(this).siblings('span').removeClass('active');
	$(this).addClass('active');  
	$('.img_containt_brand').css('display','block');
	$('.img_containt_business').css('display','none');
});



