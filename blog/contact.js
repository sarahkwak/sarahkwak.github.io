$(document).ready(function() {
  $('#contact-submit').on('click', function() {
    console.log("hello")
    var message = $("#contact-input").val();
    // var subject = $('#contact-title').val();
    $('#returnmessage').empty();
    if (message == '') {
    alert("Please write something!");
    } else {
      debugger;
      $.ajax({
        url: '',
        type: 'POST',
        dataType: 'JSON',
        data: {message1: message}
      })
      .done(function() {
        console.log("The message is sent. Sarah will contact you if necessary! Thank you for visiting the site!");
      })
      .fail(function() {
        console.log("error");
      }) //fail
    }; //else
  }); //click event
}); //document.ready