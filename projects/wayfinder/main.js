var buttonClicks = 0;
var path1;
var loneWandererPath;
var homePath;
var namePath;

var playerInfo = {
    playerName,
    playerFavoriteColor,
    playerFavoriteAnimal,
    playerFavoriteFood
}

function addInfo (info, description) {
    playerInfo.info = prompt(description);
}

function changeText (newText) {
    document.getElementById("find").innerHTML = newText;
}

function clic (ans) {
    buttonClicks++;
    if (buttonClicks === 1) {
        if (ans === true) {
            changeText("an old man comes towards you. he asks your name.");
        } else {
            changeText("oh. your destiny is seized from you. refresh your browser to play again.");
            buttonClicks === 99;
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
            }
        }
    } else if (buttonClicks === 5) {
        if (path1 === true) {
            if (ans === true) {
                changeText("the old man asks if there is anything else he can help you with.")
            } else {
                changeText("the old man says that's fine. you become a lone wanderer on this world.")
            }
        } else {
            if (ans === true) {
                changeText("you find a textbox of your own. the old man asks your name.")
                namePath === true;
                addInfo('playerInfo', "what's your name?")
            } else {
                changeText("you don't find a textbox, but you do find an abandoned cottage. do you stay there?")
                homePath === true;
            }
        } 
    } else if (buttonClicks === 6) {
        if (path1 === true) {
            if (ans === true) {
                changeText("refresh your browser to restart.")
            } else {
                changeText("you don't accept this fate?")
            }
        } else  if (homePath === true) {
            if (ans === true) {
                changeText("you decide to stay and work to live. the old man says he'll be nearby if you need anything.")
            } else {
                changeText("you don't want to stay. the old man asks if you want to stay with him instead.")
            }
        } else {
            changeText("the old man says 'Hello, " + playerInfo.playerName + "'")
        }
    } else if (buttonClicks === 7) {
        if (path1 === true) {
            if (ans === true) {
                changeText("you are more than just a wanderer. you are mighty. you are powerful. you are...THETOSCZN!!!")
            } else {
                changeText("refresh your browser to play again.")
            }
        } else  if (homePath === true) {
            if (ans === true) {
                changeText("you decide to stay and work to live. the old man says he'll be nearby if you need anything.")
            } else {
                changeText("you don't want to stay. the old man asks if you want to stay with him instead.")
            }
        } else {
            if (ans === true) {
                changeText("the old man asks for your favorite food.")
            } else {
                changeText("the old man asks 'what?' then he leaves you to die. that was rude. refresh your browser to play again.")
            }
        }
    
    } else if (buttonClicks === 99) {
        var three = 3;
        }
}