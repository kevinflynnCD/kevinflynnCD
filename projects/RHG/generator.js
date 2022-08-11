function changeText (newText) {
    document.getElementById("text").innerHTML = newText;
}

let generatedSubject;
let generatedAdjective;
let generatedVerb;
let generatedObject;

function run () {
    generatedSubject = Math.floor(Math.random() * subject.length);
    generatedAdjective = Math.floor(Math.random() * adjective.length);
    generatedVerb = Math.floor(Math.random() * verb.length);
    generatedObject = Math.floor(Math.random() * object.length);
    changeText(generatedSubject + " " + generatedAdjective + " " + generatedVerb + " " + generatedObject);
};