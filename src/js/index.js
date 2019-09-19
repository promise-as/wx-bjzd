$(function () {
  function fixedHandle(aimEle) {
    var aimTop = aimEle.offset().top; // 元素距离顶部的高度
    var aimH = aimEle.outerHeight(); // 元素的高度(包括 padding)
    var createEle = $("<div></div>");
    $(createEle).css({
      height: aimH,
      marginBottom: '0.4rem',
      display: 'none'
    });
    $(aimEle.parent()).append(createEle); // 追加到父元素中，成为最后一个孩子
    $(window).scroll(function () {
      if($(window).scrollTop() >= aimTop){
        aimEle.css({
          position: 'fixed',
          top: 0
        });
        $(createEle).show();
      }else{
        aimEle.css({
          position: 'static'
        });
        $(createEle).hide();
      }
    });
  }
  fixedHandle($('.head-yy'));

  /*
  * clickEle: 点击的元素，
  * tabAimEle: 要切换的目标元素
  */
  function tabHandle(clickEle, tabAimEle, className) {
    $(clickEle).each(function (index) {
      $(this).click(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(tabAimEle)[index]).addClass(className).siblings().removeClass(className);
      });
    });
  }

  tabHandle('.bj-dz .tab-head span', '.dz-item', 'cur');
});