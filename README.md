# Alphabet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Установка и настройка
1. Если не установлен Node.JS, установите (вообще, насколько я помню версии 12 и выше (я использовал 13.5.0))
2. Распаковать мой архив.
3. Открыть терминал в папке проекта и установить зависимости командой 'npm install'
4. После того как зависимости установятся, надо установить глобальный пакет управления: 'npm install -g @angular/cli'
5. На этом должен быть финальный этап:
 1. Если вам нужен временный сервер, то пишем - 'ng serve --open'

А и да, я же не рассказал, как изменять картинки и слова.
В директории 'src/assets' находится файл 'alphabet.json' и директория 'images'.
В файле находится JSON код, и для каждой буквы, вы там можете задать своё слово с изображением, и тестовые слова.
В директории 'images' хранятся картинки, с расширением PNG и названием, равному пункту 'imageWord' в файле 'alphabet.json' (например для буквы A - слово и картинка - 'арбуз' и 'арбуз.png').
