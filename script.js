// by click on "edit profile" link, profile name will change

function changeName() {
  var name = document.getElementById("edit");

  if (name.innerText === "Jane Doe") {
    name.innerText = "Parisa Sohrabi";
  } else {
    name.innerText = "Jane Doe";
  }
}

// by click on remove button in "connection request" box, one user will remove
function removeConectionRequest1() {
  var removeConnection1 = document.getElementById("remove1");
  removeConnection1.remove();
}

function removeConectionRequest2() {
  removeConnection2 = document.getElementById("remove2");
  removeConnection2.remove();
}

// either remove button decrease the "connection request" number
var removeButtonClicked1 = document.querySelector("#decrease1");
var removeButtonClicked2 = document.querySelector("#decrease2");
var connectionRequestNumber = document.querySelector(".number");
removeButtonClicked1.addEventListener("click", decNumber);
removeButtonClicked2.addEventListener("click", decNumber);
function decNumber() {
  var num = connectionRequestNumber.innerText;
  num--;
  connectionRequestNumber.innerText = num;
}

// by click on accept button it will increase the "your connections" number
function addConnectionsNumber() {
  var connectionsNumber = parseInt(
    document.querySelector(".follower-numbers").innerText
  );
  connectionsNumber += 1;
  document.querySelector(".follower-numbers").innerText = connectionsNumber;
  console.log(connectionsNumber);
}
