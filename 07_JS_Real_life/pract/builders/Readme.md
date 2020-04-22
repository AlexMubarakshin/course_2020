# Сборка проекта

Демо проект показывает как подключить сборщик webpack к проекту

Основано на проекте [lulldev/npm-automation-env](https://github.com/lulldev/npm-automation-env/)

## Запуск

```bash
# Установить библиотеки
$ yarn

# Запуск webpack сервера и линтеров
$ yarn start
```

## Доступные команды

```bash
# Запуск всех линтеров
$ yarn validate-all

# Запуск CSS линтера
$ yarn validate-css

# Запуск HTML линтера
$ yarn validate-html

# Запуск JS линтера
$ yarn validate-js

# Запуск webpack в режиме watch, без dev-сервера
$ yarn watch
```
