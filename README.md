# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

*** Архитектура проекта и реализация классов сделаны на основе проекта "Оно тебе надо" (https://github.com/yandex-praktikum/ono-tebe-nado-oop) *** <br><br> 
## Базовые классы  
### Класс `EventEmitter`

Класс `EventEmitter` - брокер событий, позволяет устанавливать/снимать слушателей событий и вызывать этих слушателей при возниковении событий <br>
`constructor()` - конструктор. <br>
*Реализуемые методы*:
- `on<T extends object>(eventName: EventName, callback: (event: T) => void)` - устанавливает обработчик на событие;
- `off(eventName: EventName, callback: Subscriber)` - снимает обработчик с события;
- `emit<T extends object>(eventName: string, data?: T)` - иницирует событие с указанным именем и  данными;
- `onAll(callback: (event: EmitterEvent) => void)` - используется, чтобы слушать все события;
- `offAll()` - сбрасывает все обработчики событий;
- `trigger<T extends object>(eventName: string, context?: Partial<T>)` - делает коллбек триггер, генерирующий событие при вызове.

### Класс `API`
Класс`API` - обеспечивает работу с данными с сервера, он отвечает за отправку HTTP-запросов и обработку ответов от сервера.<br>
`constructor(baseUrl: string, options: RequestInit)` - конструктор, который на вход принимает базовый URL и общие настройки запросов. <br>
*Реализуемые методы*:<br>
- `get<T>(uri: string): ApiResponse<T>` - выполняет `GET` запросы к указанному URI, возвращает промис с типизированным ответом от сервера;
 - `post<T>(uri: string, data: object, method: ApiPostMethods): ApiResponse<T>` - выполняет `POST` запросы с данными по указанному URI, возвращает промис с типизированным ответом от сервера.

### Класс `Component`
Класс `*Component` - базовый компонент, обеспечивает работу с DOM-элементами, позволяет <br>
 - отображать/скрывать DOM-элемент;
 - изменять атрибуты элемента;
 - добавление/удаление классов элементов; <br>
 `constructor(container: HTMLElement)` - конструктор, на вход принимает контейнер, в котором необходимо создать элемент отображения.
 *Реализуемые методы*:
- `toggleClass(element: HTMLElement, className: string, force?: boolean)` - переключает класс у элемента;
- `setText(element: HTMLElement, value: unknown)` - устанавливает текстовое содержимое элемента;
- `setDisabled(element: HTMLElement, state: boolean)` -  устанавливает или удаляет атрибут `disabled`;
- `setHidden(element: HTMLElement)` - cкрывает элемент;
- `setVisible(element: HTMLElement)` - делает элемент видимым;
- `setImage(element: HTMLImageElement, src: string, alt?: string)` - yстанавливает изображение и альтернативный текст для него;
- `render(data?: Partial<T>)` - рендер компонента.
 
 ### Класс `WebLarekAPI`
 Класс `WebLarekAPI` - класс, в котором есть методы для обращения к серверу (получать информацию о товарах или об одном конкретном, и отправлять заказ на сервер). Этот класс расширяет класс `API`.<br>
 `constructor(cdn: string, baseUrl: string, options?: RequestInit)` - конструктор, на вход принимает базовый URL для API и CDN для изображений. <br>
 *Реализуемые методы*:
- `getProductList(): Promise<IProduct[]>` - получает весь список продуктов с сервера;
- `getProductItem(id: string): Promise<IProduct>` - получает информации об одном продукте по его `id`;
- `orderProducts(order: IOrder): Promise<IOrderResult>` - отправляет информацию о заказе на сервер и получает результат. 

### Класс `Model`
Класс `Model` - абстрактный класс, который предназначен для работы с данными и используется как для представления, так и для работы с данными.<br>
`constructor(data:Partial<T>, events: IEvents)` - конструктор, на вход принимает исходные данные для модели и объект событий для сообщения об изменениях модели. <br>
*Реализуемые методы*: <br>
- `emitChanges(event: string, payload?: object)` - сообщает всем об изменении модели.

## Классы для работы с данными 
Эти классы хранят данные заказа, корзины, карточки, которые пришли с сервера; позволяют вывести и обработать данные <br>
### Класс `AppState`
Класс `AppState` является основной моделью данных для приложения, в нем хранится каталог продуктов, данные о заказе и ошибки валидации форм доставки и контакта. <br>
Этот класс расширяет класс `Model`.<br>
`constructor(data: IAppState)` - конструктор, на вход принимает исходное состояние приложения. <br>
*Реализуемые методы*:
- `clearBasket()` - очистка корзины и генерация соответствующего события;
- `addToBasket(item: Product)` - добавление товара в корзину;
- `removeFromBasket(item: Product)`- удаление товара из корзины;
- `updateBasket()` - обновление состояния корзины;
- `setCatalog(items: IProduct[])` - заполнение каталога товаров;
- `setPreview(item: Product)` - установка товара для предпросмотра;
- `clearOrder()` - очистка данных заказа;
- `setOrderField(field: keyof IOrderForm, value: string)` - заполнение полей формы доставки;
- `setContactField(field: keyof IContactForm, value: string)` - заполнение полей формы контакта.

### Класс `Product` 
Класс `Product` отвечает за хранение данных продукта.<br>
`constructor(data: IProduct)` - конструктор, на вход принимает данные продукта согласно интефейсу `IProduct`.<br>
Конструктор и методы наследуются из класс `Model`.


## Классы для работы с отображением 
В этих классах заполняется информация HTML-элементов, и устанавливаюются обработчики событий на элементы с использованием `EventEmitter` <br><br>
### Класс `Form`
Класс `Form` - класс для работы с формами. <br>
Наследуется от класса `Component` и расширяет его функциональность.<br>


### Класс `Modal`
Класс `Modal` - класс для работы с модальными окнами. <br>
Наследуется от класса `Component` и расширяет его функциональность.<br>
`constructor(container: HTMLElement, events: IEvents)` - конструктор.<br>
*Реализуемые методы*:
- `set content(value: HTMLElement)` - сеттер содержимого модального окна; 
- `open()` - открытие модального окна и инициализация сответствующего события;
- `close()` - закрытие модального окна и инициализация соответствующего события;
- `render(data: IModalData)` - рендер модального окна.

Класс `Card` - класс для работы с карточкой товара <br>
Класс `Basket` - класс для отображения корзины <br>
