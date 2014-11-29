$('.navbar-custom').on('activate.bs.scrollspy', function (e) {
	var target = $(e.target).children("a");
	if(target.text() == "Works") {
		var video = document.getElementById("NSPLogo");
		var canvas = document.getElementById("videoRenderer");
		var ctx = canvas.getContext('2d');
		var ctxw = canvas.clientWidth;
		var ctxh = canvas.clientHeight;
		
		video.addEventListener('play', function () {
			draw(this, ctx, ctxw, ctxh);
		}, false)
		
		function draw(v,c,w,h) {
			if(video.paused || video.ended) return false;
			c.drawImage(v,0,0,w,h);
			setTimeout(draw,2,v,c,w,h);
		}
		video.play();
	}
})