function showAlert() {
    alert('Hello! Thank you for playing my short, text-based dialogue game, Ozymandias! It is based on the Percy Shelley poem by the same name. Windows95 font is from arnesava.com and desert photographs are from Pixnio and istockphoto. Poem recording by Bryan Cranston.');
}

function newTab() {
    var game = 'finalgrid.html';
    window.open(game, '_blank');
}

function start() {
    var game = 'finalgame.html';
    window.location.href = game;
}

function start2() {
    var game = 'finalgame2.html';
    window.location.href = game;
}

function start3() {
    var game = 'finalgame3.html';
    window.location.href = game;
}

function startEnd1() {
    var game = 'finalend1.html';
    window.location.href = game;
}

function startEnd2() {
    var game = 'finalend2.html';
    window.location.href = game;
}

function startEnd3() {
    var game = 'finalend3.html';
    window.location.href = game;
}

function startEnd4() {
    var game = 'finalend4.html';
    window.location.href = game;
}

function restart() {
    var game = 'final.html';
    window.location.href = game;
}

function playAudio(audioSrc) {
    // Play the specified MP3 file
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
}
