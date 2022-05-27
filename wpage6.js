console.log("Welcome to Pandora");

// Initialize the Variables 
let songIndex = 0;
let audioElement = new Audio('Web series/Moon knight/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "A Man Without Love - Engelbert Humperdinck", filePath: "Web series/Moon knight/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bad For Me - Allocai", filePath: "Web series/Moon knight/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Enta - Dj Kaboo", filePath: "Web series/Moon knight/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Salka - Hassan Shakosh", filePath: "Web series/Moon knight/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Hippopotamus Song", filePath: "Web series/Moon knight/5.mp3", coverPath: "covers/5.jpg"},
    // {songName: "Milne Ka Bahaana - Imaad Shah", filePath: "Web series/Moon knight/6.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Sun Toh - Ritviz", filePath: "Web series/Moon knight/7.mp3", coverPath: "covers/7.jpg"},
    // {songName: "Tabdeeli - Nikita Gandhi", filePath: "Web series/Moon knight/8.mp3", coverPath: "covers/8.jpg"},
    // {songName: "Sinnerman (feat. Tom Ellis) - Lucifer Cast", filePath: "Web series/Moon knight/9.mp3", coverPath: "covers/8.jpg"},
    // {songName: "Someone to Watch Over Me ", filePath: "Web series/Moon knight/10.mp3", coverPath: "covers/8.jpg"},
    // {songName: "You re the One - The Vogues", filePath: "Web series/Moon knight/11.mp3", coverPath: "covers/8.jpg"},
    // {songName: "Way Over My Head - Love Taps", filePath: "Web series/Moon knight/12.mp3", coverPath: "covers/8.jpg"},
    // {songName: "When I R.I.P. - Labrinth", filePath: "Web series/Moon knight/13.mp3", coverPath: "covers/8.jpg"},
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
        audioElement.src = `Web series/Moon knight/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/Moon knight/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/Moon knight/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})