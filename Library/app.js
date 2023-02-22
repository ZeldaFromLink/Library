const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  const libraryEl = document.querySelector('#library');
  libraryEl.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookEl = document.createElement('div');
    bookEl.setAttribute('class', 'book-card');
    bookEl.innerHTML = `
      <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">by ${book.author}</h5>
      </div>
      <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? 'Read' : 'Not Read Yet'}</p>
        <button class='remove-btn' onclick='removeBook(${i})'>Remove</button>
        <button class='toggle-read' onclick='toggleRead(${i})'>Toggle Read</button>
      </div>
      `;
    libraryEl.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const newBookbtn = document.querySelector('.add-book');
newBookbtn.addEventListener('click', () => {
  const newBookForm = document.querySelector('#new-book-form');
  console.log(newBookForm);
  newBookForm.style.display = 'block';
});

document.querySelector('#new-book-form').addEventListener('submit', () => {
  event.preventDefault();
  addBookToLibrary();
});
