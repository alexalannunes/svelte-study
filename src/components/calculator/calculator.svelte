<script lang="ts">
  import { CalculatorModel } from "../../model/calculator";

  import Button from "./button.svelte";
  import CalculatorInput from "./calculator-input.svelte";
  import CalculatorRow from "./calculator-row.svelte";

  let calculatorValue = $state(new CalculatorModel());

  function numberTyped(num: string) {
    calculatorValue = calculatorValue.numberTyped(num);
  }
  function dotTyped() {
    calculatorValue = calculatorValue.dotType();
  }
  function clear() {
    calculatorValue = calculatorValue.clear();
  }
  function operatorTyped(operator: string) {
    calculatorValue = calculatorValue.operatorType(operator);
  }
  function calculate() {
    calculatorValue = calculatorValue.calculate();
  }
</script>

<div class="calculator">
  <CalculatorInput value={calculatorValue.value} />

  <CalculatorRow>
    <Button value="7" onClick={numberTyped} />
    <Button value="8" onClick={numberTyped} />
    <Button value="9" onClick={numberTyped} />
    <Button value="+" isOperator onClick={operatorTyped} />
  </CalculatorRow>
  <CalculatorRow>
    <Button value="4" onClick={numberTyped} />
    <Button value="5" onClick={numberTyped} />
    <Button value="6" onClick={numberTyped} />
    <Button value="-" isOperator onClick={operatorTyped} />
  </CalculatorRow>
  <CalculatorRow>
    <Button value="1" onClick={numberTyped} />
    <Button value="2" onClick={numberTyped} />
    <Button value="3" onClick={numberTyped} />
    <Button value="/" isOperator onClick={operatorTyped} />
  </CalculatorRow>
  <CalculatorRow>
    <Button value="0" />
    <Button value="," isHighlight onClick={dotTyped} />
    <Button value="C" isHighlight onClick={clear} />
    <Button value="*" isOperator onClick={operatorTyped} />
  </CalculatorRow>
  <CalculatorRow>
    <Button value="=" onClick={calculate} isFull />
  </CalculatorRow>
</div>

<style>
  .calculator {
    --background: #333;
    padding: 10px;
    border-radius: 4px;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
</style>
