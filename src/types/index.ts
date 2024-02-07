export type ApiListResponse<Type> = {
    total: number,
    items: Type[]
};

export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';


export type EventName = string | RegExp;
export type Subscriber = Function;
export type EmitterEvent = {
    eventName: string,
    data: unknown
};

export interface IEvents {
    on<T extends object>(event: EventName, callback: (data: T) => void): void;
    emit<T extends object>(event: string, data?: T): void;
    trigger<T extends object>(event: string, context?: Partial<T>): (data: T) => void;
}

export interface IFormState {
    valid: boolean;
    errors: string[];
}

export interface IModalData {
    content: HTMLElement;
}

export interface IWebLarekAPI {
    getProductList: () => Promise<IProduct[]>; 
    getProductItem: (id: string) => Promise<IProduct>; 
    orderProducts: (order: IOrder) => Promise<IOrderResult>; 
}

export interface IOrderResult {
    id: string; 
    total: number | null; 
}

export interface IProduct {
    id: string; 
    title: string; 
    description: string; 
    price: number | null; 
    category: string;
    image: string; 
}

export interface IAppState {
    catalog: IProduct[]; 
    basket: IProduct[]; 
    order: IOrder | null; 
    preview: string | null; 
    orderForm: IOrderForm | null; 
    contactForm: IContact | null; 
    formErrors: FormErrors;
}

export interface IOrder extends IOrderForm, IContact {
    total: number | null; 
    items: string[]; 
}

export interface IOrderForm {
    payment: string; 
    address: string; 
}

export interface IContact {
    email: string; 
    phone: string;
}

export interface IDelivery {
    payment: string;
    address: string;
  }

export interface FormErrors {
    address?: string; 
    email?: string; 
    phone?: string; 
}

export interface IPage {
    counter: number; 
    catalog: HTMLElement[]; 
}


export interface IFormState {
    valid: boolean; 
    errors: string[]; 
}

export interface IActions {
    onClick: (event: MouseEvent) => void; 
}

export interface ICard extends IProduct {
    index?: string; 
    buttonTitle?: string; 
}

export interface IBasketView {
    items: HTMLElement[]; 
    total: number; 
}

export interface ISuccess {
    total: number; 
}

export interface ISuccessActions {
    onClick: () => void; 
}