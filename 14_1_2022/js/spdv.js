$(document).ready(function () {
    $('.box-user').click(function () {
        $('.box-login').toggleClass('box-loginn');
    });


    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<i class="fas fa-caret-left slick-prev"></i>',
        nextArrow: '<i class="fas fa-caret-right slick-next"></i>',
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('.logo').addClass('img-animate')
            $('.menu-top').addClass('menu-top1')
        } else {
            $('.logo').removeClass('img-animate')
            $('.menu-top').removeClass('menu-top1')
        }
    });



    $('.list-partner').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
           
          ]
    });

    var list_vocher = [{
            'img': 'http://leskin.devmaster.vn/img/endow-2.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19'
        },
        {
            'img': 'http://leskin.devmaster.vn/img/endow-3.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19'
        },
        {
            'img': 'http://leskin.devmaster.vn/img/endow-1.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19'
        },
        {
            'img': 'http://leskin.devmaster.vn/img/endow-2.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19'
        },
        {
            'img': 'http://leskin.devmaster.vn/img/endow-3.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19'
        },
        {
            'img': 'http://leskin.devmaster.vn/img/endow-1.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19'
        },
    ]

    var addvocher = "";
    list_vocher.forEach(function (vocher) {
        addvocher += "<div class='item-vocher'><div class='img-vocher'><img src='" + vocher.img + "'alt=''></div><div class='vocher-bot'><h3><span>Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...</span></h3><div class='bot'><div class='date'><span><i class='fas fa-gift'></i> 05/07/19 - 31/08/19</span></div><div class='btn-more'><span>Xem thêm <i class='fa fa-angle-right' aria-hidden='true'></i></span></div></div></div></div>"
    });
    $('.list-vocher').html(addvocher);
    $('.list-vocher').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<img src="http://leskin.devmaster.vn/img/icon/btn-slide.png" alt="">',
        nextArrow: '<img class="right" src="http://leskin.devmaster.vn/img/icon/btn-slide.png" alt="">',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    var list_coupun = [{

            'img': 'http://leskin.devmaster.vn/img/brand-1.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-1.png',
            // 'detail': '../html.detail.html',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-2.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-2.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-3.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-3.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-4.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-1.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-5.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-2.png',

        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-6.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-3.png',
        },
        {
        'img': 'http://leskin.devmaster.vn/img/brand-1.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-1.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-2.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-2.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-3.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-3.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-4.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-1.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-5.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-2.png',

        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-6.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-3.png',
        },

    ]

    var addcoupun = '';
    list_coupun.forEach(function (coupun) {
        addcoupun += "<div class='col-lg-4 col-md-6'><div class='item-vocher'><div class='img-vocher'><img src='" + coupun.img + "' alt=''></div><div class='vocher-bot bot2'><div class='img2'><img src='" + coupun.logo + "'alt=''></div><h3><span>Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...</span></h3><div class='bot'><div class='date'><span><i class='fas fa-gift'></i> 05/07/19 - 31/08/19</span></div><div class='btn-more'><span>Xem thêm <i class='fa fa-angle-right' aria-hidden='true'></i></span></div></div></div></div></div>";
    });
    $('#coupon').html(addcoupun);

    var add = [{

            'img': 'http://leskin.devmaster.vn/img/brand-1.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-1.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-1.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-1.png',
        },
        {

            'img': 'http://leskin.devmaster.vn/img/brand-1.jpg',
            'title': 'Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...',
            'time': '05/07/19 - 31/08/19',
            'logo': 'http://leskin.devmaster.vn/img/icon/brand-1.png',
        },
    ]

    var addbtn = '';

    add.forEach(function (btn) {
        addbtn += "<div class='col-lg-4 col-md-6'><div class='item-vocher'><div class='img-vocher'><img src='" + btn.img + "' alt=''></div><div class='vocher-bot bot2'><div class='img2'><img src='" + btn.logo + "'alt=''></div><h3><span>Xóa Nhăn Vùng Mắt, Trán, Cau Mày, Khóe Miệng 1 Lần Duy Nhất...</span></h3><div class='bot'><div class='date'><span><i class='fas fa-gift'></i> 05/07/19 - 31/08/19</span></div><div class='btn-more'><span>Xem thêm <i class='fa fa-angle-right' aria-hidden='true'></i></span></div></div></div></div></div>";
    });
    $('#btnAdd').click(function () {
        $('#coupon').html(addcoupun + addbtn);
        $('#btnAdd').hide();
    });

    $('.fa-bars').click(function () {
        $('.list-menu').toggle();
        // alert(1);
    });
});