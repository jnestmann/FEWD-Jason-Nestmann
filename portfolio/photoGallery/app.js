// Want to provide an overlay with the large image - lightbox


var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$($overlay).append($image);

$($overlay).append($caption);

$("body").append($overlay);



$("#gallery a").click(function(event) {
    event.preventDefault();
    var imageLocation=$(this).attr("href");
    var imageCaption=$(this).children("img").attr("title");
    $image.attr("src", imageLocation);
    $caption.text(imageCaption);
    
    
    $overlay.show();
});

$overlay.click(function(){
    $overlay.hide();
});