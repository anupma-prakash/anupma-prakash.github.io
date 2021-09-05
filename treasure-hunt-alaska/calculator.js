/* Simple calculator functionality */

var appendDigits = false

function clearDisplay()
{
  document.calculator.display.value = 0
  appendDigits = false
}

function number(digit)
{
  if (appendDigits) {
    document.calculator.display.value += digit
  }
  else {
    document.calculator.display.value = digit
    appendDigits = true
  }
}

function operator(operation)
{
  document.calculator.display.value += operation
}

function calculate(display)
{
  document.calculator.display.value = eval(document.calculator.display.value)
    appendDigits = false
}
