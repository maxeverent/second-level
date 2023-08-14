const menu = [
  {
    name: 'Прямая трансляция',
    items: [],
  },
  {
    name: 'Ханты-Мансийск',
    items: [],
  },
  {
    name: 'Новости',
    items: [],
  },
  {
    name: 'Участники',
    items: [],
  },
  {
    name: 'Основаня информация',
    items: ['О Ханты-Мансийске', 'История кубка мира',
      'Информация для участников'],
  },
  {
    name: 'Результаты',
    items: [],
  },
  {
    name: 'Медиа',
    items: [],
  },
  {
    name: 'Конакты',
    items: [],
  },
];

const langs = ['Ru', 'En'];

const burgerMenu = document.querySelector('.header__burger-menu');
const background = document.querySelector('html');

const buttonMenu = document.querySelector('.header__burger-menu-btn');
if (buttonMenu) {
  buttonMenu.addEventListener('click', (e) => {
    burgerMenu.classList.add('header__burger-menu_show');
    background.classList.add('background_disable');
  });
};

const closeBtn = document.createElement('button');
closeBtn.classList.add('burger-menu__close-btn');
closeBtn.addEventListener('click', (e) => {
  burgerMenu.classList.remove('header__burger-menu_show');
  background.classList.remove('background_disable');
});

const logo = document.createElement('img');

import logoImg from '../images/main-logo.svg';
logo.setAttribute('src', logoImg);
logo.classList.add('burger-menu__header-logo');

const headerMenu = document.createElement('div');
headerMenu.classList.add('burger-menu__header');
headerMenu.appendChild(logo);
headerMenu.appendChild(closeBtn);

const menuList = document.createElement('ul');
menuList.className = 'burger-menu__list';

const showListOption = (li) => {
  const arrowIcon = document.createElement('span');
  arrowIcon.classList.add('close-arrow', 'burger-menu__option-arrow');
  li.children[0].appendChild(arrowIcon);
  li.children[0].addEventListener('click', (e) => {
    li.children[1].classList.toggle('burger-menu__option_show');
    arrowIcon.classList.toggle('open-arrow');
  });
};

menu.forEach((el) => {
  const li = document.createElement('li');
  li.className = 'burger-menu__item';
  const a = document.createElement('a');
  a.textContent = el.name;
  a.className = 'burger-menu__item-link';
  if (el.items.length != 0) {
    li.appendChild(a);
    showListOption(li);
    const option = document.createElement('div');
    option.classList.add('burger-menu__option');
    el.items.forEach((item, index) => {
      const optionItem = document.createElement('div');
      optionItem.textContent = item;
      optionItem.classList.add('burger-menu__option-item');
      option.appendChild(optionItem);
      if (index != el.items.length - 1) {
        const hr = document.createElement('hr');
        hr.classList.add('burger-menu__option-line');
        option.appendChild(hr);
      }
    });
    li.appendChild(option);
  } else {
    li.appendChild(a);
  }
  menuList.appendChild(li);
});

const siteParams = document.createElement('ul');
siteParams.classList.add('site-params', 'burger-menu__site-params');

const glasses = document.createElement('img');
import glassesImg from '../images/glasses-icon.svg';
glasses.setAttribute('src', glassesImg);
glasses.classList.add('burger-menu__glasses-icon');

langs.forEach((el) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = el;
  if (el == 'Ru') a.classList.add('site-params__link_selected');
  li.appendChild(a);
  siteParams.appendChild(li);
});

const phone = document.createElement('div');
phone.innerHTML = `<span class="burger-menu__phone_regular">+7
  (3467)</span> 555-321`;
phone.classList.add('phone', 'burger-menu__phone');

const address = document.createElement('div');
address.textContent = 'г. Ханты-Мансийск, ул. Лопарева';
address.classList.add('address', 'burger-menu__address');

const menuContainer = document.createElement('div');
menuContainer.classList.add('burger-menu');

menuContainer.appendChild(headerMenu);
menuContainer.appendChild(menuList);
menuContainer.appendChild(glasses);
menuContainer.appendChild(siteParams);
menuContainer.appendChild(phone);
menuContainer.appendChild(address);

burgerMenu.append(menuContainer);
