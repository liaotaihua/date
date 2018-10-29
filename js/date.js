function getnowtime () {
	var date = new Date();
	var hous = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	if (hous < 10) {
		hous = '0' + hous;
	}
	if (min < 10) {
		min = '0' + min;
	}
	if(sec < 10){
		sec = '0' + sec;
	}
	var str = '' + hous + min + sec;
	var arr = str.split('');
	var $img = document.querySelectorAll('img');
	for (var i = 0;i < arr.length;i++) {
		$img[i].src = "img/" + arr[i] + '.png';
	}
	
}
getnowtime();
setInterval(function  () {
	getnowtime();
},1000)