# Браузерный JS

Браузер дает средства для управления веб-страницами, одним из них является корневой объект `window`, который представляет из себя окно браузера и распологает методами для управления им.

```js
// Внутренняя высота окна браузера (в пикселях)
window.innerHeight

// Внутренняя ширина окна браузера (в пикселях)
window.innerWidth
```

## DOM

DOM (Document Object Model) – объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.

В соответствии с DOM, каждый HTML-тег является объектом. Вложенные теги являются «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.

Для создания или изменения страницы используется объект `document`.

```js
document.body.style.background = 'turquoise';

document.querySelector('h1').innerText = 'Хайповый заголовок'

// Создание элемента
const subtitleNode = document.createElement('h2');
subtitleNode.innerText = 'Подзаголовок';
document.body.append(subtitleNode);
```

### Навигация по DOM-элементам

Для манипуляций с элементами и их содержимым, необходимо получить соответсвующий DOM-элемент.

`document.documentElement` – Соответствует тегу `<html>`.
`document.body` – Соответствует тегу `<body>`.
`document.head` – Соответствует тегу `<head>`.

Пример: Вывод всех дочерних узлов тега `<body>`

```html
<html>
<body>
  <h1>Скучный новостной сайт #1</h1>

  <ul>
    <li>
      <b>Информация</b>
    </li>
  </ul>

  <script>
    for (let i = 0; i < document.body.childNodes.length; i++) {
      alert(document.body.childNodes[i]);
    }
  </script>
</body>
</html>
```

Доступ к первым и последним дочерним элементам:

```js
// Доступ к первому элементу
elem.childNodes[0];
// ИЛИ
elem.firstChild

// Доступ к последнему элементу
elem.childNodes[elem.childNodes.length - 1];
// ИЛИ
elem.lastChild
```

Соседи – узлы, у которых один и тот же родитель. Получить соседей у элемента можно обративишись к свойствам: `nextSibling` и `previousSibling`, а к родителю `parentNode`.

### Поиск элементов

Для получения роизвольного элемента страницы, можно воспользоваться методами поиска.

#### getElementById

Позволяет получить элемент по атрибуту `id`.

```html
<div id="elem">
  <div id="elem-content">Элемент</div>
</div>

<script>
  // Получить элемент
  let elem = document.getElementById('elem');

  // Сделать его фон красным
  elem.style.background = 'red';
</script>
```

#### getElementsByClassName

Возвращает элементы, которые имеют данный CSS-класс.

#### getElementsByName

Возвращает элементы с заданным атрибутом `name`.

#### querySelectorAll

Возвращает все элементы, удовлетворяющие данному CSS-селектору.

```html
<ul>
  <li>Этот</li>
  <li>тест</li>
</ul>
<ul>
  <li>полностью</li>
  <li>пройден</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    console.log(elem.innerHTML); // "тест", "пройден"
  }
</script>
```

#### querySelector

Возвращает первый элемент, соответствующий данному CSS-селектору.

#### matches

Проверяет, удовлетворяет ли элемент CSS-селектору, и возвращает true или false.

### Изменение элементов

#### Создание элементов

DOM-узел можно создать двумя методами:

- `document.createElement(tag)` – Создаёт новый элемент с заданным тегом;
- `document.createTextNode(text)` – Создаёт новый текстовый узел с заданным текстом;
- `elem.cloneNode(deep)` – Клонирует элемент, если deep==true, то со всеми дочерними элементами;

```js
const content = document.createElement('main');
content.className = "application";
content.innerHTML = '<div><h1>Заголовок</h1><p>Контент страницы</p></div>';

document.body.append(content);
```

Методы вставки элементов:

- `node.append(...nodes or strings)` – добавляет узлы или строки в конец `node`;
- `node.prepend(...nodes or strings)` – вставляет узлы или строки в начало `node`;
- `node.before(...nodes or strings)` – вставляет узлы или строки до `node`;
- `node.after(...nodes or strings)` – вставляет узлы или строки после `node`;
- `node.replaceWith(...nodes or strings)` – заменяет `node` заданными узлами или строками;

#### Удаление элементов

Для удаление элементов используется метод `remove`.

```js
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

document.body.append(div);
setTimeout(() => div.remove(), 1000);
```

#### Устаревшие методы

- `parentElem.appendChild(node)`
- `parentElem.insertBefore(node, nextSibling)`
- `parentElem.replaceChild(node, oldChild)`
- `parentElem.removeChild(node)`
- `document.write`

### Стили и классы

Как правило, существует два способа задания стилей для элемента:

1. Создать класс в CSS и использовать его: `<div class="..."`>
2. Писать стили непосредственно в атрибуте style: `<div style="...">`.

JavaScript может менять и классы, и свойство `style`.

Доступ к атрибуту класса элемента осуществляется с помощтю свойства `className`.

```js
console.log(element.className);
```

Доступные методы;

- `elem.classList.add/remove("class")` – добавить/удалить класс.
- `elem.classList.toggle("class")` – добавить класс, если его нет, иначе удалить.
- `elem.classList.contains("class")` – проверка наличия класса, возвращает true/false.

Свойство `elem.style` – это объект, который соответствует тому, что написано в атрибуте `style`.

Свойство `style.cssText` соответствует всему атрибуту `style`, полной строке стилей.

## BOM (Browser Object Model)

Объектная модель браузера (Browser Object Model, BOM) – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.

Состоит из объектов:

- `Объект Screen` – содержит информацию об экране пользователя.
- `Объект Navigator` – содержит информацию о браузере посетителя страницы.
- `Объект Location` – может использоваться для получения адреса (URL) текущей страницы и перенаправления браузера на новую страницу.
- `Объект History` – содержит историю посещенных браузером страниц
- `Всплывающие окна сообщений (alert)`
- `События по таймеру`
- `JavaScript Cookies` – позволяют хранить пользовательскую информацию в веб-страницах.

```js
console.log('Ширина экрана', window.screen.width);
console.log('Высота экрана', window.screen.height);
console.log('Доступная ширина экрана', window.screen.availWidth);
console.log('Доступная высота экрана', window.screen.availHeight);

console.log('Информация о текущем браузере', window.navigator.userAgent);
console.log('Информация о платформе', window.navigator.platform);

console.log('Текущий URL', window.location.href);

window.history.back(); // Возврат на предыдущую страницу
window.history.forward(); // Переход вперед

window.alert('Окно с предупреждением!');
window.confirm('Окно с подтверждением');
window.prompt('Введите текст', 'текст по умолчанию');

window.setTimeout(function() {
  window.alert('Прошло 3 секунды!');
}, 3000);

// Выполняет функцию каждую секунду
const interval = window.setInterval(function() {
    var d = new Date();
    document.getElementById('clock').innerHTML = d.toLocaleTimeString();
}, 1000)

// Останавливает выполнение функции, вызываемой методом setInterval()
window.clearInterval(interval);

document.cookie = 'username=John Snow';
document.cookie = 'username=John Snow; expires=Thu, 01 Dec 2020 12:00:00 UTC';
console.log('Cookie пользователя:', document.cookie);
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Удаление cookie
```

## Браузерные события

`Событие` – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).

События и их обработчики представляют собой основную технику в JavaScript для реагирования на события, возникающие, когда браузер получает доступ к web-странице, включая события о подготовке страницы к отображению, взаимодействии с ее содержимым, в зависимости от устройства, на котором браузер был запущен, и многие другие случаи, такие как воспроизведение потоковой медиа-информации или расчет времени анимации.

Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.

### События мыши

- `click` – Одинарный щелчок (нажата и отпущена кнопка мыши);
- `dblclick` – Двойной щелчок;
- `contextmenu` – Щелчок правой кнопкой мыши на элементе;
- `selectstart` – Начало выделения контента.;
- `Изменение` – выделения скриптом.;
- `mousewheel` – Нажата кнопка мыши в пределах текущего элемента;
- `mousemove` – Перемещение курсора мыши в пределах текущего элемента;
- `mouseout` – Курсор мыши выведен за пределы текущего элемента;
- `mouseover` – Курсор мыши наведен на текущий элемент;
- `mouseup` – Отпущена кнопка мыши в пределах текущего элемента;
- `mousedown` – Нажата кнопка мыши в пределах текущего элемента;

### События клавиатуры

- `keydown` – Нажата клавиша на клавиатуре;
- `keypress` – Нажата и отпущена клавиша на клавиатуре;
- `keyup` – Отпущена клавиша на клавиатуре;

### События элементов форм

- `focus` – Получение элементом фокуса (щелчок мышью на элементе или очередное нажатие клавиши табуляции);
- `blur` – Потеря текущим элементом фокуса, т.е. переход к другому элементу. Возникает при щелчке мышью вне элемента либо нажатии клавиши табуляции;
- `change` – Изменение значений элементов формы. Возникает после потерей элементом фокуса, т.е. после события blur;
- `reset` – Сброс данных формы ( щелчок по кнопке `<input type="reset">`);
- `select` – Выделение текста в текущем элементе;
- `submit` – Отправка данных формы ( щелчок по кнопке `<input type="submit">`);
- `abort` – Прерывание загрузки изображения;

### События документа

- `DOMContentLoaded` – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

### CSS события

- `transitionend` – когда CSS-анимация завершена.

### Обработчики событий

#### HTML атрибут

```html
<input value="Нажми меня" onclick="alert('Клик!')" type="button">
```

#### Свойства DOM-объекта

```html
<input id="elem" type="button" value="Нажми меня!">
<script>
  elem.onclick = function() {
    alert('Клик!');
  };
</script>
```

#### addEventListener

Позволяет, в отличие от предыдущих примеров, повесить несколько обработчиков на одно событие.

```js
function handler() {
  alert('Клик!');
}

input.addEventListener('click', handler);
// ...
input.removeEventListener('click', handler);
```

### Отмена действия браузера

Есть два способа отменить действие браузера:

- Основной способ – это воспользоваться объектом `event`. Для отмены действия браузера существует стандартный метод `event.preventDefault()`.
- Если же обработчик назначен через on<событие> (не через addEventListener), то также можно вернуть false из обработчика.
