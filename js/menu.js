$(document).ready(function(){
  $(".header_list").click(
    function () {
      $(this).children(".menu").toggle();
    }
  );
});
