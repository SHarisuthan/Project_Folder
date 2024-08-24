
const playlist = [
    
    
{

    name:"Leo",
    singer:"Aniruth",
    music:"Aniruth",
    song:"Leo.mp3",
    img : "Leo.jpg"

},

{

    name:"Ennai Arinthal",
    singer:"Harris Jayaraj",
    music:"Harris Jayaraj",
    song:"Ennai Arinthal.mp3",
    img : "Ennai_Arinthal.jpg"


},

{

    name:"Rayyan",
    singer:"Ar.rahuman",
    music:"Ar.rahuman",
    song:"Rayyan.mp3",
    img : "Rayyan.jpg"


},

{

    name:"Soorarai Potru",
    singer:"Gv Prakash",
    music:"Gv Prakash",
    song:"Soorarai potru.mp3",
    img:"Soorarai_potru.jpg"

},



]

let play_or_not = false
let currentAudio = null
let currentIndex = 0



var icon = document.querySelector(".fa-solid.fa-play")
var music_background = document.querySelector(".music-player")
var music_player = document.querySelector(".song_name h3")
var movie = document.querySelector(".movie h3")
var singer = document.querySelector(".movie p")


function updateui(){
        
        const playsong = playlist[currentIndex]
        music_background.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) , url(${playsong.img})`
        music_player.textContent = playsong.music
        movie.textContent = playsong.name
        singer.textContent = "Singer - " + playsong.singer 

}


function play(){


    const playsong = playlist[currentIndex]


    if (currentAudio) {
        if (currentAudio.paused) 
        {
            currentAudio.play();
            if(icon){

            icon.classList.remove("fa-play")
            icon.classList.add("fa-pause")

            }

            }


        
        
        else
        {
            currentAudio.pause();
            icon.classList.remove("fa-pause")
            icon.classList.add("fa-play")
        }
    }
    
    else {
        
       
        updateui()
        currentAudio = new Audio(playsong.song);
        currentAudio.play();

    }




}


function next_song(){

    updateui()

    currentIndex = currentIndex + 1
    currentAudio.pause()
    currentAudio = null


    if(currentIndex === playlist.length){
    
     
     currentIndex = 0
     play()

    }

    else{

        play()
    }


}



function previous_song(){

    
    
    if(currentAudio){

        currentAudio.pause()
        currentAudio = null
        

    }


    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;


    play()


}