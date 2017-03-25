// Want to provide an overlay with the larg image - lightbox


var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$($overlay).append($image);

$($overlay).append($caption);

$("body").append($overlay);


//1. Capture the click event on a link to an image
$("#gallery a").click(function(event) {
    event.preventDefault();
    var imageLocation=$(this).attr("href");
    var imageCaption=$(this).children("img").attr("title");
    $image.attr("src", imageLocation);
    $caption.text(imageCaption);
    
    
    $overlay.show();
});
  //1.1 Show the overlay
  //1.2 Update the overlay with the image linked in the link
  //1.3 Get child's alt attribute and set caption
//2. Add overlay
  //2.1 An image
  //2.2 A caption

$overlay.click(function(){
    $overlay.hide();
});

//3. When overlay is clicked
  //3.1 Hide overlay