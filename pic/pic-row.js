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
	this.getRow(photos).forEach(
		function(rows){
			var row = document.createElement('div');
			row.className = 'gallery-Row';
			row.style.height = self.element.clientWidth / rows.aspectRatio + 'px';
			row.innerHTML = rows.photos.reduce(function(html,photo){
				html+= 
					'<div class="galleryPhoto">' +
					'<img  src="' + photo.image.small + '">' +
					'</div>';
				return html;
			},'');
			
			self.element.appendChild(row);
			console.log(row);
		})
	
};

GalleryRow.prototype.getRow = function(photos) {
	// 获取上次最后一行的photes   this.photos 作为全局变量用吧
	photos = this.photos.concat(photos);

	var aspectRatio = 0;
	var _photos = [];
	var row = [];

	for (var i = 0; i < photos.length; i++) {
		_photos.push(photos[i]);
		aspectRatio += photos[i].width/photos[i].height;

		if (aspectRatio >= this.aspectRatio) {
			row.push({
				photos:_photos,
				aspectRatio:aspectRatio
			});
			_photos = [];
			aspectRatio =0;
		}
	}
	// 保存最后一行的图片
	this.photos = _photos;
	console.log(row);
	return row;
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
