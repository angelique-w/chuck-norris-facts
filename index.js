function fetchChuckNorrisJSON() {
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .then(function(chuckNorris) {
        console.log('data decoded from JSON:', chuckNorris);
  
        const chuckNorrisHtml = `
          <img src="${chuckNorris.icon_url}" />
          <p>${chuckNorris.value}</p>
        `;
        document.querySelector('#chuck-norris').innerHTML = chuckNorrisHtml;
      });
  }
  
  fetchChuckNorrisJSON();