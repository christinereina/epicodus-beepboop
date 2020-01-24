$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var string = $("input#kitty").val();
    var userAnswers = string.split('');
    console.log(userAnswers);

    for (var index =0; index < userAnswers.length; index +=1) {
      if (userAnswers[index] === '1') {
          userAnswers.splice(index,1,'hello')
      } else (userAnswers[index] < '1') 
          userAnswers.splice(index,1,'kitty')
    };

      $("#output").text(userAnswers);


      });
});
				