"use strict"

//переменная из которой мы можем определить на каком устройстве (мышь или тач) мы находимся
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

//условие если у нас мобилка то соответствующий класс, если ПК то другой класс
if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

//прокрутка при клики на категории

//переменная в которую собираем все категории с нужным атрибутом
const menuLinks = document.querySelectorAll('.menu__item[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      //получаем то, на что мы кликнули 
      const menuLink = e.target;
      //проверяем заполнен ли этот атрибут, есть ли там что-то и проверяем существует ли объект на который направлен
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         //получаем сам объект
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         //положение объекта с учётом высоты шапки 
         //(расстояние оъекта от топа (вверха) + количество прокрученных пикселей - высота шапки)
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         //сама прокрутка (1-ый параметр на сколько прокрутить, второй чтоб плавно было)
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         //чтоб ссылка не работаа как ссылка
         e.preventDefault();
      }
   }
}


//настройка попапа

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         //найти атрибут href и убрать в значении #, чтобы потом можно было передать в функцию нужный индекс
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
         //не дает перезагрузиться странице
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         //посылает в функцию с параметром - нахождения родителя с классом popup переменной
         e.preventDefault();
         //не дает перезагрузиться странице
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      //ищем открытые попапы, прежде чем открыть новые, вдруг в одном попапе есть второй
      if (popupActive) {
         popupClose(popupActive, false);
         //закрываем если есть
      } else {
         bodyLock();
         //если нет то блочим скролл
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            //если мы нажали НЕ на элемент внутри попапа
            popupClose(e.target.closest('.popup'));
            //то мы закрываем попап отправляя параметры в функцию
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   //второй параметр передает надо ли нам включать скролл, вдруг мы второй попап открываем
   if (unlock) {
      popupActive.classList.remove('open');
      //убираем класс опен
      if (doUnlock) {
         bodyUnLock();
         //если тру то мы около попапа убираем темную область, если фолз то запрещаем убирать

      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
   //вычисляем длину скролла (вычитаем из всей ширины  -  ширину контента)
   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
         // проверка если есть класс lock-padding то к нему тоже отступ справа = длине скролла, класс присваивается значениям имеющие значение FIXED
      }
   }
   body.style.paddingRight = lockPaddingValue;
   // добавляет отступ справа, чтобы при открытии попапа контент не перепригивал вправо на расстояние скролла (как раз таки добавляется длина скролла, чтобы все было плавно)
   body.classList.add('lock');
   //
   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
   // чтобы во время загрузки попапа, нельзя было на него еще раз нажать и выявить ошибку
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      //убираем все padding при закрытии
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);
   //ставим на время, чтобы при закрытии не сразу появлялся скролл, чтобы не дергался попап при закрытии
   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
      //выключает попап нажатием на ESC
   }
});

// функции которые делают код поддерживаемым в старых браузерах:

(function () {
   // проверяем поддержку
   if (!Element.prototype.closest) {
      //реализуем
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   // проверяем поддержку
   if (!Element.prototype.matches) {
      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
})();