$(document).ready(function() {
  $("button#show-flavors").click(function() {
    event.preventDefault();
    var flavors = ["rocky road", "vanilla", "chocolate", "mint oreo", "sherbert", "pistachio"];

    for (var index = 0; index < flavors.length; index += 1) {
      $("ol").append("<li>" + flavors[index] + "</li>");
    }

    //flavors.forEach(function(flavor) {
      //$("ol").append("<li>" + flavor + "</li>");
    //});
  });
});
