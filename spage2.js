console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('soul/Morning ruthenium/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "12 AM in Bali - SMANDEM", filePath: "soul/Morning ruthenium/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Alibi - Jordan Mackampa", filePath: "soul/Morning ruthenium/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Belong To You - Shishani", filePath: "soul/Morning ruthenium/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Better Give U Up - FKJ", filePath: "soul/Morning ruthenium/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Blended Family - Alicia Keys", filePath: "soul/Morning ruthenium/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Eternal Light - Free Nationals", filePath: "soul/Morning ruthenium/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Everything - Gotts Street Park", filePath: "soul/Morning ruthenium/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Grace - Rimon", filePath: "soul/Morning ruthenium/8.mp3", coverPath: "covers/6.jpg"},
    {songName: "Make a Change - Durand Jones   The Indications", filePath: "soul/Morning ruthenium/9.mp3", coverPath: "covers/6.jpg"},
    {songName: "Mixer - Amber Mark", filePath: "soul/Morning ruthenium/10.mp3", coverPath: "covers/6.jpg"},
    {songName: "Moonlove - Shamis", filePath: "soul/Morning ruthenium/11.mp3", coverPath: "covers/6.jpg"},
    {songName: "No Reply - Joshua J", filePath: "soul/Morning ruthenium/12.mp3", coverPath: "covers/6.jpg"},
    {songName: "Say It - Papik", filePath: "soul/Morning ruthenium/13.mp3", coverPath: "covers/6.jpg"},
    {songName: "Smooth Move - Cory Wong", filePath: "soul/Morning ruthenium/14.mp3", coverPath: "covers/6.jpg"},
    {songName: "Take Me Higher - Robin Thicke", filePath: "soul/Morning ruthenium/15.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tomb For Rockets - Feng Suave", filePath: "soul/Morning ruthenium/16.mp3", coverPath: "covers/6.jpg"},
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
        audioElement.src = `soul/Morning ruthenium/${songIndex+1}.mp3`;
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
    audioElement.src = `soul/Morning ruthenium/${songIndex+1}.mp3`;
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
    audioElement.src = `soul/Morning ruthenium/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})