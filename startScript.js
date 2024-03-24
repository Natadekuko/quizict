const btnImg = document.getElementById('button-image');
const btnInsp = document.getElementById('button-insp');
const btnImp = document.getElementById('button-imp');
const overlayBlack = document.getElementById('cover');
let end = false;
let subtractant = 0;
let aboutToEnd = false
let fallAudio = new Audio("fall.mp3");
let whooshAudio = new Audio("whoosh.mp3");
btnImg.addEventListener('mouseover', (event) => {
    event.target.src = 'beginBtnActive.png';
});

btnImg.addEventListener('mouseout', (event) => {
    event.target.src = 'beginBtn.png';
});

btnImg.addEventListener("click", (event) => {

    whooshAudio.play()


    setTimeout(() => {

        
        setTimeout(() => {
            fallAudio.play()
            slide();
        }, 1000)


        btnInsp.classList.add('fall')

        event.target.src = 'beginBtnActive.png';
        event.target.parentNode.classList.add('clicked');
        setTimeout(() => {
            end = true;
            event.target.parentNode.classList.remove('clicked');
            btnImp.style.right = `300%`;
            btnInsp.style.top = `-200%`;
            btnInsp.classList.remove('fall')
            subtractant = 0;

            setTimeout(() => {
                btnInsp.style.rotate = '0deg';
                btnInsp.style.right = `0%`;
                end = false;
            }, 300);
        }, 4000);

        setTimeout(() => {
            aboutToEnd = true;
        }, 2500);

    }, 100);
});


function slide(adder = 10) {

    btnImp.style.right = `-${300 - subtractant}%`;


    subtractant += adder;

    if (subtractant === 120) {
        adder--

    }
    

    if (subtractant > 212 && subtractant < 222) {

        bumpedInsp()
        console.log("reached")
    }




    if (!(subtractant >= 350)) {
        requestAnimationFrame(function () {
            slide(adder)
        })
        return
    }


}

function bumpedInsp(distance = 0) {

    btnInsp.style.right = distance + '%'
    btnInsp.style.rotate = distance / 2 + 'deg'
    distance += 16

    if (aboutToEnd) {
        aboutToEnd = false;
        transit()
    }
    if (end) { return }
    requestAnimationFrame(function () {
        bumpedInsp(distance)
    })
}

function transit(opac = 0) {

    opac += 0.05;

    overlayBlack.style.opacity = opac

    if (!(opac > 1)) {
        requestAnimationFrame(() => {
            transit(opac)
        })
        return;
    }

    window.location.assign("home.html")
}