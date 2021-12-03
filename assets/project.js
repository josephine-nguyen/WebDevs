let progress = localStorage.getItem('progress') ? JSON.parse(localStorage.getItem('progress')) : [];
let currentActivity = localStorage.getItem('currentActivity') ? JSON.parse(localStorage.getItem('currentActivity')) : 1;
let currentTheme = JSON.parse(localStorage.getItem('currentTheme'));
let srcTheme = "./assets/" + currentTheme;

let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');

let hide = 0;

function loadProgressBar() {
    for (var i = 1; i < 11; i++) {
        const activityProgress = document.createElement('div');
        activityProgress.classList.add('activityProgress');
        if (i == currentActivity) {
            activityProgress.classList.add('currentActivity');
        }
        activityProgress.setAttribute('id', 'activityImage' + i);
        const activityProgressImage = document.createElement('img');
        activityProgressImage.classList.add('activityProgressImage');
        activityProgressImage.setAttribute('src', srcTheme + "/activityProgressImage" + i + ".svg");
        activityProgress.appendChild(activityProgressImage);
        const checkmark = document.createElement('p');
        checkmark.classList.add('checkmark');
        var temp = "activity" + i;
        if (progress[temp]) {
            checkmark.classList.add('completed');
        }
        checkmark.innerText = "\u2713";
        activityProgress.appendChild(checkmark);
        document.getElementById('progressBarContainer').appendChild(activityProgress);
    }
}

function loadText() {
    for (var i = 1; i < 11; i++) {
        document.getElementById("textActivity" + i).classList.remove();
        if (i == currentActivity) {
            document.getElementById("textActivity" + i).classList.add('active');
        }
        else {
            document.getElementById("textActivity" + i).classList.add('inactive');
        }
    }
}

function loadActivityArea() {
    for (var i = 1; i < 11; i++) {
        for (var i = 1; i < 11; i++) {
            document.getElementById("activity" + i).classList.remove();
            if (i == currentActivity) {
                document.getElementById("activity" + i).classList.add('active');
            }
            else {
                document.getElementById("activity" + i).classList.add('inactive');
            }
        }
    }
}

function submit() {
    if (q1.value == "<h1>" && q2.value == "</p>" && q3.value == "<") {
        alert("Great job! You got it right!\nThis is the end of the lesson for now, stay tuned for future updates!");
        window.location.href = "index.html";
    }
    else {
        alert("Not quite... make sure to check your tags!");
        document.getElementById('showCodeButton').classList.remove('hidden');
    }
}

function showOrHideCode() {
    if (hide == 0) {
        q1.value = "<h1>";
        q2.value = "</p>";
        q3.value = "<";
        document.getElementById('submitButton').classList.add('hidden');
        document.getElementById('showCodeButton').innerText = "Hide Code";
        hide = 1;
    }
    else {
        q1.value = "";
        q2.value = "";
        q3.value = "";
        document.getElementById('submitButton').classList.remove('hidden');
        document.getElementById('showCodeButton').classList.add('hidden');
        document.getElementById('showCodeButton').innerText = "Show Code";
        hide = 0;
    }
}


function loadEverything() {
    loadProgressBar();
    loadText();
    loadActivityArea();
}

loadEverything();