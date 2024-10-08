# CSS

CSS (Cascading Style Sheets) - формальный язык описания внешнего вида документа
(веб-страницы), написанного с использованием языка разметки.

Расширение имени файла - css.

В файле style.css приведен код оформления HTML-элементов из предыдущего урока.

Для того чтобы подключить CSS-файл к HTML-документу необходимо включить элемент
link в элемент head:

    <head>
    	<title>Заголовок сайта</title>
    	<link rel="stylesheet" href="style.css">
    </head>

## Структура компоновки CSS-кода

Для того чтобы обратиться к HTML-элементу и модифицировать его свойства
необходимо задать требуемый селектор и блок объявлений:

    селектор {
    	свойство: значение;
    	свойство: значение;
    }

Для того чтобы модифицировать размер текста всех HTML-элементов h2 на странице
необходимо использовать следующий CSS-код:

    h2 {
    	font-size: 40px;
    }

Для того чтобы модифицировать свойства конкретного элемента h2 необходимо задать
для него атрибут class с произвольным значением:

    <h2 class="subtitle">Подзаголовок</h2>

Для того чтобы обратиться к элементу по имени класса в CSS необходимо
использовать следующую запись:

    .subtitle {
    	font-size: 18px;
    }

## Метатег viewport

Задача метатэга viewport заключается в контроле масштаба отображения страницы

    https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag

## БЭМ-метология

    https://ru.bem.info/methodology/css/

## Справочная информация

    https://developer.mozilla.org/en-US/docs/Web/CSS
    https://www.w3schools.com/css/default.asp
