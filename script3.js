console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Mashup/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Attention 2.0(Sush Yohan x Happy Pills Mashup)", filePath: "songs/Mashup/1.mp3", coverPath: "covers/11.jpg"},
    {songName: "Despacito_The_Megamix_J_Bieber_Rihanna_EdSheeran", filePath: "songs/Mashup/2.mp3", coverPath: "covers/12.jpg"},
    {songName: "Ofenbach ", filePath: "songs/Mashup/3.mp3", coverPath: "covers/13.jpg"},
    {songName: "SHAPE_OF_YOU", filePath: "songs/Mashup/4.mp3", coverPath: "covers/14.jpg"},
    {songName: "Shawn_Mendes_Zedd_Lost_In_Japan_Original_Remix", filePath: "songs/Mashup/5.mp3", coverPath: "covers/15.jpg"},
    {songName: "Snaptube_PITCH_PERFECTION", filePath: "songs/Mashup/6.mp3", coverPath: "covers/16.jpg"},
    {songName: "Snaptube", filePath: "songs/Mashup/7.mp3", coverPath: "covers/17.jpeg"},
    {songName: "SOMMA - I Don_t Wanna Know", filePath: "songs/Mashup/8.mp3", coverPath: "covers/18.jpeg"},
    {songName: "Talking To The Moon X PlayDate", filePath: "songs/Mashup/9.mp3", coverPath: "covers/19.jpg"},
    {songName: "Watermelon_Sugar_X_Seaside_Without_The_Weird_Transitions", filePath: "songs/Mashup/10.mp3", coverPath: "covers/20.jpg"},
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
        audioElement.src = `songs/Mashup/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/Mashup/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/Mashup/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})