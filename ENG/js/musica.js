let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'img/entretenimiento/1.jpg',
        name : 'Believer',
        artist : 'Image Dragons',
        music : 'mp3/1.mp3'
    },
    {
        img : 'img/entretenimiento/2.jpg',
        name : 'Every Breath you take',
        artist : 'The police',
        music : 'mp3/2.mp3'
    },
    {
        img : 'img/entretenimiento/3.jpg',
        name : 'Go west',
        artist : 'Pet shop boys',
        music : 'mp3/3.mp3'
    },
    {
        img : 'img/entretenimiento/4.jpg',
        name : 'Happy-live',
        artist : 'Pharrell Williams',
        music : 'mp3/4.mp3'
    },
    {
        img : 'img/entretenimiento/5.jpg',
        name : 'Hey jude',
        artist : 'The Beatles',
        music : 'mp3/5.mp3'
    },
    {
        img : 'img/entretenimiento/6.jpg',
        name : 'I still Miss Someone',
        artist : 'Johnny cash',
        music : 'mp3/6.mp3'
    },
    {
        img : 'img/entretenimiento/7.jpg',
        name : 'In my place',
        artist : 'Coldplay',
        music : 'mp3/7.mp3'
    },
    {
        img : 'img/entretenimiento/8.jpg',
        name : 'Just the way you are',
        artist : 'Bruno Mars',
        music : 'mp3/8.mp3'
    },

    {
        img : 'img/entretenimiento/9.jpg',
        name : 'Master of wars',
        artist : 'Bob dylan',
        music : 'mp3/9.mp3'
    },
    {
        img : 'img/entretenimiento/10.jpg',
        name : 'Shake it off',
        artist : 'taylor Swift',
        music : 'mp3/10.mp3'
    },
    {
        img : 'img/entretenimiento/11.jpg',
        name : 'Shape of you',
        artist : 'Ed Sheran',
        music : 'mp3/11.mp3'
    },
    {
        img : 'img/entretenimiento/12.jpg',
        name : 'Something just like this',
        artist : 'The chainsmoker; Coldplay',
        music : 'mp3/12.mp3'
    },
    {
        img : 'img/entretenimiento/onepilot.jpg',
        name : 'Stressed out',
        artist : 'Twenty One Pilots',
        music : 'mp3/13.mp3'
    },
    {
        img : 'img/entretenimiento/14.jpg',
        name : 'Suicide in Painless',
        artist : 'The Mash',
        music : 'mp3/14.mp3'
    },
    {
        img : 'img/entretenimiento/15.jpg',
        name : 'Sweet creature',
        artist : 'harry Style',
        music : 'mp3/15.mp3'
    },
    {
        img : 'img/entretenimiento/16.jpg',
        name : 'Waiting For Love',
        artist : 'Avicii',
        music : 'mp3/16.mp3'
    },
    {
        img : 'img/entretenimiento/17.jpg',
        name : 'We can work it out',
        artist : 'The Beatles',
        music : 'mp3/17.mp3'
    },
    {
        img : 'img/entretenimiento/18.jpg',
        name : 'Without You',
        artist : 'Avicii; sandro Cavazza',
        music : 'mp3/18.mp3'
    },
    {
        img : 'img/entretenimiento/19.jpg',
        name : 'You´ll See',
        artist : 'Madonna',
        music : 'mp3/19.mp3'
    },
    {
        img : 'img/entretenimiento/20.jpg',
        name : 'You´re My Best Friend',
        artist : 'Queen',
        music : 'mp3/20.mp3'
    },
    {
        img : 'img/entretenimiento/21.jpg',
        name : 'Perfect',
        artist : 'Ed Sheeran',
        music : 'mp3/21.mp3'
    },
    {
        img : 'img/entretenimiento/22.jpg',
        name : 'watermelon Sugar',
        artist : 'harry Styles',
        music : 'mp3/.mp3'
    },
    {
        img : 'img/entretenimiento/23.jpg',
        name : 'Rolling in the Deeep',
        artist : 'Adele',
        music : 'mp3/23.mp3'
    },
    {
        img : 'img/entretenimiento/24.jpg',
        name : 'Leave The Door Open',
        artist : 'Bruno Mars',
        music : 'mp3/24.mp3'
    },

    {
        img : 'img/entretenimiento/25.jpg',
        name : 'My love Mine All Mine',
        artist : 'Mitski',
        music : 'mp3/25.mp3'
    },
    {
        img : 'img/entretenimiento/26.jpg',
        name : 'Everybody Wants To Rule',
        artist : 'Tears For Fears',
        music : 'mp3/26.mp3'
    },
    {
        img : 'img/entretenimiento/27.jpg',
        name : 'I Wanna Be Yours',
        artist : 'Artics Monkeys',
        music : 'mp3/27.mp3'
    },
    {
        img : 'img/entretenimiento/28.jpg',
        name : 'If I Were a Boy',
        artist : 'Beyoncé',
        music : 'mp3/28.mp3'
    },
    {
        img : 'img/entretenimiento/29.jpg',
        name : 'I Was Made For Lovin´ You',
        artist : 'KISS',
        music : 'mp3/29.mp3'
    },
    {
        img : 'img/entretenimiento/30.jpg',
        name : 'Happier',
        artist : 'Marshmellow',
        music : 'mp3/30.mp3'
    }
    
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color() {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let gradientColors = [];

    function populate() {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            color += y;
        }
        return color;
    }

    // Generar una gran cantidad de colores aleatorios
    for (let i = 0; i < 20; i++) {
        gradientColors.push(populate());
    }

    let angle = 'to right';

    // Construir la cadena del gradiente con múltiples colores
    let gradient = 'linear-gradient(' + angle + ',' + gradientColors.join(',') + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
