console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('English/Doja Cat/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "1. Doja Cat - Candy (128)", filePath: "English/Doja Cat/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "1. Doja Cat - Freak (128)", filePath: "English/Doja Cat/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ain t Shit - Doja Cat", filePath: "English/Doja Cat/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Boss Bitch - Doja Cat", filePath: "English/Doja Cat/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Dick (feat. Doja Cat) - StarBoi3", filePath: "English/Doja Cat/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Get Into It (Yuh) - Doja Cat", filePath: "English/Doja Cat/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Kiss Me More (feat. SZA) - Doja Cat", filePath: "English/Doja Cat/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Need To Know - Doja Cat", filePath: "English/Doja Cat/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Say So - Doja Cat", filePath: "English/Doja Cat/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Streets - Doja Cat", filePath: "EnglisDoja Cat/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Woman - Doja Cat", filePath: "EnglisDoja Cat/11.mp3", coverPath: "covers/10.jpg"},
    {songName: "You Right - Doja Cat", filePath: "EnglisDoja Cat/12.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `English/Doja Cat/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `English/Doja Cat/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `English/Doja Cat/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})