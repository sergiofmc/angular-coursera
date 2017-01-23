var student = {
  name : "",
  type : "student"
};

document.addEventListener('DOMContentLoaded', contentLoad);

function contentLoad(event){
  document.getElementById('name').addEventListener("keyup", keyup);
}

function keyup(event){
  calculateNumericOutput();
}
function calculateNumericOutput(){
  student.name = document.getElementById('name').value;

  var totalNameValue=0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue +=student.name.charCodeAt(i);
  }
  //insertando el resultado en la pagina
  var output = "Total numerico del nombre es " + totalNameValue;
  document.getElementById('output').innerText = output;
}
