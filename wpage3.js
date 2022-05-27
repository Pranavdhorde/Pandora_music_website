console.log("Welcome to Pandora");

// Initialize the Variables 
let songIndex = 0;
let audioElement = new Audio('Web series/Euphoria/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "B.o.B - DIRT (128)", filePath: "Web series/Euphoria/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "All For Us - Labrint", filePath: "Web series/Euphoria/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Dead of Night - Orville Peck", filePath: "Web series/Euphoria/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Drink Before the War - Sinéad O Connor", filePath: "Web series/Euphoria/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ferrari - TrOyMaN", filePath: "Web series/Euphoria/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Forever - Labrinth", filePath: "Web series/Euphoria/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Formula - Labrinth", filePath: "Web series/Euphoria/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "I ll Be Here in the Morning - Townes Van Zandt", filePath: "Web series/Euphoria/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "My Body Is a Cage - Arcade Fire", filePath: "Web series/Euphoria/9.mp3", coverPath: "covers/8.jpg"},
    {songName: "Still Don t Know My Name - Labrinth", filePath: "Web series/Euphoria/10.mp3", coverPath: "covers/8.jpg"},
    {songName: "trademark usa - Baby Keem", filePath: "Web series/Euphoria/11.mp3", coverPath: "covers/8.jpg"},
    {songName: "Way Over My Head - Love Taps", filePath: "Web series/Euphoria/12.mp3", coverPath: "covers/8.jpg"},
    {songName: "When I R.I.P. - Labrinth", filePath: "Web series/Euphoria/13.mp3", coverPath: "covers/8.jpg"},
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
        audioElement.src = `Web series/Euphoria/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/Euphoria/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/Euphoria/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})