
$(document).ready(function() {

 
    $("#hide").click(function() {
      $("img").hide();
    });
    $("#show").click(function() {
      $("img").show();
    });
  

    $("#toggle").click(function() {
      $("img").toggle();
    });
  

    $("#fade").click(function() {
      $("img").toggleClass("fade");
 
        if( $("img").css("opacity") == '0') {
          $("#textChange").text("fade on");
        } else {
 $("#textChange").text("fade off");
        }
    });
  
   $("img").hover(function() {
      $("img").attr("src", "img/3.jpg");
    }, 
    function() {
$("img").attr("src", "img/2.jpeg");
    });
    
    
$("#newLi").click(function() {
$("#list").append("<li>Some Text</li>");
  
    
$("li").hover(function() {
$(this).css({"font-size" : "40px", "color": "tomato"})
     }, function() {
 $(this).css({"font-size" : "initial", "color": "initial"})
        })
  
    });
  
    
    $("#final").click(function() {
      $("body").append("<div id='overlay'></div>");
    })
  
  
    
  
  });
