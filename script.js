const photos = [
"images/1.jpeg",
"images/2.jpeg",
"images/3.jpeg",
"images/4.jpeg",
"images/5.jpeg",
"images/6.jpeg"
];

const titles = [
"My Little Charm 🥰",
"My Best Friend 🤝",
"My Happiness 🫶🏻",
"My Supporters 💜",
"My Forever Family 🏡",
"Love You da thambii Kathir😍"
];

const messages = [

"You have always been my little charm.",

"Thank you for always standing beside me.",

"You fill my life with happiness and laughter.",

"I'm lucky to have such an amazing brothers.",

"No distance can ever break our bond.",

"Thank you for every memory, every smile, and every moment. Love you forever ❤️"

];

let index = 0;

function changeSlide(){

    index++;

    if(index == photos.length){
        index = 0;
    }

    document.getElementById("slide").src = photos[index];

    document.getElementById("title").innerHTML = titles[index];

    document.getElementById("text").innerHTML = messages[index];

}


document.getElementById("title").innerHTML = titles[0];

document.getElementById("text").innerHTML = messages[0];

setInterval(changeSlide,4000);
// const music = document.getElementById("music");
// const playBtn = document.getElementById("playBtn");

// playBtn.addEventListener("click", function () {

//     music.play();

//     playBtn.style.display = "none";

// });
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    music.play()
        .then(() => {
            playBtn.innerHTML = "🎶 Playing";
        })
        .catch(err => {
            console.log(err);
            alert("Click the button again to start the music.");
        });
});

