console.log("check Amplify")

//     Initialize the variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName')

let songs =[
    {id:"0",songName:"295" ,filePath:"songs/295.mp3", coverPath:"covers/295-cover.jpg",timestamp:"4:30"},
    {songName:"Bilionera" ,filePath:"songs/Bilionera.mp3", coverPath:"covers/billionera-cover.jpg",timestamp:"3:05"},
    {songName:"Chaleya" ,filePath:"songs/Chaleya.mp3", coverPath:"covers/chaleya-cover.jpg",timestamp:"3:20"},
    {songName:"Cheap-Thrills" ,filePath:"songs/Cheap-Thrills.mp3", coverPath:"covers/cheap thrills-cover.jpg",timestamp:"3:31"},
    {songName:"Check-It-Out" ,filePath:"songs/Check-It-Out.mp3", coverPath:"covers/check it out-cover.jpg",timestamp:"3:15"},
    {songName:"Cheques" ,filePath:"songs/Cheques.mp3", coverPath:"covers/cheques-cover.jpg",timestamp:"3:03"},
    {songName:"Daku" ,filePath:"songs/Daku.mp3", coverPath:"covers/daku-cover.jpg",timestamp:"2:11"},
    {songName:"Dilawara" ,filePath:"songs/Dilawara.mp3", coverPath:"covers/dilawara-cover.jpg",timestamp:"3:42"},
    {songName:"Gasolina" ,filePath:"songs/Gasolina.mp3", coverPath:"covers/gasolina-cover.jpg",timestamp:"3:12"},
    {songName:"Jai Hind Ki Senaa" ,filePath:"songs/Jai Hind Ki Senaa.mp3", coverPath:"covers/jai hind ki sena-cover.jpg",timestamp:"2:31"},
    {songName:"Janiye" ,filePath:"songs/Janiye.mp3", coverPath:"covers/janiye-cover.jpg",timestamp:"3:43"},
    {songName:"Kahani Suno" ,filePath:"songs/Kahani Suno.mp3", coverPath:"covers/kahani suno-cover.jpg",timestamp:"2:53"},
    {songName:"Mi Amor" ,filePath:"songs/Mi-Amor.mp3", coverPath:"covers/mi amor-cover.jpg",timestamp:"3:23"},
    {songName:"Moon Rise" ,filePath:"songs/Moon Rise.mp3", coverPath:"covers/moon rise-cover.jpg",timestamp:"2:54"},
    {songName:"Obsessed" ,filePath:"songs/Obsessed.mp3", coverPath:"covers/obsessed-cover.jpg",timestamp:"3:10"},
    {songName:"OG" ,filePath:"songs/OG.mp3", coverPath:"covers/og-cover.jpg",timestamp:"3:17"},
    {songName:"One Love" ,filePath:"songs/One Love.mp3", coverPath:"covers/one love-cover.jpg",timestamp:"2:39"},
    {songName:"Rao Sahab Drill" ,filePath:"songs/Rao Sahab Drill.mp3", coverPath:"covers/rao sahab drill-cover.jpg",timestamp:"3:31"},
    {songName:"Shoorveer-Shivaji" ,filePath:"songs/Shoorveer-Shivaji.mp3", coverPath:"covers/shoorveer shivaji-cover.jpeg",timestamp:"3:33"},
    {songName:"Still Rollin" ,filePath:"songs/Still Rollin.mp3", coverPath:"covers/still rollin-cover.jpg",timestamp:"2:54"},
    {songName:"White Brown Black" ,filePath:"songs/White Brown Black.mp3", coverPath:"covers/white brown black-cover.jpg",timestamp:"2:56"},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;  
    element.getElementsByClassName("timestamp")[0].innerText=songs[i].timestamp;
});

// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        const songName = songs[songIndex].songName;
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
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        const songName = songs[songIndex].songName;
        audioElement.src=`songs/${songName}.mp3`;
        masterSongName.innerText=songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=20){
        songIndex = 0
    }
    else {
        songIndex+=1;
    }
    const songName = songs[songIndex].songName;
    audioElement.src=`songs/${songName}.mp3`;
    masterSongName.innerText=songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else {
        songIndex-=1;
    }
    const songName = songs[songIndex].songName;
    audioElement.src=`songs/${songName}.mp3`;
    masterSongName.innerText=songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})