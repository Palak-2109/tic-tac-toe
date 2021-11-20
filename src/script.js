console.log('HELLO POLO');
let turn_sound = new Audio('ting.mp3');
let won_sound = new Audio('happykids.mp3');
let turn = 'X';
let gameover = false;

function abcd() {
  console.log('HELLO');
}

const changeTurn = () => {
  if (turn === 'X') return 'O';
  else return 'X';
};

function isDraw(){
  let boxtes = document.getElementsByClassName('inputtext');
  if(boxtes[0].innerText!='' && boxtes[1].innerText!='' && boxtes[2].innerText!='' && boxtes[3].innerText!='' && boxtes[4].innerText!='' && boxtes[5].innerText!='' && boxtes[6].innerText!='' && boxtes[7].innerText!='' && boxtes[8].innerText!=''){
  return true;}
  else
  return false;
}

const checkWin = () => {
  let boxtext = document.getElementsByClassName('inputtext');
  let winCases = [
    [0, 1, 2, 0, -6.5, 0, 22.5], //three posn , x translate,y translate,rotate,width
    [3, 4, 5, 0, 0, 0, 22.5],
    [6, 7, 8, 0, 6.5, 0, 22.5],
    [0, 3, 6, -9, 0, 90, 16.5],
    [1, 4, 7, 0, 0, 90, 16.5],
    [2, 5, 8, 9, 0, 90, 16.5],
    [0, 4, 8, 0, 0, 37, 25.5],
    [2, 4, 6, 0, 0, 143, 25.5],
  ];
  winCases.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ''
    ) 
    {
      document.querySelector('.info').innerText =
        boxtext[e[0]].innerText + ' Won';
      console.log('YES');
      gameover = true;
      // document.getElementsByClassName('one').getElementsByTagName('img')[0].style.width="150px";
      document
        .querySelector('.images1')
        .getElementsByTagName('img')[0].style.width = '20vw';
      document
        .querySelector('.images2')
        .getElementsByTagName('img')[0].style.width = '20vw';
      document.querySelector(
        '.line'
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      won_sound.play();
      document.querySelector('.line').style.width = `${e[6]}vw`;
      document.querySelector('.reset').innerHTML="New Game";
    //   document.querySelectorAll('.box')[e[0]].style.color = 'purple';
    //   document.querySelectorAll('.box')[e[1]].style.color = 'purple';
    //   document.querySelectorAll('.box')[e[2]].style.color = 'purple';
    }
    else if(isDraw())
    {
      document.querySelector('.info').innerText =
        "It's a draw";
        document.querySelector('.reset').innerHTML="New Game";
    }
  });
};

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector('.inputtext');
  element.addEventListener('click', () => {
    if (boxtext.innerText === '') {
      turn_sound.play();
      boxtext.innerText = turn;
      turn = changeTurn();
      if (!gameover) {
        document.getElementsByClassName('info')[0].innerText =
          'Turn for ' + turn;
      }

      checkWin();
    }
  });
});
// let reset=document.getElementsByClassName('class');
document.getElementsByClassName('reset')[0].addEventListener('click', () => {
  let boxtexts = document.querySelectorAll('.inputtext');
  Array.from(boxtexts).forEach((element) => {
    element.innerText = '';
  });
  turn = 'X';
  gameover = false;
  if (!gameover)
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
  document
    .querySelector('.images1')
    .getElementsByTagName('img')[0].style.width = '0vw';
  document
    .querySelector('.images2')
    .getElementsByTagName('img')[0].style.width = '0vw';
  document.querySelector('.line').style.width = '0vw';
  document.querySelector('.reset').innerHTML="Reset";
});
