console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('English/Ariana Grande/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "no tears left to cry (128)", filePath: "English/Ariana Grande/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "7 rings - Ariana Grande", filePath: "English/Ariana Grande/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "34+35 - Ariana Grande", filePath: "English/Ariana Grande/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "break up with your girlfriend, im bored", filePath: "English/Ariana Grande/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Good as Hell - Ariana Grande", filePath: "English/Ariana Grande/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "positions - Ariana Grande", filePath: "English/Ariana Grande/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Rain On Me ", filePath: "English/Ariana Grande/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Side To Side - Ariana Grande", filePath: "English/Ariana Grande/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "thank u, next - Ariana Grande", filePath: "English/Ariana Grande/9.mp3", coverPath: "covers/9.jpg"},
    // {songName: "Sing Me to Sleep - Alan Walker", filePath: "English/Alan walker/10.mp3", coverPath: "covers/10.jpg"},
    // {songName: "Sweet Dreams - Alan Walker", filePath: "English/Alan walker/11.mp3", coverPath: "covers/10.jpg"},
    // {songName: "The Spectre -  Walker", filePath: "English/Alan walker/12.mp3", coverPath: "covers/10.jpg"},
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
        audioElement.src = `English/Ariana Grande/${songIndex+1}.mp3`;
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
    audioElement.src = `English/Ariana Grande/${songIndex+1}.mp3`;
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
    audioElement.src = `English/Ariana Grande/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})