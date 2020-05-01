const CHARACTEER_ENDPOINT_URL = 'https://rickandmortyapi.com/api/character/?name=';

class App {
  init() {
    const searchInput = document.querySelector('input.search-input');
    searchInput.addEventListener('change', (e) => this.search(e));

    this.searchResultsContainer = document.querySelector('div.search-results');
  }

  search(e) {
    const query = e.target.value;
    if (query !== '') {
      fetch(CHARACTEER_ENDPOINT_URL + query)
        .then(blob => blob.json())
        .then(response => {
          const characters = response.results;
          const htmlResults = characters.map((character) => {
            const name = character.name;

            return `
              <li>
                ${name}
              </li>
            `;
          }).join('');

          this.searchResultsContainer.innerHTML = htmlResults;
        });
    }
  }
}

const application = new App();
application.init();
