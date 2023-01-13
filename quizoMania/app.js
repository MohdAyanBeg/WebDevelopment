const correctAns =['B','D','A','B','C'];
const form = document.querySelector('.quiz-form');
const result=document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAns = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value, form.Q5.value];
    userAns.forEach((answer, index) => {
        if (answer===correctAns[index])
        {
            score+=1;
        }
    });
    const percentage = (score/5)*100;
    console.log(score);
    scrollTo(0,0);
    result.classList.remove('d-none')
    result.querySelector('.scr').textContent = `${score}`;
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('.percent').textContent=`${output}%`;
        if(output===percentage){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },10)







    
})