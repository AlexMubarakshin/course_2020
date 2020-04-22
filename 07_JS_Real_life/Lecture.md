# Браузерный JS в реальной жизни

## Автоматизация

В предыдущих лекциях были затронуты валидаторы [HTML](https://validator.w3.org/) и CSS.

Но каждый раз копировать верстку и вставлять в окно браузера – муторное и затратное по времени занятие.

Этот процесс и другие повторяющиеся действия возможно автоматизировать.

### Локальный веб-сервер для разработки

Для начала сконфигурируем локальный веб-сервер для разработки. Он необходим по нескольким причинам:

- AJAX запросы не работают с протоколом `file://`.
- Не нужно в ручную обновлять страницу при изменении файлов, что значительно ускоряет разработку.

Для этой цели можно воспользоваться npm пакетом [live-server](https://www.npmjs.com/package/live-server).

Первое что необходимо сделать – `создать npm проект`. Создайте папку под проект и  выполните через терминал:

```bash
# Инициализируем npm проект
npm init

# Добавляем в проект live-server
npm i -D live-server
```

Далее в папке проекта `создайте папку src`. И создайте файлы `index.html`, `styles.css` и `index.js`.

Подключите внешние ресурсы в html страницу.

Для удобного запуска сервера из терминала добавим следующую строчку в `package.json`:

```json
  "scripts": {
    "server": "live-server ./src",
  },
```

Это позволит запустить веб-сервер с помощью команды:

```bash
npm run server
```

Выполнив команду, в браузере откроется вкладка с html страницой из папки src.

### Валидация HTML

Для валидации `html` верски, можно использовать пакет [html-validate](https://www.npmjs.com/package/html-validate).

```bash
npm i -D html-validate
```

В `package.json` добавим команду `validate-html`:

```json
  "scripts": {
    "server": "live-server ./src",
    "validate-html": "html-validate ./src",
  },
```

Теперь можно выполнить валидацию `html` файлов с помощью команды:

```bash
npm run validate-html
```

### Валидация CSS

Для валидации `css` установим [stylelint](https://www.npmjs.com/package/stylelint).

```bash
npm i -D stylelint
```

В `package.json` добавим команду `validate-css`:

```json
  "scripts": {
    "server": "live-server ./src",
    "validate-html": "html-validate ./src",
    "validate-css": "stylelint src/**/*.css"
  },
```

Теперь можно выполнить валидацию `css` с помощью:

```bash
npm run validate-css
```

### Валидация JavaScript'а

Для валидации JavaScript'а на данный момент самое популярное решение – [eslint](https://www.npmjs.com/package/eslint).

```bash
npm i -D eslint
```

Далее необходимо создать конфиг:

```bash
./node_modules/.bin/eslint --init
```

Либо создать файл `.eslintrc.js` в корне проекта и вставить в него следующее:

<details>
  <summary>.eslintrc.js</summary>

  ```javascript
  module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
  };
  ```
  
</details>

А в `package.json` добавить скрипт `validate-js`:

```json
    "server": "live-server ./src",
    "validate-html": "html-validate ./src",
    "validate-css": "stylelint src/**/*.css",
    "validate-js": "eslint --ext .js src/"
  },
```

Выполнив `npm run validate-js`, можно получить отчет с ошибками или замечаниями по JavaScript коду.

### Реакция на сохранение

Зачем запускать валидацию в ручную если ее можно выполнять автоматически на каждое сохранение `.html`, `.css` или `.js` файла?

Для этого установим пакет [npm-watch](https://www.npmjs.com/package/npm-watch).

Он позволит запускать скрипты из `package.json` каждый раз когда файлы будут изменены.

```bash
npm i -D npm-watch
```

В `package.json` добавим раздел `watch` и аналогичную команду в разделе `scripts`:

```json
  "watch": {
    "validate-js": "./src",
    "validate-css": {
      "patterns": [
        "src"
      ],
      "extensions": "css"
    },
    "validate-html": {
      "patterns": [
        "src"
      ],
      "extensions": "html",
      "quiet": true,
      "legacyWatch": true
    }
  },
  "scripts": {
    "server": "live-server ./src",
    "validate-html": "html-validate ./src",
    "validate-css": "stylelint src/**/*.css",
    "validate-js": "eslint --ext .js src/",
    "watch": "npm-watch"
  },
```

Теперь выполнив `npm run watch`, запустится `watch'ер`, который будет запускать скрипт валидации, каждый раз когда будет сохранен `.html`, `.css` или `.js` файл в папке `src`.

#### Параллельные npm скрипты

На текущий момент чтобы комфортно разрабатывать необходимо запускать в 2х терминалах скрипты запуска сервера и валидации.

Для запуска нескольких скриптов в одном процессе воспользуемся пакетом `npm-run-all`.

```bash
npm i -D npm-run-all
```

И в `package.json` необходимо добавить скрипт `start`:

```json
  "scripts": {
    "server": "live-server ./src",
    "start": "npm-run-all --parallel server watch",
    "validate-css": "stylelint src/**/*.css",
    "validate-html": "html-validate ./src",
    "validate-js": "eslint --ext .js src/",
    "watch": "npm-watch"
  },
```

Выполнив в терминале `npm run start` будет запущен веб-сервер и валидация проекта.

## Сборка проекта

C развитием веба, объем и сложность CSS и JS все увеличивались, и вид, в котором удобно разрабатывать, стал сильно отличаться от вида, в котором нужно показывать результат пользователю. Появились такие задачи, как конкатенация (склеивание) файлов, минимизация кода и даже предварительная компиляция. Результатом этого стали специализированные системы сборки фронтенда.

Система сборки обычно делает следующее:

- конкатенирует все JS-файлы в один (в нужном порядке, мы же не хотим загрузить наши скрипты раньше, чем jQuery);
- проверяет JS-код на валидность (например, с помощью JSHint);
- минимизирует код, по необходимости его обфусцирует (то есть делает непонятным);
- конкатенирует CSS-файлы (порядок тут тоже важен, так как свойства часто переопределяются);
- минимизирует CSS;
- складывает файлики в отдельную директорию, из которой ты и подключаешь их в своем HTML.
  
Зачастую эта простая схема усложняется дополнительными требованиями: прогоняются тесты, компилируется код CSS-препроцессоров, оптимизируются картинки, компилируются шаблоны.

### Webpack

Webpack – система сборки, которая предоставляет не только бандлинг (компоновку) модулей, но и может выполнять задачи, которыми занимаются утилиты для автоматизации задач. К тому же, вебпак не ограничивается JavsScript-файлами, он может работать с другой статикой вроде CSS, картинок, html-компонентов и др. Вебпак также поддерживает очень полезную фичу — code splitting (разбиение кода). Большое приложение можно разбить на куски, которые загружаются по мере необходимости.

