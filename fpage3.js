console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Focus/Deep focus/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Elementaries - Feels Like Flying", filePath: "Focus/Deep focus/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Rouge Haven - When You Left ", filePath: "Focus/Deep focus/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "cold start - RRST", filePath: "Focus/Deep focus/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Blur - SamuW", filePath: "Focus/Deep focus/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "For a Moment - Amaranth Cove", filePath: "Focus/Deep focus/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Levare - Andrieu", filePath: "Focus/Deep focus/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Loosen Up - Cake House", filePath: "Focus/Deep focus/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Lupina s Dream - Lama Houser", filePath: "Focus/Deep focus/8.mp3", coverPath: "covers/6.jpg"},
    {songName: "Portico - Gae Terragni", filePath: "Focus/Deep focus/9.mp3", coverPath: "covers/6.jpg"},
    {songName: "Squaric - Martin Gauffin", filePath: "Focus/Deep focus/10.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Loungerie - Jorge Milliano", filePath: "Focus/Coding mode/11.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Optimistic Nihilism - Epic Mountain", filePath: "Focus/Coding mode/12.mp3", coverPath: "covers/6.jpg"},
    // {songName: "S.T.A.Y. - Hans Zimmer", filePath: "Focus/Coding mode/13.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Solar Sailer - Daft Punk", filePath: "Focus/Coding mode/14.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Take Me Back - Wys", filePath: "Focus/Coding mode/15.mp3", coverPath: "covers/6.jpg"},
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
        audioElement.src = `Focus/Deep focus/${songIndex+1}.mp3`;
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
    audioElement.src = `Focus/Deep focus/${songIndex+1}.mp3`;
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
    audioElement.src = `Focus/Deep focus/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})