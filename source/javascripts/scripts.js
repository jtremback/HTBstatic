$(document).ready(function() {
  // Bind an event to window.onhashchange that, when the hash changes, gets the
  // hash and adds the class "selected" to any matching nav link.
  $(window).hashchange( function(){
    var hash = location.hash || '#login2';

//    // Set the page title based on the hash.
//    document.title = ( hash.replace( /^#/, '' ) || 'blank' ) + ' | Hypothes.is';

    $('.page:visible').not(hash).fadeOut(function () {
      $('.page' + hash).fadeIn();
    });

    $('#navlist a[href!="' + hash + '"]').removeClass("hover")
    $('#navlist a[href="' + hash + '"]').addClass("hover")
  });
  // Hide the invisible things ASAP on page load.
  $('.page').not(location.hash || '#login2').hide()
});

//ERROR MESSAGES
$(document).ready(function() {
  $(".errormsg").hide();
  $(".trigger").click(function() {
    var identifier = "." + $(this).attr("id");
    $(this).parents(".showrange").find(".errormsg").not(identifier).slideUp("slow");
    $(this).parents(".showrange").find(".errormsg" + identifier).slideToggle("slow");
    $(this).parents(".showrange").find(".control-group").not(identifier).removeClass("error");
    $(this).parents(".showrange").find(".control-group" + identifier).toggleClass("error");
    $(this).parents(".showrange").addClass("error");
  });

  $(".triggerpos").click(function() {
    var identifier = "." + $(this).attr("id");
////    $(this).parents(".showrange").find(".errormsg").not(identifier).slideUp("slow");
//    $(this).parents(".showrange").find(".errormsg" + identifier).slideToggle("slow");
//    $(this).parents(".showrange").find(".control-group").not(identifier).removeClass("error");
    $(this).parents(".showrange").find(".control-group" + identifier).toggleClass("pos");
  });
});

//MASONRY
$('#masontainer').masonry({
  itemSelector: '.brick',
  isFitWidth: true,
});
