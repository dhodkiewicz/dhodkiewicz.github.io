$(function() {
  var elDocument = document.documentElement;
  elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

  if (typeof jQuery != 'undefined') {
      console.group("Name and Version:");
        console.log("Dalton Hodkiewicz's Final")
        console.log("JQUERY VERSION: " + jQuery.fn.jquery);
  }
});
