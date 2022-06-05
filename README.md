# Bilingo-frontend
Это клиентская часть приложения Bilingo.

### Инструкция по разворачиванию проекта:

1. Склонировать репозиторий на локальное устройство.
2. В консоли перейти в корневую папку проекта.
3. Установить все зависимости - `npm install`.
4. Запустить проект - `npm start`.

#### Ошибки при разворачивании
Если версия Node на вашем устройстве ^17.* - проект может не запуститься командой `npm start`.
Текст ошибки - `Error: error:0308010C:digital envelope routines::unsupported`.
##### Шаги:
1. Открыть `package.json` в корневой папке проекта.
2. Текст в `scripts->start` заменить на `react-scripts --openssl-legacy-provider start`.
