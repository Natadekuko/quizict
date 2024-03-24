let clickaud = new Audio('click.mp3');


document.body.addEventListener('mousedown', () => {
    clickaud.play()
}, true)