$(function () {
    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
        $("nav").toggleClass('open');
    });

    $('a[href^="#"]').click(function(){
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        /*var b = $('#menu'); //メニューの高さを取得して調整*/
        var adjust = 0;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        $(".openbtn1").removeClass('active');
        $("nav").removeClass('open');
        return false;
      });
      

      
});

