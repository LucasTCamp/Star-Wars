const storyText = document.getElementById('story-text');
const storyImage = document.getElementById('story-image');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');

let currentScene = 'start';

const choices = {
    start: [
        { text: "Use the force to trick the guard", nextScene: '1A' },
        { text: "Grab the guard's blaster and fight", nextScene: '1B' }
    ],
    '1A': [
        { text: "Convince the guard to let you go", nextScene: '2AA' },
        { text: "Make the guard lead you to the control room", nextScene: '2AB' }
    ],
    '1B': [
        { text: "Shoot your way out", nextScene: '2BA' },
        { text: "Take out the guard in your cell and disguise yourself", nextScene: '2BB' }
    ],
    '2AA': [
        { text: "Blend in with officers and get on an escape shuttle", nextScene: '3AAA' },
        { text: "Steal a TIE fighter and escape", nextScene: '3AAB' }
    ],
    '2AB': [
        { text: "Override the Death Star's systems and make it self-destruct", nextScene: '3ABA' },
        { text: "Plant explosives to destroy the station", nextScene: '3ABB' }
    ],
    '2BA': [
        { text: "Fight through stormtroopers to reach the ship hangar", nextScene: '3BAA' },
        { text: "Find a vent and sneak into restricted areas", nextScene: '3BAB' }
    ],
    '2BB': [
        { text: "Board an Imperial transport ship unnoticed", nextScene: '3BBA' },
        { text: "Head to the reactor core to sabotage the station", nextScene: '3BBB' }
    ],
};

function updateStory(scene) {
    let currentChoices = choices[scene];

    if (scene === '3AAA' || scene === '3AAB' || scene === '3BBA') {
        storyText.textContent = "You survive and flee the Death Star!";
        storyImage.src = "escape.jpg";
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
        return;
    } else if (scene === '3ABA' || scene === '3ABB' || scene === '3BBB') {
        storyText.textContent = "You sacrifice yourself but destroy the Death Star in the process!";
        storyImage.src = "Destruction.jpg";
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
        return;
    } else if (scene === '3BAA' || scene === '3BAB') {
        storyText.textContent = "Darth Vader catches you!";
        storyImage.src = "darth_vader.jpg";
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
        return;
    }

    switch(scene) {
        case 'start':
            storyText.textContent = "You wake up in a cold, dark detention cell aboard the Death Star...";
            storyImage.src = "Detention_cell.jpg";
            break;
        case '1A':
            storyText.textContent = "You close your eyes and use the force to cloud the guard’s mind. He walks away!";
            storyImage.src = "Leaving.jpg";
            break;
        case '1B':
            storyText.textContent = "You grab the blaster from the guard and fire, knocking him out!";
            storyImage.src = "Guard_shot.jpg";
            break;
        case '2AA':
            storyText.textContent = "You convince the guard to let you go. He opens the cell door.";
            storyImage.src = "Leaving.jpg";
            break;
        case '2AB':
            storyText.textContent = "The guard leads you to the control room. You have a chance to sabotage the Death Star!";
            storyImage.src = "control_room.jpg";
            break;
        case '2BA':
            storyText.textContent = "You make it past the guard, weapons drawn, and shoot your way out!";
            storyImage.src = "shootout.jpg";
            break;
        case '2BB':
            storyText.textContent = "You knock out the guard, disguise yourself, and sneak away unnoticed.";
            storyImage.src = "disguise.jpg";
            break;
    }

    for (let i = 0; i < currentChoices.length; i++) {
        const button = i === 0 ? choice1Button : choice2Button;
        button.textContent = currentChoices[i].text;
        button.onclick = function() {
            currentScene = currentChoices[i].nextScene;
            updateStory(currentScene);
        };
    }
}

updateStory(currentScene);
