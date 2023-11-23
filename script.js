console.log("welcome")


let index = 0;
let progress;
let audioelement = new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar = document.getElementById('progressBar');
let gif=document.getElementById('gif');
let songitem=document.getElementsByClassName('songitems');
let sname=document.getElementById('flower');

let songs = [
    {songname:"ABCD" , songfilepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"EFGH" , songfilepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"IJKL" , songfilepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"MNOP" , songfilepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"QRST" , songfilepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"UVW" , songfilepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"XYZ" , songfilepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"SZA" , songfilepath:"songs/8.mp3",coverpath:"covers/8.jpg"},

]

const songitemArray = Array.from(songitem);

songitemArray.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});


masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        masterplay.classList.remove('fa-solid-fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        audioelement.play();
        gif.style.opacity=1;
    }
    else{
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-solid-fa-circle-play');
        audioelement.pause();
        gif.style.opacity=0;

    }
})

myprogressbar.addEventListener('timeupdate',()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})


let makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('xix')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-solid-fa-circle-play')
})
}

Array.from(document.getElementsByClassName('xix')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
    sname.innerText=songs[index-1].songname;

        e.target.classList.remove('fa-solid-fa-circle-play');
        e.target.classList.add('fa-pause-circle');

        audioelement.src=`songs/${index}.mp3` ;
        audioelement.currentTime=0;
        audioelement.play();

        masterplay.classList.remove('fa-solid-fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    })
})


document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index=0;
    }
    else{
        index = index-1;
    }
    audioelement.src=`songs/${index}.mp3` ;
    sname.innerText=songs[index-1].songname;

        audioelement.currentTime=0;
        audioelement.play();

        masterplay.classList.remove('fa-solid-fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
})


document.getElementById('next').addEventListener('click',()=>{
    if(index>=8){
        index=0;
    }
    else{
        index = index+1;
    }
    audioelement.src=`songs/${index}.mp3` ;
    sname.innerText=songs[index-1].songname;
        audioelement.currentTime=0;
        audioelement.play();

        masterplay.classList.remove('fa-solid-fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
})