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

var GalleryWall = function(selector,photos){
  this.element = document.querySelector(selector);
  this.photos = photos.slice(0, 6);
  this.init();
  this.resize();
}

GalleryWall.prototype.init = function(first_argument) {
  this.element.innerHTML = this.photos.reduce(function (html, item) {
    html +=
      '<div class="gallery-item" style="background-image: url(' + item.image.large + ')">' +
        '<div class="gallery-photo-info">' +
          '<div class="gallery-photo-info-wapper">' +
            '<div class="gallery-photo-name">' + item.name + '</div>' +
            '<div class="gallery-photo-description">' + item.description + '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    return html
  }, '')
};
GalleryWall.prototype.resize = function() {
  var items = this.element.querySelectorAll('.gallery-item');
  this['sizes'+this.photos.length]().forEach(function (size, i) {
    items[i].style.width = size.width + 'px'
    items[i].style.height = size.height + 'px'
    if (size.right) {
      items[i].style.float = 'right'
    }
  })
};

GalleryWall.prototype.sizes1 = function () {
  return [
    {
      width: this.element.clientWidth,
      height: this.element.clientHeight
    }
  ]
}

GalleryWall.prototype.sizes2 = function () {
  var width = this.element.clientWidth * 2 / 3
    
  return [
    {
      width: width,
      height: this.element.clientHeight
    },
    {
      width: width,
      height: this.element.clientHeight
    }
  ]
}

GalleryWall.prototype.sizes3 = function () {
  var side = this.element.clientHeight / 2
  
  return [
    {
      width: this.element.clientWidth - side,
      height: this.element.clientHeight
    },
    {
      width: side,
      height: side
    },
    {
      width: side,
      height: side
    }
  ]
}

GalleryWall.prototype.sizes4 = function () {
  var width = this.element.clientWidth / 2;
  var height = this.element.clientHeight / 2;

  return [
    {
      width: width,
      height: height
    },
    {
      width: width,
      height: height
    },
    {
      width: width,
      height: height
    },
    {
      width: width,
      height: height
    }
  ]
}

GalleryWall.prototype.sizes5 = function () {
  var width = this.element.clientWidth / 3
  var height = this.element.clientHeight / 3
  var sizes = [
    {
      width: width * 2,
      height: height * 2
    },
    {
      right: true,
      width: width,
      height: width
    },
    {
      right: true,
      width: width,
      height: this.element.clientHeight - width
    },
    {
      width: width,
      height: height
    },
    {
      width: width,
      height: height
    }
  ]
  
  // 由于使用了浮动，在某些情况下，为了避免某些元素被卡住，需要调整下顺序
  if (this.element.clientWidth > this.element.clientHeight * 2) {
    sizes.push(sizes.splice(2, 1)[0])
  }
  
  return sizes
}

GalleryWall.prototype.sizes6 = function () {
  var width = this.element.clientWidth / 3
  var height = Math.ceil(this.element.clientHeight / 3)

  return [
    {
      width: width * 2,
      height: height * 2
    },
    {
      width: width,
      height: height
    },
    {
      width: width,
      height: height
    },
    {
      width: width,
      height: height
    },
    {
      width: width,
      height: height
    },
    {
      width: width,
      height: height
    }
  ]
}

function init(){
  getPhotos(0, 'so').then(function (photos) {
    // document.querySelector('.spinner').style.display = 'none'
    console.log(photos)
    new GalleryWall('#gallery-1', photos.slice(0, 1))
    new GalleryWall('#gallery-2', photos.slice(1, 3))
    new GalleryWall('#gallery-3', photos.slice(3, 6))
    new GalleryWall('#gallery-4', photos.slice(6, 10))
    new GalleryWall('#gallery-5', photos.slice(10, 15))
    new GalleryWall('#gallery-6', photos.slice(15, 21))
  })

}

window.onload = function(){
  init();
}