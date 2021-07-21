var main = function (input) {
  var myOutputValue = gameOfSps(input);
  return myOutputValue;
};

var generateRandomSps = function () {
  var randomResult = math.random() * 4;
  var randomSpsResult = math.floor(randomResult);
  return randomSpsResult;
};

var gameOfSps = function (userInput) {
  var myOutputValue = "Please enter Scissors, Paper or Stone";

  var Scissors = 1;
  var Paper = 2;
  var Stone = 3;
  var result = generateRandomSps();

  if (userInput == "Scissors" && result == Scissors) {
    var myOutputValue = " We Both Selected Scissors. Its a Draw";
  }

  if (userInput == "Scissors" && result == Paper) {
    var myOutputValue = " Computer Selected You Win!";
  }

  if (userInput == "Scissors" && result == Stone) {
    var myOutputValue = " Computer selected Stone. You Lost!";
  }

  if (userInput == "Paper" && result == Scissors) {
    var myOutputValue = " Computer select Scissors. You Lost!";
  }

  if (userInput == "Paper" && result == Paper) {
    var myOutputValue = " We both Selected Paper. Its a Draw";
  }

  if (userInput == "Paper" && result == Stone) {
    var myOutputValue = " Computer Select Stone. You Win!";
  }

  if (userInput == "Stone" && result == Scissors) {
    var myOutputValue = " We both selected Stone. Its a Draw";
  }

  if (userInput == "Stone" && result == Paper) {
    var myOutputValue = " Computer selected Paper. You Lost!";
  }

  if (userInput == "Stone" && result == Stone) {
    var myOutputValue = " We both slected Stone. Its a Draw";
  }

  return myOutputValue;
};
