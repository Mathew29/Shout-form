$(document).ready(function() {
  $("#shout-form").submit(function(event) {
    var saidInput = $("input#said").val();
    // var output = saidInput.toUpperCase();

    $(".said").text(output);

    $("#shout").show();
    event.preventDefault();
  });
});
