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
//  -------------------------------------------Array of Courses
const arrOfFavoriteCourses = [
  {
    title: 'Algebra 1',
    content: 'Content: Foundation, Solving equations, working with units, linear equations & graphs, Forms of linear equations, System of equations',
    linkToCompleteCourse: '#',
    image: 'assets/Roulette70.svg',
  },
  {
    title: 'Organic Chemistry',
    content: 'Content: Structure and bonding, Resonance and acid-base chemistry, Alkanes, cycloalkanes, and functional groups, Stereochemistry, Substitution and elimination reactions, Alkenes and alkynes, Alcohols, ethers, epoxides, sulfides, Conjugated systems and pericyclic reactions, Aromatic compounds, Aldehydes and ketones, Carboxylic acids and derivatives, Alpha carbon chemistry, Amines, Spectroscopy',
    linkToCompleteCourse: '#',
    image: 'assets/toluene.svg',
  },
  {
    title: 'Trigonometry',
    content: 'Content: Right triangles & trigonometry, Trigonometric functions, Non-right triangles & trigonometry, Trigonometric equations and identities',
    linkToCompleteCourse: '#',
    image: 'assets/Roulette70.svg',
  },
  {
    title: 'Probability',
    content: 'Content: Simple probability, Counting permutations and combinations, Random variables, Sampling distributions, Confidence intervals, Significance tests (hypothesis testing)',
    linkToCompleteCourse: '#',
    image: 'assets/Roulette70.svg',
  },
  {
    title: 'Precalculus',
    content: 'Content: Composite and inverse functions, Trigonometry, Complex numbers, Rational functions, Conic sections, Vectors, Matrices, Probability and combinatorics, Series, Limits and continuity',
    linkToCompleteCourse: '#',
    image: 'assets/Roulette70.svg',
  },
  {
    title: "Newton's laws",
    content: "Content: Newton's first law, Newton's third law and free body-diagrams, Newton's second law, Applications of Newton's second law",
    linkToCompleteCourse: '#',
    image: 'assets/IncessantBlabber-Stylized-atom.svg',
  },
];

const favoriteCourse = arrOfFavoriteCourses.map((element) => {
  const course = document.createElement('article');
  course.className = 'card';
  course.innerHTML = `
  <div class="background-card">
    <h2>${element.title}</h2>
    <a class="display-while-hover" href="${element.linkToCompleteCourse}">Start this course</a>
    <p class="display-while-hover">${element.content}</p>
    <img class="display-while-hover" src="${element.image}" alt="Toluene molecule">
  </div>
  `;
  return course;
});
const createFavoriteCourses = document.getElementById('courses-wrap');
for (let i = 0; i < favoriteCourse.length; i += 1) {
  createFavoriteCourses.appendChild(favoriteCourse[i]);
}
