
const words = ['source', 'minds', 'possibilities'];
let index = 0;
const word2Element = document.getElementById('word2');

function scrollWord(word) {
    word2Element.textContent = word;

    // Start: word is below (translateY(100%))
    word2Element.style.transform = 'translateY(-100%)';

    // Animate it up into view (translateY(0))
    setTimeout(() => {
        word2Element.style.transform = 'translateY(0)';
    }, 50);

    // Stay visible for 1 second, then scroll up out of view (translateY(-100%))
    setTimeout(() => {
        word2Element.style.transform = 'translateY(100%)';
    }, 2000);

    // After scrolling out, show next word
    setTimeout(() => {
        index = (index + 1) % words.length;
        scrollWord(words[index]);
    }, 2500);
}

scrollWord('Source')

const cards = document.querySelectorAll('.cardss');
let sec = document.querySelectorAll('.library');
const robot = document.getElementById('robot');

let current = 0;

function updateCards() {
    cards.forEach((card, i) => {
        card.style.zIndex = cards.length - i;
        if (i === current) {
            card.style.transform = "translateX(0) scale(1)";
            card.style.opacity = "1";
        } else if (i < current) {
            card.style.transform = "translateX(-100%) scale(0.9)";
            card.style.opacity = "0";
        } else {
            card.style.transform = `translateY(${(i - current) * 6}vh) scale(0.95)`;
            
            if(window.screen.width < 600){
                card.style.transform = `translateY(${(i - current) * 2}vh) scale(0.95)`;
            }
            
            card.style.opacity = "1";
        }

    });
}

document.getElementById("next").addEventListener("click", () => {
    console.log("next =- ")
    current = (current + 1) % cards.length;

    sec[0].style.display = 'none';
    sec[1].style.display = 'none';
    sec[2].style.display = 'none';
    sec[current].style.display = 'flex';

    if(current==0){
        robot.src="syncro.png";
    }
    else if(current == 1){
        robot.src="Trakr.png";
    }
    else{
        robot.src="elix.png";
    }
    updateCards();
});

document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    sec[0].style.display = 'none';
    sec[1].style.display = 'none';
    sec[2].style.display = 'none';
    sec[current].style.display = 'flex';

    if(current==0){
        robot.src="syncro.png";
    }
    else if(current == 1){
        robot.src="Trakr.png";
    }
    else{
        robot.src="elix.png";
    }
    updateCards();
});

updateCards();


