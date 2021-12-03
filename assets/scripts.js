function openThemes() {
    document.getElementById("darken").style.display = "block";
    document.getElementById("themesPanel").style.display = "block";
}

function selectTheme(clickedID) {
    localStorage.setItem('currentTheme', JSON.stringify(clickedID));
    progress = {
        activity1: false,
        activity2: false,
        activity3: false,
        activity4: false,
        activity5: false,
        activity6: false,
        activity7: false,
        activity8: false,
        activity9: false,
        activity10: false
    };
    localStorage.setItem('progress', JSON.stringify(progress));
    localStorage.setItem('currentActivity', JSON.stringify(1));
    window.location.href = "project.html";
}

function changeThemes() {
    document.getElementById("darken").style.display = "block";
    document.getElementById("changeThemesPanel").style.display = "block";

}

function closeThemesPanel() {
    document.getElementById("darken").style.display = "none";
    document.getElementById("themesPanel").style.display = "none";
}

function closeChangeThemesPanel() {
    document.getElementById("darken").style.display = "none";
    document.getElementById("changeThemesPanel").style.display = "none";
}