<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Music Syste</title>
</head>
<body>
    <header>
        <div class="menu-side">
            <h1>Playlist</h1>
            <div class="playlist">
                <h4 class="active"><span></span> <i class="bi bi-music-note-beamed"></i> Playlist</h4>
                <h4><span></span> <i class="bi bi-music-note-beamed"></i> Last listening</h4>
                <h4><span></span> <i class="bi bi-music-note-beamed"></i> Recommended Songs</h4>            
            </div>
            <div class="menu_song">
                <li class="songItem">
                    <span>01</span>
                    <img src="image/1.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                    <i id="1"  class="bi playListPlay bi-play-circle-fill"></i>
                </li>
                <li class="songItem">
                    <span>03</span>
                    <img src="image/2.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                    <i id="2"  class="bi playListPlay bi-play-circle-fill"></i>
                </li>
                <li class="songItem">
                    <span>04</span>
                    <img src="image/3.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                    <i id="3"  class="bi playListPlay bi-play-circle-fill"></i>
                </li>
                <li class="songItem">
                    <span>05</span>
                    <img src="image/4.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                    <i id="4"  class="bi playListPlay bi-play-circle-fill"></i>
                </li>
                <li class="songItem">
                    <span>06</span>
                    <img src="image/1.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                    <i id="5"  class="bi playListPlay bi-play-circle-fill"></i>
                </li>
           </div>
        </div>
        <div class="song-side">
            <nav>
                <ul>
                    <li>DISCOVER <span></span></li>
                    <li>MY LIBRARY</li>
                    <li>RADIO</li>
                </ul>
                <div class="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Search Music">
                    <div class="search_results">
                        <!-- <a href="" class="card">
                            <img src="image/1.jpg" alt="">
                            <div class="content">
                                LEGION
                                <div class="subTitle">IT'S ALWAYS BLUE: SONGS FROM LEGION</div>
                            </div>
                        </a> -->
                    </div>
                </div>
                <div class="user">
                    <img src="image/user.png" alt="">
                </div>
            </nav>
            <div class="content">
                <h1>Cold Play</h1>
                <p>If you don't then lie <br>If you don't then lie If you don't then lieIf you don't then lie</p>
                <div class="buttons">
                    <button>PLAY</button>
                    <button>FOLLOW</button>
                </div>
            </div>
            <div class="popular_song">
                <div class="h4">
                    <h4>Populaar Song</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_song_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_song_right"></i>
                    </div>
                </div>
                <div class="pop_song">
                    <li class="songItem">
                    <div class="img_play">
                        <img src="image/1.jpg" alt="">
                        <i id="6"  class="bi playListPlay bi-play-circle-fill"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                </li>
                    <li class="songItem">
                    <div class="img_play">
                        <img src="image/2.jpg" alt="">
                        <i id="7"  class="bi playListPlay bi-play-circle-fill"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                </li>
                    <li class="songItem">
                    <div class="img_play">
                        <img src="image/3.jpg" alt="">
                        <i id="8"  class="bi playListPlay bi-play-circle-fill"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                </li>
                    <li class="songItem">
                    <div class="img_play">
                        <img src="image/4.jpg" alt="">
                        <i id="9"  class="bi playListPlay bi-play-circle-fill"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                </li>
                    <li class="songItem">
                    <div class="img_play">
                        <img src="image/5.jpg" alt="">
                        <i id="10"  class="bi playListPlay bi-play-circle-fill"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                    <li class="songItem">
                    <div class="img_play">
                        <img src="image/5.jpg" alt="">
                        <i id="11"  class="bi playListPlay bi-play-circle-fill"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                    <li class="songItem">
                    <div class="img_play">
                        <img src="image/5.jpg" alt="">
                        <i id="12"  class="bi playListPlay bi-play-circle-fill"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                    <li class="songItem">
                    <div class="img_play">
                        <img src="image/5.jpg" alt="">
                        <i id="13"  class="bi playListPlay bi-play-circle-fill"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subTitle">Alen Walker</div>
                    </h5>
                </div>
            </div>
            <div class="popular_artists">
                    <div class="h4">
                    <h4>Populaar Artists</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_art_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_art_right"></i>
                    </div>
                </div>
                <div class="item Artist_bx">
                    <li>
                        <a href="arijit.html"><img src="image/arijit/artist.jpeg" alt=""></a>
                    </li>
                    <li>
                        <img src="image/atif_aslam/artist.jpeg" alt="">
                    </li>
                    <li>
                        <img src="image/rashid_ali/1.jpeg" alt="">
                    </li>
                    <li>
                        <img src="image/alka_yagnik/artist.jpeg" alt="">
                    </li>
                </div>
            </div>
        </div>


        <div class="master-play">
            <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="image/1.jpg" alt="" id="poster_master_class">
            <h5 id="title">
                True Love 
                <div class="subTitle">ColdPlay</div>
            </h5>
            <div class="icon">
                <i class="bi shuffle bi-music-note-beamed">next</i>
                <i class="bi bi-skip-start-fill" id="back"></i>
                <i class="bi bi-play-fill" id="masterPlay"></i>
                <i class="bi bi-skip-end-fill" id="next"></i>
                <a href=""  download id="download_music"><i class="bi bi-cloud-arrow-down-fill" ></i></a>
            </div>
            <span id="currentStart">0.00</span>
            <div class="bar">
                <input type="range" id="seek" min="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot"></div>
            </div>
            <span id="currentEnd">0.30</span>
            <div class="vol">
               <i class="bi bi-volume-down-fill" id="vol_icon"></i> 
               <input type="range" min="0" max="100" id="vol">
               <div class="vol_bar"></div>
                <div class="dot" id="vol_dot"></div>
            </div>
        </div>   
    </header>
    <script src="app.js"></script>
</body>
</html>