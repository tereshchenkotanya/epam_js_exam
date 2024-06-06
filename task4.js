document.addEventListener("DOMContentLoaded", function () {
  const userList = document.getElementById("user-list");
  const userNames = userList.getElementsByClassName("user-name");

  for (let user of userNames) {
    user.addEventListener("click", function () {
      alert(`Hello, ${user.textContent}`);
    });
  }
});
