//EventEmitter
export type EventName = string | RegExp;
export interface IEvents {
    on<T extends object>(event: EventName, callback: (data: T) => void): void;
    emit<T extends object>(event: string, data?: T): void;
    trigger<T extends object>(event: string, context?: Partial<T>): (data: T) => void;
}

//API
export interface IApi {
    baseUrl: string;
    options: RequestInit;
    get(uri: string): Promise<object>;
    post(uri: string, data: object, method: string): Promise<object>;
  }

  //WebLarekAPI
  export interface IWebLarekAPI {
    getProductList(): Promise<ICard[]>;
    getProductItem(id: string): Promise<ICard>;
    sendOrder(order: IOrder): Promise<IOrderResult>;
}

//Component
export interface IComponent<NodeType extends HTMLElement, DataType extends object> {
    render(data: DataType): NodeType;
    remove():  this;
    show(): this;
    hide(): this;
    setText(value: string): this;
    setLink(value: string): this;
    setImage(src:string, alt:string): this;
    setValue(value: string): this;
    getValue(): string;
    isValid(): boolean;
    addClass(className: string): this;
    removeClass(className: string): this;
    hasClass(className: string): boolean;
    append(element: HTMLElement): this;
    prepend(element: HTMLElement): this;
    bem(element?: string, modifier?: string): string;
    clone(template: string, data?: DataType, name?: string): any;
    mount(selectorElement: HTMLElement | string, data?: any, name?: string): any;
}

// Card
export interface ICard {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number | null;
}

//Modal
export interface IModal {
    container: HTMLElement;
    content: HTMLElement;
    closeButton: HTMLButtonElement;
    setContent(): void;
    open(): void;
    close(): void;
  }
  
  //Form
  export interface IForm {
    container: HTMLElement;
    submit: HTMLButtonElement;
    errors: HTMLElement;
    isValid(): boolean;
    setErrors(error: string): void;
    clear(): void;
  }

  //Basket
  export interface IBasket {
    title: string;
    orderList: HTMLElement[];
    total: string;
  
    setTitle(title: string): void;
    setOrders(orders: HTMLElement[]): void;
    remove(order: HTMLElement): void;
    getTotal(): string;
    accept(): void;
  }

//CardData
export interface ICardData {
    cardArray: ICard[]
    getCardInformation(id: string): ICard;
}

//BasketData
export interface IBasketData {
    total: number;
    setBasketItems(basketItems: ICard[]):void;
    clear(): void;
}

//OrderData
export interface IOrder {
    items: ICard[];
    total: number;
    payment: string;
    email: string;
    phone: string;
    address: string;
}

//Ответ сервера о результате заказа
export interface IOrderResult {
    id: string;
    total: number | null;
}

