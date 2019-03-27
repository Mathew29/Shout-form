$(document).ready(function() {
  $("#shout-form").submit(function(event) {
    var saidInput = $("input#said").val();

    $(".said").text(saidInput);

    $("#shout").show();
    event.preventDefault();
  });
});
