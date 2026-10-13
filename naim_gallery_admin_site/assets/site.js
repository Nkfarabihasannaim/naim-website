
const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu)menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links&&links.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
