// Adaptive Learning Engine

function determineLevel(score){
 if(score>=85) return 'Advanced';
 if(score>=70) return 'Intermediate';
 return 'Basic';
}

function recommendation(level){
 if(level==='Basic'){
  return 'Latihan mufradat dan qawaid dasar';
 }
 if(level==='Intermediate'){
  return 'Latihan qiraah dan nahwu';
 }
 return 'Latihan kitabah tingkat lanjut';
}
