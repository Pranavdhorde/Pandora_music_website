console.log("Welcome to Pandora");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('soul/Midnight hour/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Before You Go - Lewis Capaldi", filePath: "soul/Midnight hour/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cry to Me - Marc Broussard", filePath: "soul/Midnight hour/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Falling - Trevor Daniel", filePath: "soul/Midnight hour/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Game Winner - Joey Dosik", filePath: "soul/Midnight hour/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "I d Rather Go Blind - Leela James", filePath: "soul/Midnight hour/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Miracles - Benny Sings", filePath: "soul/Midnight hour/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "One Last Song - Sam Smith", filePath: "soul/Midnight hour/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Our Love - Gary Clark Jr", filePath: "soul/Midnight hour/8.mp3", coverPath: "covers/6.jpg"},
    {songName: "Stand up for Something (feat. Common) - Andra Day", filePath: "soul/Midnight hour/9.mp3", coverPath: "covers/6.jpg"},
    {songName: "Welcome 2 America - Prince", filePath: "soul/Midnight hour/10.mp3", coverPath: "covers/6.jpg"},
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
        audioElement.src = `soul/Midnight hour/${songIndex+1}.mp3`;
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
    audioElement.src = `soul/Midnight hour/${songIndex+1}.mp3`;
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
    audioElement.src = `soul/Midnight hour/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})