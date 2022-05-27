console.log("Welcome to Pandora");

// Initialize the Variables 
let songIndex = 0;
let audioElement = new Audio('Web series/13 reason why/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Lord Huron - The Night We Met", filePath: "Web series/13 reason why/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Selena Gomez - Back To You", filePath: "Web series/13 reason why/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bored - Billie Eilish", filePath: "Web series/13 reason why/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Falling Skies - YUNGBLUD", filePath: "Web series/13 reason why/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "High - Sir Sly", filePath: "Web series/13 reason why/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kill Em With Kindness - Selena Gomez", filePath: "Web series/13 reason why/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "lovely - Billie Eilish", filePath: "Web series/13 reason why/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Only You - Selena Gomez", filePath: "Web series/13 reason why/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Promise Not To Fall - Human Touch", filePath: "Web series/13 reason why/9.mp3", coverPath: "covers/8.jpg"},
    {songName: "Start Again - OneRepublic", filePath: "Web series/13 reason why/10.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tangled Up - Parade of Lights", filePath: "Web series/13 reason why/11.mp3", coverPath: "covers/8.jpg"},
    {songName: "Time - Colouring", filePath: "Web series/13 reason why/12.mp3", coverPath: "covers/8.jpg"},
    {songName: "Your Love - Haerts", filePath: "Web series/13 reason why/13.mp3", coverPath: "covers/8.jpg"},
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
        audioElement.src = `Web series/13 reason why/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/13 reason why/${songIndex+1}.mp3`;
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
    audioElement.src = `Web series/13 reason why/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})