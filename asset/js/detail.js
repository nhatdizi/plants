/* ---------------product-overview------------------- */
const images = document.querySelectorAll('.thumbnail-list .thumbnail img')
// Lấy phần tử ảnh bên trong khung chứa
const productGalleryImg = document.querySelector('.product-gallery-img img')
// Lấy khung chứa của ảnh
const parallaxContainer = document.querySelector('.product-gallery-img')

/* ---------------product-info------------------- */ 
const description = document.querySelector('.product-info__description')
const reviews = document.querySelector('.product-info__reviews')
const productDescription = document.querySelector('.product-description')
const productReviews = document.querySelector('.product-reviews')
const descriptionActive = document.querySelector('.description-active')
const reviewsActive = document.querySelector('.reviews-active')

/* ---------------product-overview------------------- */
images.forEach((item, index) =>{
    item.addEventListener('click', function(){
        productGalleryImg.src = item.src
    })
})

// parallax hover effect
// Thêm sự kiện lắng nghe khi di chuyển chuột vào khung chứa
parallaxContainer.addEventListener('mousemove', (e) =>{
    // Lấy tọa độ và kích thước của khung chứa
    const rect = parallaxContainer.getBoundingClientRect();

    // Tính toán vị trí của chuột trong khung chứa
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Tính toán khoảng cách di chuyển của ảnh
    // Giá trị 80 có thể điều chỉnh để tăng/giảm phạm vi di chuyển
    const moveX = (x - 0.5) * 80; 
    const moveY = (y - 0.5) * 80; 

    productGalleryImg.style.width = '120%';
    productGalleryImg.style.height = '120%';

    // Áp dụng dịch chuyển cho ảnh
    productGalleryImg.style.transform = `translate(${moveX}px, ${moveY}px) translate(-50%, -50%)`;

});

// Thêm sự kiện lắng nghe khi chuột rời khỏi khung chứa
parallaxContainer.addEventListener('mouseleave', () =>{
    productGalleryImg.style.width = '100%';
    productGalleryImg.style.height = '100%';
    // Đặt lại vị trí của ảnh về trung tâm
    productGalleryImg.style.transform = 'translate(-50%, -50%)';
})


/* ---------------product-info------------------- */
description.addEventListener('click', function(){
    productDescription.classList.remove('show')
    productReviews.classList.add('show')
    descriptionActive.style.display = 'block'
    reviewsActive.style.display = 'none'
})

reviews.addEventListener('click', function(){
    productDescription.classList.add('show')
    productReviews.classList.remove('show')
    descriptionActive.style.display = 'none'
    reviewsActive.style.display = 'block'
})