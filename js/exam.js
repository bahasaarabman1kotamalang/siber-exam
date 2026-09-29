import {db} from './firebase-config.js';

let questions=[
{
id:1,
q:'اختر الإجابة الصحيحة',
options:['البيت','المدرسة','السوق','المسجد'],
answer:'المدرسة'
}
];

let index=0;
let score=0;
let selected=[];

function show(){
let q=questions[index];
document.getElementById('question').innerHTML=q.q;
document.getElementById('options').innerHTML=
q.options.map(x=>`<button onclick="choose('${x}')">${x}</button>`).join('<br>');
}

window.choose=function(x){
selected[index]=x;
}

document.getElementById('next').onclick=()=>{
if(selected[index]===questions[index].answer) score+=100/questions.length;
index++;
if(index<questions.length) show();
else alert('Nilai: '+score);
};

show();

let time=3600;
setInterval(()=>{
time--;
document.getElementById('timer').innerHTML=
Math.floor(time/60)+':'+time%60;
},1000);
