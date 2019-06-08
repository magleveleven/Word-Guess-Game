// create array of words
var words = ["fermentation", "barley", "yeast", "hops", "bottle", "keg", "stout", "pilsner", 
"craft", "lager", "draught", "festival", "pong", "stein", "pint", "weizen", "goblets", "bock", 
"microbrewery", "golden", "brewski", "copper", "carbonation", "brewpub"];


var rightWord = [];
var wrongWord = [];
// have word selected randomly
var randNum = Math.floor(Math.random()* words.length);
var chosenWord = words[randNum];
console.log(chosenWord);
var letterQuantity = chosenWord.length
console.log(letterQuantity);

// create underscores based on length of word
var underScores = [];

var displayUnderScores;
    for(var i=0; i <chosenWord.length; i++){
        underScores.push("_");
    }
console.log(underScores);


// capture users guess
document.addEventListener("keypress", function(event) {
    var keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
// check if guess is right
    if(chosenWord.indexOf(keyword) > -1) {
        console.log(true);
        rightWord.push(keyword);
        console.log(rightWord);}
        underScores[chosenWord.indexOf(keyword)] = keyword;
        if(underScores.join("")==chosenWord) {
        alert("Winner!");
        }
        else {
        wrongWord.push(keyword);
        console.log(wrongWord);
    }
});






// if wrong push to wrong array


