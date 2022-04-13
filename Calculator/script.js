function reset() {
    document.getElementById("screen").value=" "
} 

function display (perform) {
    document.getElementById("screen").value+=perform;
}

function backspace() {
     var back= document.getElementById("screen").value;
     document.getElementById("screen").value  = back.slice(0,-1);
}

function result() {
    try {
    var first= document.getElementById("screen").value
			var second = eval(first);
			document.getElementById("screen").value = second;       
    }
    catch {
        document.getElementById("screen").value="syntax_error";
    }
}
var input = document.getElementById("screen");
input.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    result()
  }
  console.log(event);
});


  document.getElementById('screen').onkeydown = function(e) {
     console.log(e)
    if(!((e.keyCode > 95 && e.keyCode < 106)
    || (e.keyCode > 47 && e.keyCode < 58) 
    || e.keyCode == 8
    || e.keyCode == 9)) {
      return false;
    }
} 
