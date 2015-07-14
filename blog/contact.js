$.('#submit').on('click', function() {
  var message = $("#message").val();
  $('#returnmessage').empty();
    if (message == '') {
    alert("Please write something!");
    } else {
  $.post("contact_form.php", {
    message1: message
  }, function(data) {
      $("#returnmessage").append(data); // Append returned message to message paragraph.
      if (data == "Your Query has been received, We will contact you soon.") {
      $("#form")[0].reset(); // To reset form fields on success.
      }
      });
      }
      });
}) //click event
