export type ApiListResponse<Type> = {
    total: number, 
    items: Type[] 
};


export interface IWebLarekAPI {
    getProductList: () => Promise<IProduct[]>; 
    getProductItem: (id: string) => Promise<IProduct>; 
    orderProducts: (order: IOrder) => Promise<IOrderResult>; 
}

export interface IOrderResult {
    id: string; 
    total: number | null; 
}

export type ApiResponse<T> = Promise<T>; 

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
    contactForm: IContactForm | null; 
    formErrors: FormErrors;
}

export interface IOrder extends IOrderForm, IContactForm {
    total: number | null; 
    items: string[]; 
}

export interface IOrderForm {
    payment: string; 
    address: string; 
}

export interface IContactForm {
    email: string; 
    phone: string;
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

export interface IModalData {
    content: HTMLElement; 
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