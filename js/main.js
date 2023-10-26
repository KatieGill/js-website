const portfolioInfo = [
  {
    dataItem: 'web', 
    dataOpen: 'web-1', 
    imgSrc: 'assets/images/portfolio-1.jpg', 
    title: 'Wed Development', 
    text: 'Food Website',
    modal: {
      id: 'web-1', 
      header: 'Web Project 1', 
      title: 'My first Awesome Website', 
      para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      para2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }, 
  {
    dataItem: 'web', 
    dataOpen: 'web-2', 
    imgSrc: 'assets/images/portfolio-2.jpg', 
    title: 'Wed Development', 
    text: 'Skate Website',
    modal: {
      id: 'web-2', 
      header: 'Web Project 2', 
      title: 'My first Awesome Website', 
      para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      para2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    dataItem: 'web', 
    dataOpen: 'web-3', 
    imgSrc: 'assets/images/portfolio-3.jpg', 
    title: 'Wed Development', 
    text: 'Eating Website',
    modal: {
      id: 'web-3', 
      header: 'Web Project 3', 
      title: 'My first Awesome Website', 
      para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      para2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    dataItem: 'ui', 
    dataOpen: 'ui-1', 
    imgSrc: 'assets/images/portfolio-4.jpg', 
    title: 'UI Design', 
    text: 'Cool Design',
    modal: {
      id: 'ui-1', 
      header: 'UI Project 1', 
      title: 'My first Awesome Website', 
      para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      para2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    dataItem: 'app', 
    dataOpen: 'app-1', 
    imgSrc: 'assets/images/portfolio-5.jpg', 
    title: 'App Development', 
    text: 'Game App',
    modal: {
      id: 'app-1', 
      header: 'App Project 1', 
      title: 'My first Awesome Website', 
      para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      para2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
},
  {
    dataItem: 'app', 
    dataOpen: 'app-2', 
    imgSrc: 'assets/images/portfolio-6.jpg', 
    title: 'App Development', 
    text: 'Gambling App',
    modal: {
      id: 'app-2', 
      header: 'App Project 2', 
      title: 'My first Awesome Website', 
      para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      para2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
},
  {
    dataItem: 'app', 
    dataOpen: 'app-3', 
    imgSrc: 'assets/images/portfolio-7.jpg', 
    title: 'app Development', 
    text: 'Money App',
    modal: {
      id: 'app-3', 
      header: 'App Project 3', 
      title: 'My first Awesome Website', 
      para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      para2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
},
  {
    dataItem: 'ui', 
    dataOpen: 'ui-2', 
    imgSrc: 'assets/images/portfolio-8.jpg', 
    title: 'UI Design', 
    text: 'Fantastic Design',
    modal: {
      id: 'ui-2', 
      header: 'UI Project 2', 
      title: 'My first Awesome Website', 
      para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      para2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
];

portfolioInfo.forEach((item) => {
  const portfolioCard = document.createElement('div');
  portfolioCard.setAttribute('class', 'portfolio-card');
  portfolioCard.dataset.item = item.dataItem;
  portfolioCard.dataset.open = item.dataOpen;
  document.getElementById('card-grid').appendChild(portfolioCard);

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');
  portfolioCard.appendChild(cardBody);

  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', item.imgSrc);
  cardImage.setAttribute('alt', 'portfolio-icon');
  cardBody.appendChild(cardImage);

  const cardLink = document.createElement('div');
  cardLink.setAttribute('class', 'card-popup-box');
  cardBody.appendChild(cardLink);

  const popUpTitle = document.createElement('div');
  popUpTitle.innerHTML = item.title;
  cardLink.appendChild(popUpTitle);

  const popUpText = document.createElement('h3');
  popUpText.innerHTML = item.text;
  cardLink.appendChild(popUpText);
});

const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);


const getPortfolioItemByModalId = (arr, id) => {
  return arr.find((item) => item.modal.id === id);
}

const createPopUpModal = (portfolioArr, modalId) => {
  const item = getPortfolioItemByModalId(portfolioArr, modalId)
  const modal = document.createElement('div');
  modal.setAttribute('id', item.modal.id);
  modal.setAttribute('class', 'modal');
  modal.dataset.animation = 'slideInOutTop';
  document.getElementById('main-wrapper').appendChild(modal);

  const dialog = document.createElement('div');
  dialog.setAttribute('class', 'modal-dialog');
  modal.appendChild(dialog);

  const header = document.createElement('header');
  header.setAttribute('class', 'modal-header');
  dialog.appendChild(header);

  const headerTitle = document.createElement('h3');
  headerTitle.innerHTML = item.modal.header;
  header.appendChild(headerTitle);

  const searchIcon = document.createElement('i');
  searchIcon.setAttribute('class', 'fas fa-times');
  searchIcon.dataset.close = "";
  header.appendChild(searchIcon);
  searchIcon.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });

  const body = document.createElement('div');
  body.setAttribute('class', 'modal-body');
  dialog.appendChild(body);

  const imgWrap = document.createElement('div');
  imgWrap.setAttribute('class', 'img-wrapper');
  body.appendChild(imgWrap);

  const img = document.createElement('img');
  img.setAttribute('src', item.imgSrc);
  img.setAttribute('alt', 'portfolio image');
  imgWrap.appendChild(img);

  const textWrap = document.createElement('div');
  textWrap.setAttribute('class', 'text-wrapper');
  body.appendChild(textWrap);

  const paraTitle = document.createElement('p');
  const strong = document.createElement('strong');
  strong.innerHTML = item.modal.title;
  paraTitle.appendChild(strong);
  textWrap.appendChild(paraTitle);

  const para1 = document.createElement('p');
  para1.innerHTML = item.modal.para1;
  textWrap.appendChild(para1);

  const para2 = document.createElement('p');
  para2.innerHTML = item.modal.para2;
  textWrap.appendChild(para2);
}



const removeFirstChild = (id) => {
  const elm = document.getElementById(id);
  while (elm.hasChildNodes()) {
    elm.removeChild(elm.firstChild);
  }
}

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
}

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
}

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });
  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener('click', function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
})

for (const elm of switcher) {
  elm.addEventListener('click', function() {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  })
}


searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

for (const link of filterLink) {
  link.addEventListener('click', function() {
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.item === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

for (const card of portfolioItems) {
  card.addEventListener('click', function() {
    const modalId = card.dataset.open;
    createPopUpModal(portfolioInfo, modalId)
  });
}

// Modal/Full Site Modal "open buttons"
for (const elm of openModal) {
  elm.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const elm of closeModal) {
  elm.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}


// Modal 
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
});