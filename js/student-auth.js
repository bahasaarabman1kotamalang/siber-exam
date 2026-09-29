import {auth} from './firebase-config.js';
import {signInWithEmailAndPassword}
from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

document.getElementById('login').onclick=async()=>{
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

try{
await signInWithEmailAndPassword(auth,email,password);
window.location='exam.html';
}catch(e){
alert('Login gagal');
}
};
