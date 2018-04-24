/* boxes -> options  box -> question */


function randColor() {
  return Math.floor(Math.random()*256);
}

function randColorCode() {
  return `rgb(${randColor()}, ${randColor()}, ${randColor()})`
}

/* span 에 들어있는 컬러코드 보이는 문제 */
const question = document.querySelector('.js__question')


/* 랜덤 3가지 제너레이트 그리고 한 개의 배열에 몰아놓는다 */
const options = document.querySelectorAll('.circle')

let answer;
let score = 0;
document.querySelector('.js__score').textContent = score;
function newStage() {
  const colorCodes = [randColorCode(), randColorCode(), randColorCode()]
  options.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index]
  })

  /* 위에 3가지 중에서 한 가지 선택할 것 */
  answer = Math.floor(Math.random() * 3);

  /* 그리고 선택된 한 가지를 span 에 질문으로 넣어줄 것 */
  question.textContent = colorCodes[answer];
}

/* answer 에는 0, 1, 2 배열, 3가지 중에서 정답으로 저장되어 있는 애랑 같으면 */
options.forEach((el, index) => {
  el.addEventListener('click', () => {
    el.classList.add('large')
    if(answer === index){
//      alert("!!! that's correct")
      document.querySelector('.modal.right').classList.add('show')
      score++;
    }
    else{
//      alert("that's not correct") 
      document.querySelector('.modal.wrong').classList.add('show')
      score = 0;
    }
    document.querySelector('.js__score').textContent = score;
  })
})

document.querySelector('.js__close').addEventListener('click', () => {
  newStage();
//  setTimeout(newStage(), 1000);
  options.forEach(el => {
    el.classList.remove('large')
  })  
  document.querySelector('.modal.right').classList.remove('show')
})

document.querySelector('.js__close2').addEventListener('click', () => {
  newStage();
//  setTimeout(newStage(), 1000);
  options.forEach(el => {
    el.classList.remove('large')
  })  
  document.querySelector('.modal.wrong').classList.remove('show')
})


newStage();



















