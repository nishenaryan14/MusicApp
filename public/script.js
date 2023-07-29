console.log("welcome to spotify")

//initialize the variables

let songIndex = 0;
let audioElement = new Audio('sound/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let timeStamp = Array.from(document.getElementsByClassName('timeStamp'));
let songImg = document.getElementById("songImg");


let songs = [
    {songName: "Saayiaan", filePath: "sound/1.mp3" , coverPath: "covers/1.jpeg"},
    {songName: "Tere Vaaste", filePath: "sound/2.mp3" , coverPath: "covers/2.jpeg"},
    {songName: "Tumhe Kitna Pyaar Karte", filePath: "sound/3.mp3" , coverPath: "covers/3.jpeg"},
    {songName: "Dil Galti Kar Baitha Hai", filePath: "sound/4.mp3" , coverPath: "covers/4.jpeg"},
    {songName: "Pyaar Hota Kayi Baar", filePath: "sound/5.mp3" , coverPath: "covers/5.jpeg"},
    {songName: "Bairiya", filePath: "sound/6.mp3" , coverPath: "covers/6.jpeg"},
    {songName: "Bairiya", filePath: "sound/7.mp3" , coverPath: "covers/7.jpeg"},
    {songName: "Bairiya", filePath: "sound/8.mp3" , coverPath: "covers/8.jpeg"},
    {songName: "Bairiya", filePath: "sound/9.mp3" , coverPath: "covers/9.jpeg"},
    {songName: "Bairiya", filePath: "sound/10.mp3" , coverPath: "covers/10.jpeg"},
    {songName: "Bairiya", filePath: "sound/11.mp3" , coverPath: "covers/11.jpeg"},
    {songName: "Bairiya", filePath: "sound/12.mp3" , coverPath: "covers/12.jpeg"},
    

]

songItem.forEach((element, i)=> {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;

});

Banner(songIndex);

// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        songImg.classList.add('rotate');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        songImg.classList.remove('rotate');
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myProgressBar.value = progress; //setting progress
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})

// timeStamp.forEach((element)=>{
//     element.innerText = parseInt(audioElement.duration);
// })

songItem.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        // makeAllPlays();
        songIndex = parseInt(e.target.id);
        // e.target.classList.remove('fa-circle-play');
        // e.target.classList.add('fa-circle-pause');
        audioElement.src = ('sound/'+(songIndex+1)+'.mp3');
        Banner(songIndex);
        audioElement.currentTime = 0;
        audioElement.play();
        songImg.classList.remove('rotate');
        songImg.classList.add('rotate');
        gif.style.opacity = 1;
        mastersongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
// if(songIndex==0){
//     songImg.src = songs[0].coverPath;
// }
// else if(songIndex==1)
//     songImg.src = songs[1].coverPath;
// else if(songIndex==2)
//     songImg.src = songs[2].coverPath;
// else if(songIndex==3)
//     songImg.src = songs[3].coverPath;
// else if(songIndex==4)
//     songImg.src = songs[4].coverPath;
// else 
//     songImg.src = songs[5].coverPath;

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    Banner(songIndex);

    audioElement.src = ('sound/'+(songIndex+1)+'.mp3');
    audioElement.currentTime = 0;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.play();
    // makeAllPlays();
    songImg.classList.remove('rotate');
    songImg.classList.add('rotate');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    Banner(songIndex);

    audioElement.src = ('sound/'+(songIndex+1)+'.mp3');
    audioElement.currentTime = 0;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.play();
    // makeAllPlays();
    songImg.classList.remove('rotate');
    songImg.classList.add('rotate');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

    
    

function Banner(i){
    for(let j=0;j<6;j++){
        if(i==j){
            songImg.src = songs[j].coverPath;
            break;
        }
    }
}