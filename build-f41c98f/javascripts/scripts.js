//TOOLTIPS
$(document).ready(function() {

  outCheck = function() {
    console.log("outCheck");
    if ($("#easyXDM_annotator_provider").hasClass("annotator-collapsed")) {
      $(".blurbs").addClass("in");
    } else {
      $(".blurbs").removeClass("in");
    }
  }

  setInterval(outCheck, 100);

});


