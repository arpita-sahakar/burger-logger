// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  //on click event to save the burger-name in the database
  $("#submit").on("click", function (event) {
    console.log("hello");
    //preventDefault on a submit event.
    event.preventDefault();
    let burgerName = $("#text-area").val();
    let newBurger = {
      name: burgerName,
    };
    // Sending the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });

  // on click of devour it button set the devour flag to true and call update api
  $(".devour").on("click", function (event) {
    //preventDefault on a submit event.
    event.preventDefault();
    console.log($(this).attr("burgerId"));
    let id = $(this).attr("burgerId");
    let devoured = {
      devoured: 1,
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
