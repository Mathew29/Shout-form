$(document).ready(function() {
  $("#shout-form").submit(function(event) {
    var saidInput = $("input#said").val();

    $(".said").text(saidInput.toUpperCase());

    $("#shout").show();
    event.preventDefault();
  });
});
