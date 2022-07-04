const winAudia= new Audio("win.mp3");
const failAudia= new Audio("fail.mp3");
const nearFail= new Audio("nearFail.mp3");
let count=0;
let secretNumber = Math.trunc(Math.random() * 20)+1;
console.log(secretNumber)
const btnCheck =document.querySelector('.check');
btnCheck.addEventListener('click', function(){
    count++;
    const guessNumber = Number(document.querySelector('.guess').value); 
//when there is no any value
if(!guessNumber){
    document.querySelector('.message').textContent = ' ⛔No Number!';
}
//when guess number and secrate number are not equal
else if(guessNumber !== secretNumber){
document.querySelector('.message').textContent = guessNumber > secretNumber ? '🆙 Too High' : '⬇ Too low';
document.querySelector('.guess').value='';
 if (count === 4){
    nearFail.play();
 }
    //when  the count is equal 4
    else if (count === 5){
        failAudia.play();
        btnCheck.disabled=true;
        document.querySelector('.guess').value="";
        document.querySelector('.number').textContent=secretNumber;
        return(document.querySelector('.message').innerHTML="<h4> No attempt Try again</h4>");
    }
}

//when the count  is equal 5
else if (count ===5 && guessNumber === secretNumber){
document.querySelector('.message').textContent ='🎉 Correct Number!'
winAudia.play();
document.querySelector('body').style.backgroundColor="green";
document.querySelector('.number').textContent=secretNumber;
btnCheck.disabled=true;
btnCheck.style.backgroundColor="rgba(220,220,220,0.677)";
btnCheck.style.cursor='default';
document.querySelector('.lets-paly').textContent="Congratulation";
}
//when the count become 5 and guess 

else if (guessNumber === secretNumber){
    document.querySelector('.message').textContent ='🎉 Correct Number!'
    winAudia.play();
    document.querySelector('body').style.backgroundColor="green";
    document.querySelector('.number').textContent=secretNumber;
    btnCheck.disabled=true;
    btnCheck.style.backgroundColor="rgba(220,220,220,0.677)";
    btnCheck.style.cursor='default';
    document.querySelector('.lets-paly').textContent="Congratulation";

    }
});
//   again button
    let again=document.querySelector('.again');
    again.addEventListener('click',function(){
    count=0;
    secretNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent="start guessing";
    btnCheck.disabled=false;
    document.querySelector('body').style.backgroundColor="#f0db4f";
    btnCheck.style.backgroundColor="#388697";
    document.querySelector('.number').style.width='10rem';
    document.querySelector('.lets-paly').textContent='lets play'; 
    document.querySelector('.guess').value="";





  });
    
