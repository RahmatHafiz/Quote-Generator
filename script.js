const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorName = document.querySelector(".name"),
    speechBtn = document.querySelector(".speech"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter"),
    synth = speechSynthesis;
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}
speechBtn.addEventListener("click", () => {
    if (!quoteBtn.classList.contains("loading")) {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(() => {
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});
quoteBtn.addEventListener("click", randomQuote);

var board = document.getElementsByClassName('.container');

function draw() {
    setInterval(createStars, 30);
    setInterval(starFall, 2000);
    var canvas = document.getElementById("nightSky");
    var art = canvas.getContext("2d");
    art.beginPath();
    art.arc(240, 60, 60, 0, Math.PI * 2, true);
    var color = art.createRadialGradient(100, 100, 150, 100, 20, 30);
    color.addColorStop(0, '#cae3ef');
    color.addColorStop(0.5, '#cde1e8');
    color.addColorStop(1, '#7aa4b4');
    art.fillStyle = color;
    art.fill();
    canvas.style.setProperty("-webkit-filter", "drop-shadow(5px 5px 5px white)");
    star.style.animation =
        "twinkle " + "1s linear infinite alternate";
}

function createStars() {
    const createNewStar = document.getElementById('starsSmall');
    const star = document.createElement('div');
    createNewStar.innerHTML = star.outerHTML;
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.backgroundColor = "white";
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.width = Math.floor(Math.random() * 3) + 'px';
    star.style.height = Math.floor(Math.random() * 3) + 'px';
    star.style.position = "absolute";
    star.style.zIndex = "-1";
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 70000)
}

function starFall() {
    const fall = document.getElementById("fallingStar");
    const createFall = document.createElement('div');
    fall.innerHTML = createFall.outerHTML;
    createFall.style.position = "absolute";
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
    var lengthStar = randomNumber(100, 150);
    createFall.style.width = lengthStar + "px";
    createFall.style.height = "2px";
    createFall.style.backgroundImage =
        "linear-gradient(to right, white 40%, transparent)";
    document.body.appendChild(createFall);
    createFall.style.left = Math.random() * window.innerWidth + 'px';
    createFall.style.top = Math.random() * window.innerHeight + 'px';
    createFall.style.zIndex = "-1";
    createFall.style.transform = "rotate(7deg)";
    setTimeout(() => {
        createFall.remove();
    }, 900)
    createFall.style.animation =
        "hide 1s linear infinite alternate";
} 