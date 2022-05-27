console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Focus/Coding mode/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Ólafur Arnalds - We Contain Multitudes", filePath: "Focus/Coding mode/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "8 Hours, Still No Rain (Mixed) - Hosini", filePath: "Focus/Coding mode/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Alone in the World - Kupla", filePath: "Focus/Coding mode/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Blur - SamuW", filePath: "Focus/Coding mode/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Coral Reef - Slowheal", filePath: "Focus/Coding mode/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Cotton Spheres - Lama House", filePath: "Focus/Coding mode/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Daisies - Softy", filePath: "Focus/Coding mode/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Day One - Hans Zimmer", filePath: "Focus/Coding mode/8.mp3", coverPath: "covers/6.jpg"},
    {songName: "i wish it would never stop snowing - Sleepy Fish", filePath: "Focus/Coding mode/9.mp3", coverPath: "covers/6.jpg"},
    {songName: "La Luna - Mr. Tape", filePath: "Focus/Coding mode/10.mp3", coverPath: "covers/6.jpg"},
    {songName: "Loungerie - Jorge Milliano", filePath: "Focus/Coding mode/11.mp3", coverPath: "covers/6.jpg"},
    {songName: "Optimistic Nihilism - Epic Mountain", filePath: "Focus/Coding mode/12.mp3", coverPath: "covers/6.jpg"},
    {songName: "S.T.A.Y. - Hans Zimmer", filePath: "Focus/Coding mode/13.mp3", coverPath: "covers/6.jpg"},
    {songName: "Solar Sailer - Daft Punk", filePath: "Focus/Coding mode/14.mp3", coverPath: "covers/6.jpg"},
    {songName: "Take Me Back - Wys", filePath: "Focus/Coding mode/15.mp3", coverPath: "covers/6.jpg"},
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
        audioElement.src = `Focus/Coding mode/${songIndex+1}.mp3`;
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
    audioElement.src = `Focus/Coding mode/${songIndex+1}.mp3`;
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
    audioElement.src = `Focus/Coding mode/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})