// Determines button clicked via id
function myFunction(id) {
  document.calc.result.value+=id;
}
function concat(f,s){
  return f+s;
}

// Clears calculator input screen
function clearScreen() {
  document.calc.result.value="";
}

// Calculates input values
function calculate() {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
  } catch(err){
      document.calc.result.value="Error";
    }
}


$("#total").click(function(){ alert("Total Value Calculated :"+ $(".ttl").val()) })