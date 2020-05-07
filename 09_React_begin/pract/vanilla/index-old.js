(function () {
  const DATA = [
    {
      "image": "https://images.unsplash.com/photo-1588711811793-3ea0b7ef9fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      "author": "John O'Grady"
    },
    {
      "image": "https://images.unsplash.com/photo-1588673931505-d609754f0b5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      "author": "Peter de Montfort"
    },
    {
      "image": "https://images.unsplash.com/photo-1588616447674-184d7dad1b36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      "author": "Björk Guðmundsdóttir"
    },
    {
      "image": "https://images.unsplash.com/photo-1588603044210-d3364eab3e6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      "author": "Milan Vojnovič"
    }
  ];

  /**
   * Create card element
   *
   * @param {{ image: string; author: string; }} item
   */
  function createCard(item) {
    const card = `
      <div class="list__item">
        <img
          class="list__item_image"
          src=${item.image}
          alt="meidtaion_image">
        <h3 class="list__item_title">${item.author}</h3>
      </div>
    `;

    return card;
  }

  const list = document.querySelector('.list');

  list.innerHTML = DATA.map((item) => createCard(item)).join('');


})();
