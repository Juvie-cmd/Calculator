function display(value) {
  const resultField = document.getElementById("result");
  const currentValue = resultField.value;

  if (value === '.') {
    const parts = currentValue.split(/[\+\-\*\/]/); 
    const lastPart = parts[parts.length - 1];
    if (lastPart.includes('.')) return; 
  }

  resultField.value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (e) {
    alert("Invalid Expression");
    clearResult();
  }
}
