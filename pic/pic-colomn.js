function request(url) {
  return new Promise(function (resolve) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.addEventListener('load', function () {
      resolve(JSON.parse(this.response))
    })
  })
}

function getPhotos(page, source) {
  page = page || 0
  source = source || '500px'
  return request('http://gallery-server.coding.io/?source=' + source + '&page=' + page)
}



var GalleryWall = function(selector,col) {
	this.element = document.querySelector(selector);
	this.col = col||5;
	this.init();
}

GalleryWall.prototype.init = function() {
	var width = (this.element.clientWidth - 20) / this.col;
	var html = '';
	for (var i = 0; i < this.col; i++) {
		html += '<div class="galleryColumn" style="width:'+ width+'px "></div>' 
	};
	this.element.innerHTML = html;
	this.columns = this.element.querySelectorAll('.galleryColumn');
};

GalleryWall.prototype.append = function(photos) {
	photos.forEach((
		function(photo){
			var item = document.createElement('div');
			item.className = 'galleryItem';
			item.innerHTML = 
				'<div >' +
				'<img class="galleryPhoto" src="' + photo.image.small + '">' +
				'</div>';
			this.getMinColumn().appendChild(item);
		}).bind(this))
	// 上面也是一个bind(this)的例子
};

GalleryWall.prototype.getMinColumn = function() {
	var min = this.columns[0];
	for (var i = 0; i < this.col; i++) {
		if(this.columns[i].clientHeight < min.clientHeight){
			min = this.columns[i];
		}
	}
	return min;
};


var Application = function(gallery){
	this.gallery = gallery;
	this.loading = false;
	this.page = 0;
	this.sourse = '500px';
	this.load();

}

Application.prototype.scroll = function() {
	if(scrollY + innerHeight > document.body.clientHeight && !this.loading){
		this.load();
	}
};
// bind(this) 好像理解了  保证传递后的函数还能用this
Application.prototype.load = function() {
	this.loading = true;
	getPhotos(this.page++,this.sourse).then(this.loaded.bind(this));	
};

Application.prototype.loaded= function(photos) {
	this.loading = false;
	this.gallery.append(photos);
};

window.onload = function(){
	var col = 5;

	new Application( new GalleryWall('.gallery',col));
	console.log('begin');
}
