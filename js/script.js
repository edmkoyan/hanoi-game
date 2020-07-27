let wrapperTop = document.querySelector('.wrapper-top');
let cols = document.querySelectorAll('.col');
let scoreText = document.querySelector('.score');
let newButton = document.querySelector('.new-button');
let numberText = document.querySelector('.number')
let plusButton = document.querySelector('.plus-button')
let minusButton = document.querySelector('.minus-button')
console.log(numberText, plusButton, minusButton)

let blocks;
let activeBlock = 0;
let number = 6;

let score = 0;


function restart() {
    blocks = [
        [], [], []
    ];
    score = 0;
    activeBlock = 0;
    numberText.innerHTML = number;

    for (let i = number; i > 0; i--) {
        blocks[0].push(i);
    }

    draw();
}
function draw() {
    wrapperTop.innerHTML = '';
    scoreText.innerHTML = score;

    if (activeBlock !== 0) {
        wrapperTop.innerHTML = '<div class="block block-' + activeBlock + '"></div>';
    }

    for (let i = 0; i < cols.length; i++) {
        cols[i].innerHTML = '';
        for (let j = 0; j < blocks[i].length; j++) {
            cols[i].innerHTML += '<div class="block block-' + blocks[i][j] + '"></div>';
        }
    }
}

for (let i = 0; i < cols.length; i++) {
    cols[i].addEventListener('click', function () {
        if (activeBlock === 0) {
            if (blocks[i].length !== 0) {
                score++;
                activeBlock = blocks[i].pop();
            }

        } else {
            if (blocks[i].length === 0 || blocks[i][blocks[i].length - 1] > activeBlock) {
                blocks[i].push(activeBlock);
                activeBlock = 0;
            }
        }

        draw();
    })
}

restart();

newButton.addEventListener('click', restart);
plusButton.addEventListener('click', function () {
    if (number < 6) {
        number++;
        restart();
    }
})
minusButton.addEventListener('click', function () {
    if (number > 3) {
        number--;
        restart();
    }
})
