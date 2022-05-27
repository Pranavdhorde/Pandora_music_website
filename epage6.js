console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('English/Harry Styles/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Adore You - Harry Styles", filePath: "English/Harry Styles/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Falling - Harry Styles", filePath: "English/Harry Styles/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Fine Line - Harry Styles", filePath: "English/Harry Styles/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kiwi - Harry Styles", filePath: "English/Harry Styles/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Lights Up - Harry Styles", filePath: "English/Harry Styles/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "She - Harry Styles", filePath: "English/Harry Styles/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sunflower, Vol. 6 - Harry Styles", filePath: "English/Harry Styles/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sweet Creature - Harry Styles", filePath: "English/Harry Styles/8.mp3", coverPath: "covers/6.jpg"},
    {songName: "To Be So Lonely - Harry Styles", filePath: "English/Harry Styles/9.mp3", coverPath: "covers/6.jpg"},
    {songName: "Watermelon Sugar - Harry Styles", filePath: "English/Harry Styles/10.mp3", coverPath: "covers/6.jpg"},
    {songName: "Woman - Harry Styles", filePath: "English/Harry Styles/11.mp3", coverPath: "covers/6.jpg"},
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
        audioElement.src = `English/Harry Styles/${songIndex+1}.mp3`;
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
    audioElement.src = `English/Harry Styles/${songIndex+1}.mp3`;
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
    audioElement.src = `English/Harry Styles/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})