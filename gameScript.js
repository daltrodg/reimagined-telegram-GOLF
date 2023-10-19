$(function() {
  

    const games = [
      {
        title: "Spiderman Game",
        link: "https://sladeberryman.github.io/charlie-376/", 
        author: "Slade Berryman"
      },
      {
        title: "Skyrim Game",
        link: "https://armac7.github.io/Delta-Lab/", 
        author: "William McDonald"
      },
      {
        title: "Daggerfall Game ",
        link: "https://v-sec0.github.io/delta-daggerfall-lab/",
        author: "Levon Watkins"
        },
        {
      title: "Pig Latin Game",
      link: "https://beth-ann-tucker.github.io/silver-octo-meme-delta-lab/",
      author: "Elizabeth Tucker"
      },
    {
      title: "Sunglasses Doge Game",
      link: "https://johnnycaringi.github.io/Charlie-Caringi/",
      author: "Johnny Caringi"
      },
      {
        title: "Spirit Animal",
        link: "https://rastifer.github.io/animated-octo-dollop-delta-jrast/",
        author: "Jacob Rast"
        },
        {
          title: "Cool Name Facts",
          link: "https://cnorwood10.github.io/special-bassoon-delta-376/",
          author: "Colby Norwood"
          },
      {
          title: "Fun Name Facts",
          link: "https://jparker13.github.io/silver-computing-machine-DELTA/",
          author: "Janna Parker"
          },
      {
          title: "Doge on the Moon",
          link: "https://kaitlinrenfroe.github.io/renfroe-charlie-lab/",
          author: "Kaitlin Renfroe"
          },
      {
          title: "Coolest Name Facts",
          link: "https://ellarohling.github.io/legendary-winner-delta/",
          author: "Ella Rohling"
          },
      {
          title: "Will Smith Smack Game",
          link: "https://bjacks01.github.io/Brando-Charlie-Lab/",
          author: "Brandon Jacks"
          },
      {
          title: "Doge Game",
          link: "https://lucashasting.github.io/Doge-Game/",
          author: "Lucas Hasting"
          },
      {
          title: "Dragging Doge Game",
          link: "https://rachelhoneycutt.github.io/ubiquitous-octo-sniffle-charlie/",
          author: "Seungyeon Chang"
          },
      {
          title: "Fun Name Facts",
          link: "https://rachelhoneycutt.github.io/curly-computing-machine-DELTA/",
          author: "Rachel Honeycutt"
          },
      {
          title: "Cool Name Game",
          link: "https://panhead63.github.io/friendly-octo-guide-delta/",
          author: "Rachel Thompson"
          },
      {
          title: "Binary Name Game",
          link: "https://raidengreene.github.io/namefactsdeltafall2023/",
          author: "Raiden Greene"
          },
      {
          title: "Doge Gym Bro Game",
          link: "https://daltrodg.github.io/special-guide-charlie/",
          author: "Dalton Rodgers"
          },
      {
          title: "Name Facts Game",
          link: "https://loganbeckman21.github.io/urban-invention-delta/",
          author: "Logan Beckman"
          },
      {
          title: "Flying Pigs Game",
          link: "https://tyrepickett.github.io/Charlie-flying-pigs/",
          author: "Tyre Pickett"
          },
    ];
// iterate over the JSON array
$.each(games, function (index, item) {
    console.log("Game Title: " + item.title);
    console.log("Game URL: " + item.link);
    console.log("Game Author: " + item.author);
  
    // create a brand new HTML element JUST with code
  
  var el = `<div class='card text-center bg-warning card-item' style="width: 200px"> \
    <a href="${ item.link}" target="_blank" class="cardOpen2 btn btn-outline-info"> ${ item.title} </a>
     <div class='cardHide'> \
         <br> \
         <p class="text-info">Create by: ${ item.author } </p> \
         <br> \
         <button class='btn btn-outline-info cardClose2'>Close</button> \
     </div>
   </div>`; 
  
   console.log(el); 
  
  
  $('#card-list').append(el);
  
  $('.nav-dropdown').append($(`<li><a href=" ${item.link} " target ="_blank"> ${item.author} </a></li>`));
  
  });
  
  
  });