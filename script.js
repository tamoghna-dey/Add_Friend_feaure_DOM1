var istatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var flag = 0;

addFriend.addEventListener("click", function () {
  if (flag == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    addFriend.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    istatus.innerHTML = "Strangers";
    istatus.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    flag = 0;
  }
});
