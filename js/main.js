"use strict"
// JS for Google books api

$(document).ready(function() {

  function bookSearch() {
    // console.log('book search invoked');
    var search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = '';
    console.log(search);

    // AJAX call to Google Books api
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json",
      success: function(data) {
        // See json data
        console.log(data)
        // loop through data and display results
        for (var i = 0; i < data.items.length; i++){

          var booksData = data.items[i].volumeInfo;

          // create div to display each book record
          var resultsDiv = document.createElement('div');
          resultsDiv.className = 'col-md-4 animated fadeIn books';
          // Add message to results div
          document.getElementById('message').textContent = "Click Image to Get More Info"

          // create div to show book image, add class and image source
          var bookImg = document.createElement('img');
          bookImg.className = 'images';
          bookImg.setAttribute('src', booksData.imageLinks.thumbnail);
          // Append image to resultDiv
          resultsDiv.appendChild(bookImg);
          
          // create title, author, publish elements
          var title   = document.createElement('h4');
          var author  = document.createElement('h4');
          var publish = document.createElement('h4');
          
          // add text to the title element
          var titleText   = document.createTextNode(booksData.title);
          
          // check if json has author listed then add text
          if (booksData.authors){
            var authorText  = document.createTextNode('By ' + booksData.authors);
            } else {
              authorText = document.createTextNode('No author listed')
            }

          // check if json has publish data listed then add text
          // used moment.js to format the date to Month day, year
          if (booksData.publishedDate) {
            var date = moment(booksData.publishedDate).format('MMM DD, YYYY');
            console.log(date);
            var publishText = document.createTextNode('Published ' + date);
            } else {
            publishText = document.createTextNode('Publish date unknown');
            }    
          
          // append text to elements
          title.appendChild(titleText);
          author.appendChild(authorText);
          publish.appendChild(publishText);

          // Append elements to resultsDiv
          resultsDiv.appendChild(title);
          resultsDiv.appendChild(author);
          resultsDiv.appendChild(publish);


          // Append resultDiv to results div
          document.getElementById('results').appendChild(resultsDiv);
        }
      },
      type: "GET"
    }); //End of AJAX
  } //End of bookSearch function

  // Event Listener, when search btn is clicked
  document.getElementById('search-btn').addEventListener('click', bookSearch, false);


}); //End of document ready