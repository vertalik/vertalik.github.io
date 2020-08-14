'use strict';

window.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  let vacancieOpenedName = '';
  const vacListWrapper = document.querySelector('.accordion__wrapper');
  vacListWrapper.addEventListener('click', (e) => {
    if (e.target.name === 'radio-accordion') {
      if (vacancieOpenedName === e.target.value) {
        const newName = toggleVacancies(e.target, vacancieOpenedName);
        vacancieOpenedName = newName;
      } else {
        vacancieOpenedName = e.target.value;
      }
    }
  });

  const select = document.querySelector('.select-box__current__focus');
  select.addEventListener('click', (e) => {
    toggleVacanciesDropdown(e.target,select);
  });

  select.addEventListener('blur', () => {
    select.dataset.dropdown = 'false';
  })

  const mobileFilterResetBtn = document.querySelector('.mobile__filter__reset');
  mobileFilterResetBtn.addEventListener('click', resetMobileFilters);

  const viewAllVacanciesBtn = document.querySelector('.view-vacancies__btn');
  viewAllVacanciesBtn.addEventListener('click', resetAllFilters);

  const vacanciesLevelCheck = document.querySelectorAll('input[name="vac-radio"');
  vacanciesLevelCheck.forEach((radio) => radio.addEventListener('change', filteringVacancies));

  const vacanciesSelect = document.querySelectorAll('input[name="select"]');
  vacanciesSelect.forEach((input) =>
    input.addEventListener('change', () => {
      const isMobileFilterExist = document.querySelector('.filter__icon__trigger');
      if (getComputedStyle(isMobileFilterExist).display === 'flex') {
        filteringVacanciesMobileVer();
      } else {
        filteringVacancies();
      }
    }),
  );

  const mobileLevelcheck = document.querySelectorAll('.filter__check__lable');
  mobileLevelcheck.forEach((input) => input.addEventListener('click', filteringVacanciesMobileVer));
}

function toggleVacanciesDropdown(target,select) {
  const data = select.dataset.dropdown;
  if (data === 'true') {
    const focusElement = document.querySelector('.only__for__focus');
    focusElement.focus();
    select.dataset.dropdown = 'false';
    return;
  }
  if (target.name === 'select') {
    select.dataset.dropdown = 'false';
  } else { 
    select.dataset.dropdown = 'true';
  }
}

function toggleVacancies(target, savedName) {
  if (target.value === savedName) {
    target.checked = false;
  } else {
    return target.value;
  }
  return '';
}

function getCheked(elements) {
  for (let item of elements) {
    if (item.checked) {
      return item.value;
    }
  }
}

function filteringVacancies() {
  const vacanciesList = document.querySelectorAll('input[name="radio-accordion"]');
  const level = document.querySelectorAll('input[name="vac-radio"');
  const direction = document.querySelectorAll('input[name="select"]');
  const getSelectedDirection = getCheked(direction);
  const getSelectedLevel = getCheked(level);
  for (let vac of vacanciesList) {
    if (vac.value === getSelectedLevel && vac.dataset.direction === getSelectedDirection) {
      vac.parentElement.classList.remove('hide');
    } else if (getSelectedLevel === 'Any level' && vac.dataset.direction === getSelectedDirection) {
      vac.parentElement.classList.remove('hide');
    } else if (vac.value === getSelectedLevel && getSelectedDirection === 'All Vacancies') {
      vac.parentElement.classList.remove('hide');
    } else if (getSelectedLevel === 'Any level' && getSelectedDirection === 'All Vacancies') {
      vac.parentElement.classList.remove('hide');
    } else {
      vac.parentElement.classList.add('hide');
    }
  }
}

function filteringVacanciesMobileVer() {
  const filterArr = [];
  const mobileInputs = document.querySelectorAll('.filter__check__lable');
  const vacanciesList = document.querySelectorAll('input[name="radio-accordion"]');
  const countFilters = document.querySelector('.filter__count');
  const countFiltersContainer = document.querySelector('.filter__count__container');
  const direction = document.querySelectorAll('input[name="select"]');
  const getSelectedDirection = getCheked(direction);
  for (let inputs of mobileInputs) {
    if (inputs.checked) {
      filterArr.push(inputs.value);
    }
  }
  if (filterArr.length > 0) {
    countFilters.textContent = filterArr.length;
    countFiltersContainer.classList.add('show__mobile__selected-filters');
    for (let vac of vacanciesList) {
      if (filterArr.includes(vac.value) && vac.dataset.direction === getSelectedDirection) {
        vac.parentElement.classList.remove('hide');
      } else if (getSelectedDirection === 'All Vacancies' && filterArr.includes(vac.value)) {
        vac.parentElement.classList.remove('hide');
      } else {
        vac.parentElement.classList.add('hide');
      }
    }
  } else {
    countFiltersContainer.classList.remove('show__mobile__selected-filters');
    for (let vac of vacanciesList) {
      if (getSelectedDirection === 'All Vacancies') {
        vac.parentElement.classList.remove('hide');
      } else if (vac.dataset.direction === getSelectedDirection) {
        vac.parentElement.classList.remove('hide');
      } else {
        vac.parentElement.classList.add('hide');
      }
    }
  }
}

function resetAllFilters() {
  const radioCollection = document.querySelectorAll('input[name="vac-radio"]');
  const select = document.querySelectorAll('input[name="select"]');
  const accordionRadioCollection = document.querySelectorAll('input[name="radio-accordion"]');
  select[0].checked = true;
  radioCollection[0].checked = true;
  for (let vac of accordionRadioCollection) {
    vac.parentElement.classList.remove('hide');
    vac.checked = false;
  }
}

function resetMobileFilters() {
  const filtersInput = document.querySelectorAll('.filter__check__lable');
  for (let input of filtersInput) {
    input.checked = false;
  }
  filteringVacanciesMobileVer();
}
