$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var userAnswer = $("input#kitty").val();
    $("#output").text(userAnswer);

})
				
});