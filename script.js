const questions=[{
    'que':'who invented HTML?',
    'a':'Tim berners lee',
    'b':'W3C',
    'c':'Sun Microsystem',
    'd':'Richard Ghosley',
    'correct':'a'
},
{
    'que':'In which year javascript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'None of these',
    'correct':'b'

},
{
    'que':'What does CSS stands for?',
    'a':'Hypertext Markup Language',
    'b':'Cascading Style sheet',
    'c':'Common script Language',
    'd':'Cyber Security Services',
    'correct':'b'
}
]
let index=0;
let total = questions.length;
let right=0,
     wrong=0;
const quesBox= document.getElementById("quesBox")
const optioninputs = document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText=`${index+1} ) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;
    
}

const submitQuiz=()=>{
    const data = questions[index];
    const ans=getAnswer()
    console.log(ans,data.correct)
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;


}
const getAnswer= ()=>{
    let answer;
    optioninputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}
const reset=()=>{
    optioninputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center;">
          <h3>Thank you for playing the Quiz</h3>
          <h2>You Scored  ${right} /${total} </h2>     
   </div>
      `

}




loadQuestion();