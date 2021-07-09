//hide the bottom container
document.getElementById("bottom-container").style.display = "none";

//on clicking button
function result()
{
  //formula of love score
  var num = Math.floor(Math.random()*100)+1;
  var per = document.querySelector(".percentage");
  per.innerHTML = num;
  var sentence = document.querySelector(".message");
  if (num>=80){
   sentence.innerHTML = "made for each other";
  }
  else if (num<80 && num>=60){
    sentence.innerHTML = "Love each other to make it 100%";
  }
  else if (num<60 && num>=30){
    sentence.innerHTML = "Try harder!!!";
  }
  else{
    sentence.innerHTML = "Bad Luck in Love life";
  }

  //result will direct to bottom container
  location.href="#bottom-container";
  document.getElementById("bottom-container").style.display = "block";

  //clearing the input
  document.querySelector(".input1").value = "";
  document.querySelector(".input2").value = "";

}
