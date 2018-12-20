$(function() {


var $btn = $('.btn'); // our button selector
var $bar = $('.sidebar'); // selects the sidebar

var $li = $('.accordion-control');

$li.hide().each(function(index) {        // foreach list item
$(this).delay(275 * index).fadeIn(1000); // delay multiplied by it's index in milliseconds
});

/// CODE FOR INDIVIDUAL CHARACTERS IN THE HEADING
var pos = 0;
var delay = 45; // milliseconds
var text = $("h1").text();

function typeon() {
  pos++;
  var typedText = text.substr(0, pos);
  $('h1').text(typedText);

  if (pos < text.length) {
    // call itself after delay, an async loop
    setTimeout(typeon, delay);
  }
}

// start
typeon();

$("h1").fadeOut(300); // fadeout then fade in my header
$("h1").fadeIn(300);
//END of typeon


/// CODE FOR NAVBAR BELOW - TOGGLE IN AND OUT
$btn.on('click', function() {
  if ( $btn.attr('name') == 'menu' ) {
    $btn.attr('name', 'arrow-dropright-circle');
    $bar.fadeOut(150);
} else {
    $btn.attr('name', 'menu');
    $bar.fadeIn(150);
}
});

var $resume = $('.resume');
$resume.on('click', function() {
    if (confirm ('Do you wish to download Dalton\'s Resume?')) {
        location.href = 'assets/dalton_hodkiewicz_resume.docx';
    }

    return false;
});

});
