// AI Proctoring Framework
// Struktur monitoring aktivitas peserta

const proctor={
 camera:true,
 faceDetection:false,
 multipleFace:false,
 tabSwitch:0,
 fullscreenExit:0
};

document.addEventListener('visibilitychange',()=>{
 if(document.hidden){
  proctor.tabSwitch++;
  console.log('Tab switch:',proctor.tabSwitch);
 }
});
