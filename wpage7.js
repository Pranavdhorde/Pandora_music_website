console.log("Welcome to Pandora");

// Initialize the Variables 
let songIndex = 0;
let audioElement = new Audio('Web series/Stringer things/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "All My Heroes (Radio Edit) - Naeleck", filePath: "Web series/Stringer things/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Never Ending Story - Gaten Matarazzo", filePath: "Web series/Stringer things/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Baba O Riley (ConfidentialMX Remix) - The Who", filePath: "Web series/Stringer things/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Eleven - Kyle Dixon   Michael Stein", filePath: "Web series/Stringer things/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Eulogy - Kyle Dixon   Michael Stein: ", filePath: "Web series/Stringer things/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Find the Source - Kyle Dixon   Michael Stein", filePath: "Web series/Stringer things/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Heroes - Peter Gabriel", filePath: "Web series/Stringer things/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Kids - Kyle Dixon   Michael Stein", filePath: "Web series/Stringer things/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Pacific Coast Highway", filePath: "Web series/Stringer things/9.mp3", coverPath: "covers/8.jpg"},
    {songName: "Stranger Things - Kyle Dixon   Michael Stein", filePath: "Web series/Stringer things/10.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sunglasses at Night - Corey Hart", filePath: "Web series/Stringer things/11.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tennis Ball - Hello Peril", filePath: "Web series/Stringer things/12.mp3", coverPath: "covers/8.jpg"},
    {songName: "The First I love You - Kyle Dixon   Michael Stein", filePath: "Web series/Stringer things/13.mp3", coverPath: "covers/8.jpg"},
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
        audioElement.src = `Web series/Stringer things/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/Stringer things/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/Stringer things/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})