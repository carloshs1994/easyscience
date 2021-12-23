const hamburgerMenu = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#closeButton');
const closeNavLink = document.querySelectorAll('li > a.Personal-information');
const openAndClose = function () {
  menu.classList.toggle('visible');
};
hamburgerMenu.addEventListener('click', openAndClose);
closeMenu.addEventListener('click', openAndClose);
closeNavLink.forEach((element) => {
  element.addEventListener('click', openAndClose);
});
//-------------------------------------------Array of Courses
const arrOfFavoriteCourses = [
  {
    title: 'Algebra 1',
    content: 'Foundation, Solving equations, working with units, linear equations & graphs, Forms of linear equations, System of equations',
    linkToCompleteCourse: '#',
  },
  {
    title: 'Organic Chemistry',
    content: '',
    linkToCompleteCourse: '#',
  },
  {
    title: 'Trigonometry',
    content: '',
    linkToCompleteCourse: '#',
  },
  {
    title: 'Probability',
    content: '',
    linkToCompleteCourse: '#',
  },
  {
    title: 'Precalculus',
    content: '',
    linkToCompleteCourse: '#',
  },
  {
    title: "Newton's laws",
    content: '',
    linkToCompleteCourse: '#',
  }
];

const favoriteCourse = arrOfFavoriteCourses.map((element, index) => {
  const course = document.createElement('article');
  course.className = 'card';
  course.innerHTML = `<div class="background-card"><h2>${element.title}</h2></div>`;
  return course;
});
console.log(favoriteCourse[0])
const createFavoriteCourses = document.getElementById('courses-wrap');
for (let i = 0; i<favoriteCourse.length; i += 1){
  createFavoriteCourses.appendChild(favoriteCourse[i]);
}