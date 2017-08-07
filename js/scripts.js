$(document).ready(function(){
  var optionValues =
    "<option value='black'>Black</option><option value='white'>White</option><option value='red'>Red</option><option value='orange'>Orange</option><option value='yellow'>Yellow</option><option value='green'>Green</option><option value='blue'>Blue</option><option value='purple'>Purple</option>"

    $('#firstColorChoice').append(optionValues)
    $('#secondColorChoice').append(optionValues)
    $('#thirdColorChoice').append(optionValues)

  $("form#updateBackground").submit(function(event){
    event.preventDefault();

    var firstColor = $("select#firstColorChoice").val();
    var secondColor = $("select#secondColorChoice").val();
    var thirdColor = $("select#thirdColorChoice").val();

    $("#wrapper").css({
      "background": "linear-gradient(33deg, " + firstColor + ", " + secondColor + ", " + thirdColor + ")",
      "background-size": "1800% 1800%"
    });
  });
});
