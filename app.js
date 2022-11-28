// UI Elements 
const bookForm = document.getElementById('bookForm'),
      table = document.getElementsByClassName('table'), 
      btnSubmit = document.getElementById('btnSubmit'), 
      bookName = document.getElementById('bookName'), 
      author = document.getElementById('author'),
      isbn = document.getElementById('isbn'), 
      tableBody = document.getElementById('tableBody'); 

// Book Constuctor 
class Book {
    constructor(bookName, author, isbn){
        this.bookName = bookName; 
        this.author = author; 
        this.isbn = isbn ; 
    }
    // Displays Book
    displayBook(){
        let bookRow = document.createElement('tr'); 
        bookRow.innerHTML = `
        <th scope="row">${this.bookName}</th>
        <th>${this.author}</th>
        <th>${this.isbn}</th>
        <th>
        <a href="#" class="float-end delete-item">
        <button type="button" class="btn-close" aria-label="Close"></button>
        </a>
        </th>
        `;
        tableBody.appendChild(bookRow);
    }
    deleteBook(){
        console.log("Delete Book from UI and ");
    }
}

// Load Event Listners
loadEventListners(); 
// Add Book
function loadEventListners() {
    // Add Book Event
    btnSubmit.addEventListener('click', (e)=>{
        // Validation of fields
        if (bookName.value === '' || author.value === '' || isbn.value === '') {
                const errorMessage = document.createElement('div'); 
                errorMessage.innerHTML = 'Please check the form for missing values';
                errorMessage.classList.add('alert');
                errorMessage.classList.add('alert-danger');
                errorMessage.classList.add('mt-2');
                bookForm.appendChild(errorMessage);
            setTimeout(()=>{
                bookForm.removeChild(bookForm.lastChild); 
            }, 4000)
        } else {
        // Construct Book
        let book = new Book(bookName.value, author.value, isbn.value)
        // Add Book to Local Storage
        storeBookInLocalStorage(book);
        // Display book in the UI 
        book.displayBook(); 
        }
        e.preventDefault(); 
    })

        // Delete Book Event
        tableBody.addEventListener('click', (e)=>{
            if (e.target.parentElement.classList.contains('delete-item')) {
                e.target.parentElement.parentElement.parentElement.remove();
                let book = e.target.parentElement.parentElement.parentElement.firstElementChild.textContent;
                deleteBookfromLocalStorage(book); 
            }
    })
}




// Store book in local storage 
function storeBookInLocalStorage(book) {
    let books;
    if (localStorage.getItem('books') === null) {
        books = []; 
    }else{
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

// Delete from local storage 
function deleteBookfromLocalStorage(bookItem) {
    let books; 
    if (localStorage.getItem('books') === null) {
        books = []; 
    }else{
        books = JSON.parse(localStorage.getItem('books'))
        console.log(books);
    }
    books.forEach(function(book, index) {
        if (bookItem === book.bookName) {
          books.splice(index, 1); 
        }
    });
    localStorage.setItem('books', JSON.stringify(books))
};
