const selectionFull = document.getElementById('mainMenu')
const question = document.getElementById('question')
const choices = document.querySelectorAll('#mainMenu button')
const cover = document.getElementById('cover')
let fullChoiceArray =
    ["seongthea.png", 'josephina.png', 'gabriella.png', 'princess.png',

        "jose.png", 'alexis.png', 'ecija.png', 'dysangco.png',

        "researchers.png", 'pearl.png', 'diamond.png', 'discoverers.png',

        'yes.png', 'no.png', 'sometimes.png', 'maamsandie.png',

        'maampam.png', 'maampelayo.png', 'sirjeric.png', 'sircalleja.png',

        'maamsandie2.png', 'maampalafox.png', "maamkashieca.png", "maamviray.png",

        "sirjeric2.png", "sirpogi.png", "sirpogingpogi.png", "sirpinakapogi.png",

        "kwekkwek.png", "tokeneneng.png", "glowinthedarkballs.png", "latolato.png"
    ]
let qNum = document.getElementById('qNum')
let questionCount = 1;
const mistake = new Audio('wrong.mp3')
let victory = new Audio('tada.mp3')
let ansKeyArray = ['josephina.png', 'dysangco.png', 'diamond.png', 'maamsandie.png', 'noanswer', 'noanswer', 'sirjeric2.png', "kwekkwek.png"]

let hov1;
let n1;
let hov2;
let n2;
let hov3;
let n3;
let hov4;
let n4;

let questionArray = [
    'Who is the muse of Diamond?',
    "Who is 8-Diamond's peace officer?",
    'Which of the following is an SPJ section?',
    'Is water compressible?',
    "What is the full name of 8-Diamond's adviser?",
    "Who went to Baguio for ASMEPPS?",
    "Who is 8-Diamond's ICT teacher?",
    'Also known as "Neon Balls"']

eventAdd()
function eventAdd() {
    for (let i = 0; i < choices.length; i++) {
        let choice = choices[i]
        console.log(choice)
        choice.addEventListener("click", () => {
            choice.style.scale = '1'
            timer = timedef;
            countdownDisplay.innerText = timer
            if (choice.classList.contains('right')) {
                victory.play();
                console.log('reached')

                cover.style.pointerEvents = 'all'
                setTimeout(() => {
                    alert('it Looks like yoUr answer Can be or is a valid Key to mY question')


                }, 100)

                setTimeout(() => {
                    cover.style.pointerEvents = 'none'
                }, 2100)
            }
            else {
                mistake.play()
                setTimeout(() => {

                    alert("I Don't think It was the right Or correct answer That we needed")
                }, 100)
            }

            answering()

        })



        choice.addEventListener("mousedown", () => {
            choice.style.scale = '0.9'
        })
        choice.addEventListener("mouseout", function () {
            choice.style.scale = '1'
            let imgx = this.querySelector('img')

            switch (i) {
                case 0:
                    imgx.src = n1;
                    break;
                case 1:
                    imgx.src = n2;
                    break;
                case 2:
                    imgx.src = n3;
                    break;
                case 3:
                    imgx.src = n4;

            }
        })

        choice.addEventListener("mouseover", function () {

            let imgx = this.querySelector('img')
            console.log("REACHED")
            switch (i) {
                case 0:
                    imgx.src = hov1;
                    break;
                case 1:
                    imgx.src = hov2;
                    break;
                case 2:
                    imgx.src = hov3;
                    break;
                case 3:
                    imgx.src = hov4;

            }
        })
    }
}
answering()


function answering() {
    qNum.innerText = questionCount;
    questionCount++
    if (fullChoiceArray.length < 4 || ansKeyArray.length < 1) { return; }
    question.innerHTML = questionArray[0];
    questionArray.shift();
    let choiceSrcArray = fullChoiceArray.splice(0, 4);

    choiceSrcArray.sort(() => Math.random() - 0.5);


    for (let n = 0; n < choices.length; n++) {
        let choice = choices[n]


        choice.classList = '';

        switch (n) {
            case 0:
                n1 = choiceSrcArray[0];
                hov1 = (choiceSrcArray[0].split('.')[0]) + 'hover.png'
                break;
            case 1:
                n2 = choiceSrcArray[0];
                hov2 = (choiceSrcArray[0].split('.')[0]) + 'hover.png'
                break;
            case 2:
                n3 = choiceSrcArray[0];
                hov3 = (choiceSrcArray[0].split('.')[0]) + 'hover.png'

                break;
            case 3:
                n4 = choiceSrcArray[0];
                hov4 = (choiceSrcArray[0].split('.')[0]) + 'hover.png'


        }

        if (choiceSrcArray[0] === ansKeyArray[0]) {
            choice.classList.add('right')
        } else { choice.classList.add('wrong') }
        choice.innerHTML = `<img src="${choiceSrcArray[0]}">`;
        choiceSrcArray.shift();


    }
    ansKeyArray.shift()

}



let audio = document.getElementById('audio');
let musicButton = document.getElementById('musicButton');
let musicIcon = document.getElementById('musicIcon');



function toggleMusic() {


    if (audio.paused) {
        audio.play();
        musicIcon.src = "playIcon.png";
    } else {
        audio.pause();
        musicIcon.src = "pauseIcon.png";
    }
}

const timedef = 30
let timer = timedef;
let countdownDisplay = document.getElementById('countdown')

countingDown()
function countingDown() {
    countdownDisplay.innerText = timer
    timer--
    console.log('counting down')

    if (timer > -1) {
        setTimeout(() => { countingDown() }, 1000)
        return;
    }


    mistake.play()
    setTimeout(() => {
        timer = timedef;
        countdownDisplay.innerText = timer
        alert("Time's up")

    }, 100)

    setTimeout(() => { countingDown() }, 110)
    answering()
}

