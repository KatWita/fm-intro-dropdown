const features = document.querySelector('.menu__dropdown-features');
const company = document.querySelector('.menu__dropdown-company');
const featureList = document.querySelector('.menu__dropdown--first');
const companyList = document.querySelector('.menu__dropdown--second');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-shadow');

const toggleFeature = () => {
	featureList.classList.toggle('show');
	features.classList.toggle('active');
};

const toggleCompany = () => {
	companyList.classList.toggle('show');
	company.classList.toggle('active');
};

const showHamburger = () => {
	navMobile.classList.toggle('show');
	hamburger.classList.toggle('active');
};

features.addEventListener('click', toggleFeature);
company.addEventListener('click', toggleCompany);
hamburger.addEventListener('click', showHamburger);
