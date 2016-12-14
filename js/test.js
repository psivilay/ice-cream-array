$(document).ready(function() {
  $("button#show-flavors").click(function() {
    event.preventDefault();

    var flavors = ["rocky road", "vanilla", "chocolate", "mint oreo", "sherbert", "pistachio"];
    flavors.forEach(function(flavor) {
      $("ul").children("li").prepend(flavor);
    });
  });
});
