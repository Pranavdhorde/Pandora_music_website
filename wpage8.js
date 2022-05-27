console.log("Welcome to Pandora");

// Initialize the Variables 
let songIndex = 0;
let audioElement = new Audio('Web series/Witcher/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Toss A Coin To Your Witcher", filePath: "Web series/Witcher/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Blaviken Inn", filePath: "Web series/Witcher/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Everytime You Leave", filePath: "Web series/Witcher/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Geralt of Rivia", filePath: "Web series/Witcher/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Happy Childhoods Make For Dull Company", filePath: "Web series/Witcher/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Her Sweet Kiss", filePath: "Web series/Witcher/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Late Wee Pups Don t Get to Bark", filePath: "Web series/Witcher/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ragamuffin", filePath: "Web series/Witcher/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "The Fishmonger s Daughter", filePath: "Web series/Witcher/9.mp3", coverPath: "covers/8.jpg"},
    {songName: "The Great Cleansing", filePath: "Web series/Witcher/10.mp3", coverPath: "covers/8.jpg"},
    {songName: "The Last Rose of Cintra", filePath: "Web series/Witcher/11.mp3", coverPath: "covers/8.jpg"},
    {songName: "The Law of Surprise", filePath: "Web series/Witcher/12.mp3", coverPath: "covers/8.jpg"},
    {songName: "The Song of the White Wolf", filePath: "Web series/Witcher/13.mp3", coverPath: "covers/5.jpg"},
    {songName: "The Time of Axe and Sword Is Now", filePath: "Web series/Witcher/14.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tomorrow I ll Leave Blaviken For Good", filePath: "Web series/Witcher/15.mp3", coverPath: "covers/3.jpg"},
    {songName: "Yennefer of Vengerberg", filePath: "Web series/Witcher/16.mp3", coverPath: "covers/7.jpg"},
    {songName: "You ll Have to Fight It Until Dawn", filePath: "Web series/Witcher/17.mp3", coverPath: "covers/8.jpg"},
    {songName: "You Will Rule This Land Someday", filePath: "Web series/Witcher/18.mp3", coverPath: "covers/1.jpg"},
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
        audioElement.src = `Web series/Witcher/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/Witcher/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/Witcher/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})