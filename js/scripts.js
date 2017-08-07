$(document).ready(function(){
  $("form#updateBackground").submit(function(event){
    event.preventDefault();

    var firstColor = $("select.firstColorChoice").val();
    var secondColor = $("select.secondColorChoice").val();
    var thirdColor = $("select.thirdColorChoice").val();

    console.log("color 1", firstColor, "color 2", secondColor, "color 3", thirdColor);

    $("#wrapper").css({
      "background": "linear-gradient(33deg, " + firstColor + ", " + secondColor + ", " + thirdColor + ")",
      "background-size": "1800% 1800%"
      })

    // document.getElementById("wrapper").css("background", function(index) {
    //   return index = "linear-gradient(33deg, white, blue, black)"
    // });

  })
});
