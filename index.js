function fetchChuckNorrisJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .then(function(chuckNorris) {
        console.log('data decoded from JSON:', chuckNorris);
  
        // Build a block of HTML
        const chuckNorrisHtml = `
          <img src="${chuckNorris.icon_url}" />
          <p>${chuckNorris.value}</p>
        `;
        document.querySelector('#chuck-norris').innerHTML = chuckNorrisHtml;
      });
  }
  
  fetchChuckNorrisJSON();