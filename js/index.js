$(function() {
  var elDocument = document.documentElement;
  elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

  if (typeof jQuery != 'undefined') {
    console.group("Name and Version:");
    console.log("\x1b[33m%s\x1b[0m" ,"Dalton Hodkiewicz's Portfolio Page");
      console.log("JQUERY VERSION: " + jQuery.fn.jquery);
  }
});
