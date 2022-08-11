var buttonClicks = 0;
var path1;
var loneWandererPath;
var homePath;
var namePath;
var grampsPath;
var lonePath;
var spaghettiPath;

var playerInfo = {
    playerName: null,
    playerFavoriteColor: null,
    playerFavoriteAnimal: null,
    playerFavoriteFood: null
}

function addInfo (info, description) {
    playerInfo[info] = prompt(description);
}

function changeText (newText) {
    document.getElementById("text").innerHTML = newText;
}

function clic (ans) {
    buttonClicks++;
    if (buttonClicks === 1) {
        if (ans === true) {
            changeText("an old man comes towards you. he asks your name.");
        } else {
            changeText("oh. your destiny is seized from you. refresh your browser to play again.");
            buttonClicks = 99;
        }
    } else if (buttonClicks === 2) {
        changeText("the old man sees that you cannot speak - just nod or shake your head. he says he will help you find a textbox.")
    } else if (buttonClicks === 3) {
        if (ans === true) {
            changeText("you both find a cave and a field. do you go to the cave?")
        } else {
            changeText("oh - he wonders why you don't want to speak. he asks if you want food.")
            path1 = true;
        }
    } else if (buttonClicks === 4) {
        if (path1 === true) {
            if (ans === true) {
                changeText("the old man gives you some spaghetti.")
                spaghettiPath = true;
            } else {
                changeText("you refuse the spaghetti. the old man asks if he can even help you with anything.")
                path1 === false;
                loneWandererPath = true;
            }
        } else {
            if (ans === true) {
                changeText("you find a textbox of your own. the old man asks your name.")
            } else {
                changeText("do you go to the field?")
                homePath = true;
            }
        }
    } else if (buttonClicks === 5) {
        if (spaghettiPath === true) {
            if (ans === true) {
                changeText("the old man asks if there is anything else he can help you with.")
            } else {
                changeText("the old man says that's fine. you become a lone wanderer on this world. refresh your browser to play again.")
                buttonClicks = 99;
            }
        } else if (homePath === true) {
            if (ans === true) {
                changeText("you don't find a textbox, but you do find an abandoned cottage. do you stay there?")
            } else {
                changeText("oh. you remain suspended in indecision forever. refresh your browser to play again.")
                buttonClicks = 99;
            }
        } else if (loneWandererPath === true) {
            if (ans === true) {
                changeText("the old man forgot you can't talk and asks what you want. you don't say anything. refresh your browser to play again.")
            } else {
                changeText("you become a lone wanderer. refresh your browser to play again.")
            }
        } else {
            if (ans === true) {
                changeText("you find a textbox of your own. the old man asks your name.")
                addInfo('playerName', "what's your name?")
                namePath === true;
            } else {
                changeText("you are null. refresh your browser to play again.")
                buttonClicks = 99;
            }
        }
    } else if (buttonClicks === 6) {
        if (path1 === true) {
            if (ans === true) {
                changeText("the old man doesn't know what to help you with, so he gives you spaghetti. refresh your browser to play again.")
                buttonClicks = 99;
            } else {
                changeText("the old man leaves you to your own devices. refresh your browser to play again.")
                buttonClicks = 99;
            }
        } else  if (homePath === true) {
            if (ans === true) {
                changeText("you decide to stay and work to live. the old man says he'll be nearby if you need anything. refresh your browser to play again.")
                buttonClicks = 99;
            } else {
                changeText("you don't want to stay. the old man asks if you want to stay with him instead.")
            }
        } else {
            changeText("the old man says 'Hello, " + playerInfo.playerName + "'")
        }
    } else if (buttonClicks === 7) {
        if (homePath === true) {
            if (ans === true) {
                changeText("you decide to stay and work to live. the old man says he'll be nearby if you need anything. refresh your browser to play again.")
                buttonClicks = 99;
            } else {
                changeText("you don't want to stay. the old man asks if you want to stay with him instead.")
            }
        } else {
            if (ans === true) {
                changeText("the old man asks for your favorite food.")
            } else {
                changeText("the old man asks 'what?' then he leaves you to die. that was rude. refresh your browser to play again.")
                buttonClicks = 99;
            }
        }
    } else if (buttonClicks === 8) {
        if (path1 === true) {
            changeText("refresh your browser to play again.")
            buttonClicks === 99;
        } else if (homePath ===  true) {
                    changeText("the old man says that he cannot help you any further, then, except to point you in the direction of Castle Town - to the north. refresh your browser to play again.")
                    buttonClicks = 99;
        } else if (ans === true) {
            addInfo('playerFavoriteFood', "what's your favorite food?")
            changeText("the old man says 'ok, i'll make you some " + playerInfo.playerFavoriteFood + " tonight. come sleep at my house, we can get you started on your path to life here.' refresh your browser to play again.")
        } else {
            changeText('the old man gives you poisoned apple headcheese. you die. refresh your browser to play again.')
        }
    } else if (buttonClicks === 99) {
        var three = 3;
        }
}