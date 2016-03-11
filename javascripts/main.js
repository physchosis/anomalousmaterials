// Main is used for the main website


// just slapped in here for time being
$( document ).ready(function() {
    $('#hero-spot').height($( window ).height());
});


// For now just some simple stuff will be put in here...
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


$("#how_it_works_button").click(function() {
   scrollToAnchor('how_it_works');
});

