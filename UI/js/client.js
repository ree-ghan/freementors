let andela = document.querySelector('.andela');
let grid = document.querySelector('.grid');
let mentors = document.querySelector('.mentors');
let mentor = document.querySelector('.mentor');
let page = document.querySelector('.page');

mentors.addEventListener("click", function (e) {
  if (e.target.matches('.mentors')) {
    andela.classList.add('hidden');
  }
});

mentors.addEventListener("click", function (e) {
  if (e.target.matches('.mentors')) {
    // page.removeChild(grid);
    grid.classList.add('hidden');
  }
});

mentors.addEventListener("click", function (e) {
  if (e.target.matches('.mentors')) {
    mentor.setAttribute('style', 'z-index: 0;');
    mentor.classList.remove('hidden');
  }
});
