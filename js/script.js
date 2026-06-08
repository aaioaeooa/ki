
const links=document.querySelectorAll('nav a');
links.forEach(a=>{
  if(a.href===window.location.href){
    a.classList.add('active');
  }
});
