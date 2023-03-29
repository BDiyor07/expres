let menu = document.querySelector('.menu');
let pages = document.querySelector('#pages');
let nav = document.querySelector('.container');
let first = document.querySelector('.first');


menu.onclick = function() {
  menu.classList.toggle('menuBar');
  pages.classList.toggle('pagesAf');
  first.classList.toggle('fit');
} 
document.onclick = function(e) {
  if(e.target.id !== 'pages' && e.target.id !== 'menu' ){
    pages.classList.remove('pagesAf');
    menu.classList.remove('menuBar');
    first.classList.remove('fit')
  }
}