$(function () {

  //Loading
  $(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });
  // ハンバーガー

    $(function() {
        $('.drawer').drawer();
    });


  // main画面 スライダー
  $('.bgimg-slider').bgSwitcher({
    images: ['./assets/img/main1.JPG', './assets/img/main2.JPG', './assets/img/out.jpg'],
    effect: "fade",
    easing: "linear"
  });
  $('.bgimg-slider_2').bgSwitcher({
    images: ['./assets/img/room01.JPG', './assets/img/room02.JPG', './assets/img/room03.JPG', './assets/img/room04.JPG', './assets/img/room05.JPG', './assets/img/room06.JPG'],
    effect: "fade",
    easing: "linear"
  });


// slick
  $(function () {
    $('.room_gallery').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

  // 問い合わせ
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_fwjpzf9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!送信完了しました！');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
});



