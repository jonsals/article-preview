var isActive = false;
$(document).ready(function () {
  $("#share").click(function () {
    $("#shareBox").toggle(display == true);
  });
});

document.addEventListener("click", function (event) {
  if (isActive === true) {
    var isClicked = document.getElementById("shareBox").contains(event.target);
    if (!isClicked) {
      $("#shareBox").addClass("hidden");
    } else {
      console.log("inside");
    }
  } else return;
});

$("#share").click(function () {
  $("#shareBox").removeClass("hidden");
  setTimeout(function () {
    isActive = true;
    console.log("is active");
  }, 100);
});
