var words = ["fermentation", "barley", "yeast", "hops", "bottle", "keg", "stout", "pilsner", 
"craft", "lager", "draught", "festival", "pong", "stein", "pint", "weizen", "goblets", "bock", 
"microbrewery", "golden", "brewski", "copper", "carbonation", "brewpub"];

var word = words[Math.floor(Math.random()*words.length)]

var answerArray = [];

for(var i=0; i<word.length;i++){
    answerArray[i] ="_"
}

var remainingLetters = word.length;

// ******************************

// 

addEventListener("onkeypress", myFunction);

    function myFunction() {
      alert ("Let's get started!");
    }

while (remainingLetters > 0){
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click cancel to stop playing");

    if(guess == null){
        break;
    } else if(guess.length !== 1){
        alert("Please enter a signle letter.")
    }  else {
        for (var j=0; j < word.length; j++){
            if(word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

}
// let the player know the word
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);



