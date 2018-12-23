function tab(tabs,divs){
	tabs.click(function(){
		/*当点击的时候
		 1.获取点击的是第几个
		 2.找到点击的tab
		 
		 * */
		
		let index=$(this).index();
		/*
		 2.让下面的第index个div显示，其他兄弟div隐藏
		 * */
		divs.eq(index).show().siblings().hide();
		
		/*
		 3.让当前点击的tab
		 * */
		
		$(this).addClass('tab_select').siblings().removeClass('tab_select');
		
	});
}


export {tab};
