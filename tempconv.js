function convert() {
    var tempInput = document.getElementById("temperature").value;
    var unitInput = document.querySelector('input[name="unit"]:checked').value;
    var result = document.getElementById("result");
    var unit = document.getElementById("unit");
    
    if (isNaN(tempInput)) {
      result.innerHTML = "Please enter a valid number";
      unit.innerHTML = "";
    } else {
      if (unitInput === "Celsius") {
        var convertedTemp = (parseFloat(tempInput) * 1.8) + 32;
        result.innerHTML = convertedTemp.toFixed(2);
        unit.innerHTML = "\xB0F";
      } else {
        var convertedTemp = (parseFloat(tempInput) - 32) / 1.8;
        result.innerHTML = convertedTemp.toFixed(2);
        unit.innerHTML = "\xB0C";
      }
    }
  }