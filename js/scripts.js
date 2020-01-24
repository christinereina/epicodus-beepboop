$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var string = $("input#kitty").val();
    var userAnswers = string.split('');

    for (var number =0; number < userAnswers.length; number +=1) {
      if (userAnswers[number] === '1') {
          userAnswers.splice(number,1,'hello')
      } else if (userAnswers[number] === '1') {
          userAnswers.splice(number,2,'kitty')
      } else if (userAnswers[number] === '2') {
          userAnswers.splice(number,2,'kitty')
      } else if (userAnswers[number] === '3') {
          userAnswers.splice(number,3,'hello kitty no kno threes')
          
    }
  }


      $("#output").text(userAnswers);

      });
});
				