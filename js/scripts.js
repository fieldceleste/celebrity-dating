$(document).ready(function() {
    $("form#compatible").submit(function(event) {
      var book = $("select#book").val();
      var color = $("select#color").val();
      var gender = $("select#gender").val();
  
      if (book) {
        alert("yes!");
        }
      
  
      
      
        
  
      event.preventDefault();
    });
  });