$(document).ready(function(){

  $(".header_list").hover(
    function () {
      $(this).children(".menu").toggle();
    }
  );
});
