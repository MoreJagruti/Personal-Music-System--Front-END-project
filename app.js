// Load the first song by default
const music = new Audio('songs/1.mp3');
// music.play(); // Uncomment if you want autoplay

// Song data with ID, name (includes subtitle in HTML), and poster
const songs = [
    {
        id: 1,
        songName: `LEGION <br><div class="subTitle">IT'S ALWAYS BLUE: SONGS FROM LEGION</div>`,
        poster: "image/1.jpg"
    },
    {
        id: 2,
        songName: `CARTEL <br><div class="subTitle">WAHPI PRESENTAr</div>`,
        poster: "image/2.jpg"
    },
    {
        id: 3,
        songName: `THEY MAD <br><div class="subTitle">LOWKEY PESCI</div>`,
        poster: "image/3.jpg"
    },
    {
        id: 4,
        songName: `PLUG WALK <br><div class="subTitle">Rich the Kid (Artist), Rich Forever Music (Label)</div>`,
        poster: "image/4.jpg"
    },
    {
        id: 5,
        songName: `SONG TITLE <br><div class="subTitle">ARTIST NAME</div>`,
        poster: "image/5.jpg"
    },
    {
        id: 6,
        songName: `The Safety Dance <br><div class="subTitle">Sleeping At Last</div>`,
        poster: "image/6.jpg"
    },
    {
        id: 7,
        songName: `Back-It Up <br><div class="subTitle">Parental Advisory Explicit Content</div>`,
        poster: "image/7.jpg"
    },
    {
        id: 8,
        songName: `Dry the Rain <br><div class="subTitle">A cover version of Daft Punk's "Get Lucky"</div>`,
        poster: "image/8.jpg"
    },
    {
        id: 9,
        songName: `Orange <br><div class="subTitle">CLAY</div>`,
        poster: "image/9.jpg"
    },
    {
        id: 10,
        songName: `True Love <br><div class="subTitle">If you can't then lie</div>`,
        poster: "image/10.jpg"
    },
    {
        id:11,
        songName:`2c25 Tum Hi Ho (Hindi Song Remix)<br><div class="subTitle"> House Mix - Sudarshan BeatZ</div>`,
        poster: "image/11.jpg"
    },
    {
        id:12,
        songName:`Tum Bin <br><div class="subTitle"> u_hua2uqganf</div>`,
        poster: "image/12.jpg"
    },
    {
        id:13,
        songName:`Om Namaste Astu - Shiv Shloka Song, Anthem Version
            <br><div class="subTitle"> kalsstockmedia</div>`,
        poster: "image/13.jpg"
    }
];


// Set song posters and names dynamically
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let search_results= document.getElementsByClassName('search_results')[0];
songs.forEach((element) => {
    const{id,songName,poster} = element;
    // console.log(id);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#"+id;
    card.innerHTML = 
    `<img src="${poster}" alt="">
     <div class="content">
         ${songName}
         <div class="subTitle">Song ID: ${id}</div>
     </div>`;
     search_results.appendChild(card);                                   
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for(let index= 0;index< items.length; index++){
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent||as.innerHTML;
        if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[index].style.display = "flex";
        
        }else{                     
            items[index].style.display = "none";
        }

        if(input_value === 0){
        
        search_results.style.display = "none";
        }else{
            search_results.style.display = "";
        }
    }
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if(music.paused||music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
        e.classList.remove('bi-pause-circle-fill');
        e.classList.add('bi-play-circle-fill');
    })
}
const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((e) => {
        e.style.background = `rgba(105, 105, 105, 0.0)`;
    })
}



let index = 0;
let poster_master_class = document.getElementById('poster_master_class');
let ownload_music = document.getElementById('ownload_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
    index = el.target.id ;
    music.src = `songs/${index}.mp3`;
    poster_master_class.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `songs/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName }= elss;
        title.innerHTML = songName;
        download_music.document.setAttribute('download', songName);   
    
    })
        
    makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(105, 105, 105, .1)";
     makeAllPlays();
     el.target.classList.add("bi-pause-circle-fill");
     el.target.classList.remove("bi-play-circle-fill");
     wave.classList.add('active1');                                                       
    });    
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementsByClassName('bar2')[0];
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60);
    // console.log(min1);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(sec1);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr % 60);       
    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;          
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    } 
    else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill', 'bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    } 
    else if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-mute-fill', 'bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width =`${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');                              
back.addEventListener('click',() =>{
    index -=1;  
    if(index < 1){
        index = songs.length;   
    }
    music.src = `songs/${index}.mp3`;
    poster_master_class.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName }= elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(105, 105, 105, .1)";
     makeAllPlays();
     el.target.classList.add("bi-pause-circle-fill");
     el.target.classList.remove("bi-play-circle-fill");
     wave.classList.add('active1');                                                       
    }); 

next.addEventListener('click',() =>{        
    index += 1;  
    if(index > songs.length){
        index = 1;   
    }
    music.src = `songs/${index}.mp3`;
    poster_master_class.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName }= elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(105, 105, 105, .1)";
     makeAllPlays();
     el.target.classList.add("bi-pause-circle-fill");
     el.target.classList.remove("bi-play-circle-fill");
     wave.classList.add('active1');                                                       
}  
);
                                  





















// Scroll buttons for popular songs section
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

// Scroll buttons for artist section
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName("Artist_bx")[0];

pop_art_right.addEventListener('click', () => {
    Artist_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artist_bx.scrollLeft -= 330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a= shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add("bi-arrow-repeat");  
            shuffle.classList.remove("bi-music-note-beamed");  
            shuffle.classList.remove("bi-shuffle");  
            shuffle.innerHTML = "repeat";
            break;
        case "repeat":
            shuffle.classList.add("bi-shuffle");
            shuffle.classList.remove("bi-music-note-beamed");  
            shuffle.classList.remove("bi-arrow-repeat");
            shuffle.innerHTML = "random";
            break;
        
        case "random":
            shuffle.classList.remove("bi-shuffle");
            shuffle.classList.remove("bi-arrow-repeat");
            shuffle.classList.add("bi-music-note-beamed");
            shuffle.innerHTML = "next";
            break;
        default:
            shuffle.classList.add("bi-arrow-repeat");
    }
        

    });


const next_music= () =>{

    if(index > songs.length){   
        index = 1;   
    }
    else{
        index += 1;
    }
    music.src = `songs/${index}.mp3`;
    poster_master_class.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `songs/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName }= elss;
        title.innerHTML = songName;
        download_music.document.setAttribute('download', songName);   
    
    })
        
    makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(105, 105, 105, .1)";
     makeAllPlays();
     el.target.classList.add("bi-pause-circle-fill");
     el.target.classList.remove("bi-play-circle-fill");
     wave.classList.add('active1'); 
}

const repeat_music = () => {
    music.currentTime = 0;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `songs/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName }= elss;
        title.innerHTML = songName;
        download_music.document.setAttribute('download', songName);   
    
    })
        
    makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(105, 105, 105, .1)";
     makeAllPlays();
     el.target.classList.add("bi-pause-circle-fill");
     el.target.classList.remove("bi-play-circle-fill");
     wave.classList.add('active1'); 
}

const random_music = () => {
    if(index > songs.length){   
    index = 1;   
    }
    else{
    index = Math.floor(Math.random() * songs.length) + 1;

    }
    music.src = `songs/${index}.mp3`;
    poster_master_class.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `songs/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName }= elss;
        title.innerHTML = songName;
        download_music.document.setAttribute('download', songName);   
    
    })
        
    makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(105, 105, 105, .1)";
     makeAllPlays();
     el.target.classList.add("bi-pause-circle-fill");
     el.target.classList.remove("bi-play-circle-fill");
     wave.classList.add('active1'); 
}


music.addEventListener('ended',()=>{
    let a = shuffle.innerHTML;
    if(a === "next"){
        next_music();
    }else if(a === "repeat"){
        repeat_music();
    }else if(a === "random"){
        random_music();
    }
});

