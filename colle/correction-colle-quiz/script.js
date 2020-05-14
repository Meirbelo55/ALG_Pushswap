question = $("#question")[0];
inputs = [1, 2, 3, 4].map(e => {
  return { label: $("#opt" + e)[0], input: $("#r" + e)[0] };
});
count = $("#count")[0];
[1, 2, 3, 4].map(function(element) {
  $("#r" + element).click(function() {
    correctAnswers += doc[currIndex].solution == element;
    currIndex++;
    refreshQuestion(currIndex);
  });
});
let doc = "";
let currIndex = 0;
let correctAnswers = 0;

function refreshQuestion(index) {
  if (index == doc.length) {
    $("#container")[0].innerHTML = "Correct answers : " + correctAnswers + " / " + doc.length;
    return;
  }
  question.innerHTML = doc[index].question;
  inputs.forEach((e, i) => {
    e.label.innerHTML = doc[index].reponses[i];
    e.input.checked = false;
  });
  count.innerHTML = index + 1 + " / " + doc.length;
}

$.ajax({
  type: "GET",
  url: "./document.json",
  success: val => {
    doc = val;
    refreshQuestion(0);
  }
});
