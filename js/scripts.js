function getKitty(input) {

  var messages = ["Hello", "Kitty", "I'm sorry, human. I'm afraid I can't do that."];

  var numbers = input.toString().split("");
  if (numbers.includes("3")) {
    return messages[2];
  } else if (numbers.includes("2")) {
    return messages[1];
  } else if (numbers.includes("1")) {
    return messages[0];
  }

  var list = [];

  for (var i = 0; i < (input); i++) {
    if (i == 1) {
      list.push(messages[0]);
    } else if (i == 2) {
      list.push(messages[1]);
    } else if (i == 3) {
      list.push(messages[2]);
    } else {
      list.push(i.toString());
    }
  }

  return list.join(", ");
}

// user interface logic below

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("input#user").val());
    var result = getKitty(input);

    console.log(input)

    $("#output").text(result);
  });
});
