import {Form} from "./common/Form";
import {IDelivery, IActions} from "../types";
import {IEvents} from "../types";
import {ensureElement} from "../utils/utils";

export class Delivery extends Form<IDelivery> {
  protected _cardButton: HTMLButtonElement;
  protected _cashButton: HTMLButtonElement;

  constructor(container: HTMLFormElement, events: IEvents, actions?: IActions) {
    super(container, events);

    this._cardButton = ensureElement<HTMLButtonElement>('button[name="card"]', this.container);
    this._cashButton = ensureElement<HTMLButtonElement>('button[name="cash"]', this.container);
    this._cardButton.classList.add('button_alt-active');

    if (actions?.onClick) {
        this._cardButton.addEventListener('click', actions.onClick);
        this._cashButton.addEventListener('click', actions.onClick);
    }
  }

  toggleButtons(){
    this._cardButton.classList.toggle('button_alt-active');
    this._cashButton.classList.toggle('button_alt-active');
  }

  set address(value: string) {
    (this.container.elements.namedItem('address') as HTMLInputElement).value = value;
  }
}
