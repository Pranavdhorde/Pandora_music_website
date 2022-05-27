console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Viral reels/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Jaymes Young - Infinity (128)", filePath: "Viral reels/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Demi Lovato - Cool for the Summer (128)", filePath: "Viral reels/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "abcdefu - GAYLE", filePath: "Viral reels/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Cravin  - Stileto", filePath: "Viral reels/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Dandelions (slowed + reverb) - Ruth B", filePath: "Viral reels/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Enemy - Imagine D", filePath: "Viral reels/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Go Down Deh (feat. Shaggy and Sean Paul) - Spice", filePath: "Viral reels/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Harleys In Hawaii - Katy Perry", filePath: "Viral reels/8.mp3", coverPath: "covers/6.jpg"},
    {songName: "Heat Waves - Glass Animals", filePath: "Viral reels/9.mp3", coverPath: "covers/6.jpg"},
    {songName: "Hold Me While You Wait - Lewis Capaldi", filePath: "Viral reels/10.mp3", coverPath: "covers/6.jpg"},
    {songName: "love nwantiti (ah ah ah) - CKay", filePath: "Viral reels/11.mp3", coverPath: "covers/6.jpg"},
    {songName: "Meet Me At Our Spot - THE ANXIETY", filePath: "Viral reels/12.mp3", coverPath: "covers/6.jpg"},
    {songName: "Mek It Bunx Up (feat. Marcy Chin) - DeeWunn", filePath: "Viral reels/13.mp3", coverPath: "covers/6.jpg"},
    {songName: "Slow Motion - AMARIA BB", filePath: "Viral reels/14.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tigini - Kikimoteleba", filePath: "Viral reels/15.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Tomb For Rockets - Feng Suave", filePath: "soul/Morning ruthenium/16.mp3", coverPath: "covers/6.jpg"},
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
        audioElement.src = `Viral reels/${songIndex+1}.mp3`;
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
    audioElement.src = `Viral reels/${songIndex+1}.mp3`;
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
    audioElement.src = `Viral reels/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})