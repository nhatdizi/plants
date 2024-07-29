const images = document.querySelectorAll('.wrapper .wrapper__image img')
const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.gallery__inner img')
const close = document.querySelector('.gallery .gallery-close')

const prev = document.querySelector('.control.prev')
const next = document.querySelector('.control.next')

let currentIndex = 0

function showGallery(){
    if(currentIndex < 0){
        currentIndex = images.length - 1
    }else if(currentIndex == images.length){
        currentIndex = 0
    }

    //display
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) =>{
    item.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

gallery.addEventListener('click', function(e) {
    // Kiểm tra nếu phần tử được nhấp không phải là hình ảnh hoặc nút điều khiển hoặc nút đóng
    if (e.target !== galleryImg && !e.target.closest('.control') && e.target !== close) {
        gallery.classList.remove('show');
    }
});

prev.addEventListener('click', function(){
    currentIndex--
    showGallery()
})
next.addEventListener('click', function(){
    currentIndex++
    showGallery()
})

// keyboard
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    } else if(e.keyCode == 37){
        currentIndex--
        showGallery()
    }else if(e.keyCode == 39){
        currentIndex++
        showGallery()
    }
})