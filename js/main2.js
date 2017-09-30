        success: function(data) {
            var results = document.getElementById("results")
            for(i = 0; i < data.items.length; i++){

                var jdata = data.items[i].volumeInfo

                var newDiv = document.createElement('DIV')
                newDiv.className = "col-md-4 animated fadeInDownBig"

                var newAuthor = document.createElement('h3')
                var newTitle = document.createElement('h3')
                newTitle.className = "title"
                var author = document.createTextNode('Author: ' + jdata.authors[0])
                var title = document.createTextNode(jdata.title)
                newAuthor.appendChild(author)
                newTitle.appendChild(title)
                newDiv.appendChild(newAuthor)
                newDiv.appendChild(newTitle)

                var newImg = document.createElement('IMG')
                newImg.className = "images"
                newImg.setAttribute('src', jdata.imageLinks.thumbnail)
                newDiv.appendChild(newImg)

                document.getElementById('results').appendChild(newDiv)