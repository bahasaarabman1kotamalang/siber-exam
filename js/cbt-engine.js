const soal=[
{
q:'اختر الإجابة الصحيحة: ذهب أحمد إلى ...',
opsi:['البيت','المدرسة','السوق','المسجد'],
jawaban:'المدرسة'
}
];

let nomor=0;
let waktu=3600;

function tampil(){
document.getElementById('question').innerHTML=soal[nomor].q;
document.getElementById('options').innerHTML=
soal[nomor].opsi.map(x=>'<button>'+x+'</button>').join('<br>');
}

function next(){
nomor++;
if(nomor<soal.length)tampil();
else alert('Ujian selesai');
}

setInterval(()=>{
waktu--;
document.getElementById('timer').innerHTML=
Math.floor(waktu/60)+':'+waktu%60;
},1000);

tampil();
