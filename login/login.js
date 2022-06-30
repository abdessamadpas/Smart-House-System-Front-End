$(".close-btn").click(function(){
    $("#forgotten-container").fadeOut(800, function(){
      $("#container").fadeIn(800);
    });
  });
  
  /* Forgotten Password */
  $('#forgotten').click(function(){
    $("#container").fadeOut(function(){
      $("#forgotten-container").fadeIn();
    });
  });