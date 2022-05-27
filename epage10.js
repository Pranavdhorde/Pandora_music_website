console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('English/Shwan mendes/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Shawn Mendes - If I Can t Have You (128)", filePath: "English/Shwan mendes/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Shawn Mendes - Stitches (128)", filePath: "English/Shwan mendes/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Shawn Mendes - In My Blood (128)", filePath: "English/Shwan mendes/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Shawn Mendes - Treat You Better (128)", filePath: "English/Shwan mendes/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Lost In Japan - Shawn Mendes", filePath: "English/Shwan mendes/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Mercy - Shawn Mendes", filePath: "English/Shwan mendes/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Monster - Shawn Mendes", filePath: "English/Shwan mendes/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Señorita - Shawn Mendes", filePath: "English/Shwan mendes/8.mp3", coverPath: "covers/6.jpg"},
    {songName: "Summer Of Love - Shawn Mendes", filePath: "English/Shwan mendes/9.mp3", coverPath: "covers/6.jpg"},
    {songName: "Wonder - Shawn Mendes", filePath: "English/Shwan mendes/10.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Tulsa Jesus Freak - Lana Del Rey", filePath: "English/Lana Del Rey/11.mp3", coverPath: "covers/6.jpg"},
    // {songName: "White Dress - Lana Del Rey", filePath: "English/Lana Del Rey/12.mp3", coverPath: "covers/6.jpg"},
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
        audioElement.src = `English/Shwan mendes/${songIndex+1}.mp3`;
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
    audioElement.src = `English/Shwan mendes/${songIndex+1}.mp3`;
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
    audioElement.src = `English/Shwan mendes/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})