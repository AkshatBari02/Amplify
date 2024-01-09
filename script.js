console.log("check Amplify");
import songsData from "./songsData.js";

let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let myProgressTime = document.getElementById('myProgressTime');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

audioElement.addEventListener('ended', () => {
    if (songIndex >= 49) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    // Update the play icon of the corresponding songItemPlayIcon for the new song
    const newPlayingIcon = document.getElementById(songsData[songIndex].id);
    newPlayingIcon.classList.remove('fa-circle-play');
    newPlayingIcon.classList.add('fa-circle-pause');

    // Load and play the next song
    const nextSongName = songsData[songIndex].songName;
    audioElement.src = `songs/${nextSongName}.mp3`;
    masterSongName.innerText = nextSongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    gif.style.opacity = 0;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        const songName = songsData[songIndex].songName;
        audioElement.src = `songs/${songName}.mp3`;
        masterSongName.innerText = songName;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
         gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    let mins = Math.floor(audioElement.currentTime / 60);
    let secs = Math.floor(audioElement.currentTime % 60);
    mins = (mins < 10) ? '0' + mins : mins;
    secs = (secs < 10) ? '0' + secs : secs;
    myProgressTime.innerHTML = mins + ':' + secs;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
});



const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemcontainer')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id.replace('songItemContainer', ''));
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        const songName = songsData[songIndex].songName;
        audioElement.src=`songs/${songName}.mp3`;
        masterSongName.innerText=songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});

document.getElementById('next').addEventListener('click', () => {
    const currentlyPlayingIcon = document.getElementById(songsData[songIndex].id);
    currentlyPlayingIcon.classList.remove('fa-circle-pause');
    currentlyPlayingIcon.classList.add('fa-circle-play');
    // Increment songIndex for the next song
    if (songIndex >= 49) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    // Update the play icon of the corresponding songItemPlayIcon for the new song
    const newPlayingIcon = document.getElementById(songsData[songIndex].id);
    newPlayingIcon.classList.remove('fa-circle-play');
    newPlayingIcon.classList.add('fa-circle-pause');
    const songName = songsData[songIndex].songName;
    audioElement.src = `songs/${songName}.mp3`;
    masterSongName.innerText = songName;
    audioElement.currentTime = 0;
    audioElement.play();
});


document.getElementById('previous').addEventListener('click', () => {
    const currentlyPlayingIcon = document.getElementById(songsData[songIndex].id);
    currentlyPlayingIcon.classList.remove('fa-circle-pause');
    currentlyPlayingIcon.classList.add('fa-circle-play');
    // Increment songIndex for the next song
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    // Update the play icon of the corresponding songItemPlayIcon for the new song
    const newPlayingIcon = document.getElementById(songsData[songIndex].id);
    newPlayingIcon.classList.remove('fa-circle-play');
    newPlayingIcon.classList.add('fa-circle-pause');
    const songName = songsData[songIndex].songName;
    audioElement.src = `songs/${songName}.mp3`;
    masterSongName.innerText = songName;
    audioElement.currentTime = 0;
    audioElement.play();
});
