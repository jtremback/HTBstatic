//TOOLTIPS
$(document).ready(function() {
  $(".mayor").hide();
  $(".democlickzone").click(function() {
  	alert("stoops");
    $(".mayor").show();
    $(".city").hide();

  });


//  $(".tipper").mouseleave(function() {
//    var person = "." + $(this).attr("id");
//    $(this).parents(".accordion").find(person).addClass("collapsed");
//  });
//  $(".tip").mouseenter(function() {
//    $(this).removeClass("collapsed");
//  });
});