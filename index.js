function changeColor() {
  let bcg = document.body.style.backgroundColor;

  if (bcg == "") {
    document.body.style.backgroundColor = "black";
  } else if (bcg == "black") {
    document.body.style.backgroundColor = "red";
  } else if (bcg == "red") {
    document.body.style.backgroundColor = "yellow";
  } else if (bcg == "yellow") {
    document.body.style.backgroundColor = "";
  }
  
  let clr = document.getElementById("change").style.color;
  let bcg2 = document.getElementById("change").style.backgroundColor;
  
  if (clr == "" && bcg2 == "") {
    document.getElementById("change").style.color = "red";
    document.getElementById("change").style.backgroundColor = "white";
  } else if (clr == "red" && bcg2 == "white") {
    document.getElementById("change").style.color = "white";
    document.getElementById("change").style.backgroundColor = "orange";
  } else if (clr == "white" && bcg2 == "orange") {
    document.getElementById("change").style.color = "orange";
    document.getElementById("change").style.backgroundColor = "black";
  } else if (clr == "orange" && bcg2 == "black") {
    document.getElementById("change").style.color = "";
    document.getElementById("change").style.backgroundColor = "";
  }

  localStorage.setItem("BodyBackgraundColor", document.body.style.backgroundColor);
  localStorage.setItem("ButtonColor", document.getElementById("change").style.color);
  localStorage.setItem("ButtonBackgraundColor", document.getElementById("change").style.backgroundColor);
}