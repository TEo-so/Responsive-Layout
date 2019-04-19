window.onload = function(){
	var wrap = document.querySelector('.inner');
	var next = document.querySelector('.arrow_right');
	var prev = document.querySelector('.arrow_left');
	var container = document.querySelector('.banner');
	
	var index = 0;

	next.onclick = function(){
		console.log(wrap.style.left);
		next_pic();
	}
	prev.onclick = function(){
		prev_pic();
	}


	function next_pic(){
		console.log(wrap.style.left);
		var newLeft;
		if(wrap.style.left === "-7200px") {
			newLeft = -2400;
		}else {
		newLeft = parseInt(wrap.style.left)-1200;
		}
		wrap.style.left = newLeft + "px";

		
	}

	function prev_pic(){
		var newLeft;
		if (wrap.style.left === "0px") {
			newLeft = -4800;
		}else {
		newLeft = parseInt(wrap.style.left)+1200;
		}
		wrap.style.left = newLeft + "px";
	}


	//定时器
	var timer = null;
	function autoPlay() {
		timer = setInterval(function() {
			next_pic();
		},2000);
	}
	autoPlay();

	container.onmouseenter = function() {
		clearInterval(timer);
	}
	container.onmouseleave = function() {
		autoPlay();
	}

}