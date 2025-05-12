export class CalculatorModel {
  private _value: string;
  private _accumulator: number;
  private _clearInput: boolean;
  private _operator: string;

  static DO_NOT_CLEAR_INPUT = false;
  static CLEAR_INPUT = true;

  constructor(
    value: string = null,
    accumulator: number = null,
    operator: string = null,
    clearInput = false,
  ) {
    this._value = value;
    this._accumulator = accumulator;
    this._operator = operator;
    this._clearInput = clearInput;
  }

  get value() {
    return this._value || "0";
  }

  numberTyped(newValue: string) {
    return new CalculatorModel(
      this._clearInput || !this.value
        ? newValue
        : (this.value === "0" ? "" : this._value) + newValue,
      this._accumulator,
      this._operator,
      CalculatorModel.DO_NOT_CLEAR_INPUT,
    );
  }

  dotType() {
    return new CalculatorModel(
      this._value?.includes(".") ? this._value : this._value + ".",
      this._accumulator,
      this._operator,
      CalculatorModel.DO_NOT_CLEAR_INPUT,
    );
  }

  clear() {
    return new CalculatorModel();
  }

  operatorType(operator: string) {
    return this.calculate(operator);
  }

  calculate(nextOperation: string = null) {
    const acc = !this._operator
      ? parseFloat(this._value)
      : eval(`${this._accumulator} ${this._operator} ${this._value}`);
    const value = !this._operator ? this._value : `${acc}`;

    return new CalculatorModel(
      value,
      acc,
      nextOperation,
      nextOperation
        ? CalculatorModel.CLEAR_INPUT
        : CalculatorModel.DO_NOT_CLEAR_INPUT,
    );
  }
}
