//TOOLTIPS
$(document).ready(function() {
  alert("ready");

  outCheck = function() {
    console.log("outCheck");
    if ($("#easyXDM_annotator_provider").hasClass("annotator-collapsed")) {
      $(".blurbs").removeClass("out");
      console.log("addClass");
    } else {
      $(".blurbs").removeClass("out");
      console.log("removeClass");
    }
  }

  setInterval(outCheck, 1000);

});


