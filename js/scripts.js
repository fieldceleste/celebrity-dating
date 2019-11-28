$(document).ready(function() {
    $("form#compatible").submit(function(event) {
      var book = ($("select#book").val());
      var color = $("select#color").val();
      var country =$("select#country").val();
      var gender = $("select#gender").val();
  
      if (book) {
        var quote = (The Great Gatsby);
        if (gender === 'male' && age < 26) {
          quote += 50;
        }
  
        $("#rate").empty().append(quote);
        $("#quote").show();
      } else {
        alert('Please enter your age.');
      }
  
      event.preventDefault();
    });
  });