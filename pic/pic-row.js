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



var GalleryRow = function(selector,minHeight) {
	minHeight = minHeight || 300 ;
	this.element = document.querySelector(selector);
	this.photos = [];
	this.aspectRatio = this.element.clientWidth / minHeight;
	
}


GalleryRow.prototype.append = function(photos) {
	var self = this;
	this.getRow().forEach(
		function(photo){
			var item = document.createElement('div');
			item.className = 'galleryItem';
			item.innerHTML = 
				'<div >' +
				'<img class="galleryPhoto" src="' + photo.image.small + '">' +
				'</div>';
			self.element.appendChild(item);
		})
	// 上面也是一个bind(this)的例子
};

GalleryRow.prototype.getRow = function(photos) {
	
};




var Application = function(gallery){
	this.gallery = gallery;
	this.loading = false;
	this.page = 0;
	this.sourse = '500px';
	this.load();

	window.addEventListener('scroll',this.scroll.bind(this));
}

Application.prototype.scroll = function() {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	if((scrollY + innerHeight > document.body.clientHeight )&& !this.loading){
		this.load();
	}
};

// bind(this) 好像理解了  保证传递后的函数还能用this
Application.prototype.load = function() {
	this.loading = true;
	getPhotos(this.page,this.sourse).then(this.loaded.bind(this));	
};

Application.prototype.loaded= function(photos) {
	this.loading = false;
	this.gallery.append(photos);
};

window.onload = function(){
	

	new Application( new GalleryRow('.gallery',300));
	console.log('begin');
}
