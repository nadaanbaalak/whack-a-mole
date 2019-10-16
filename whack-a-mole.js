let count = 0;
let score = 0;
let cancel;
let prev_div_no;
function scoreCal()
{
  score = score + 1;
  var scoreBoard = document.getElementById('score-board');
  scoreBoard.innerText = score;
}
function timeClock()
{
  if(count==60)
  {
    stoptimer();
    prompt("Game Over. Time's up!. Final Score:", score);
  }
  if(prev_div_no)
  {
    remove_mole_img();
  }
  mole_img();
  var timer = document.getElementById('timer');
  timer.innerText=count;
  count = count+1;
}
function startTimer()
{
  if(!cancel)
  {
    cancel = setInterval(timeClock,1000);
  }
}
function stopTimer()
{
  clearInterval(cancel);
}
function mole_img()
{
  var val = Math.random()*9;
  var div_no = Math.floor(val);
  prev_div_no = div_no;
  var ele = document.getElementById(div_no.toString())
  var newEle = document.createElement('img')
  newEle.src="mole-img.png";
  newEle.style.height="100px";
  newEle.style.width="100px";
  newEle.style.borderRadius="50%";
  newEle.id="child";
  var targetEle = document.getElementById(div_no.toString());
  targetEle.appendChild(newEle)
  newEle.addEventListener("click",scoreCal)
}
function remove_mole_img()
{
  var ch = document.getElementById("child")
  document.getElementById(prev_div_no.toString()).removeChild(ch);
}
