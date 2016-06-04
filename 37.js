function $(id) {
	return document.getElementById(id);
}


window.onload = function () {
	$('show').onclick = function () {
		$('layerBack').style.zIndex = 1;
		$('layer').style.zIndex = 2;

	};
	$('conform').onclick = function () {
		$('layer').style.zIndex = -1;
		$('layerBack').style.zIndex = -1;

	};
}