// Enters details on the form
// Event listner
// Run Book Constructor to create Book
// 

// Book Constuctor 

class Book {
    constructor(bookName, author, isbn){
        
        this.bookName = bookName; 
        this.author = author; 
        this.isbn = isbn ; 

    }

    // storeBookLocalStorage(){
    //     console.log(this.Book);
    // }

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

// UI Elements 

const bookForm = document.getElementById('bookForm'); 
const table = document.getElementsByClassName('table'); 
const btnSubmit = document.getElementById('btnSubmit'); 
const bookName = document.getElementById('bookName');
const author = document.getElementById('author'); 
const isbn = document.getElementById('isbn'); 
const tableBody = document.getElementById('tableBody'); 

// Load Event Listners
loadEventListners(); 

// Add Book
function loadEventListners() {
    
    // Add Book Event
    btnSubmit.addEventListener('click', (e)=>{
        // Construct Book
        let book = new Book(bookName.value, author.value, isbn.value)
        // Add Book to Local Storage
        storeBookInLocalStorage(book);
        // Display book in the UI 
        book.displayBook(); 
    
        e.preventDefault(); 
    })

    // Delete Book Event
    tableBody.addEventListener('click', (e)=>{

        console.log(e.target);

        if (e.target.parentElement.classList.contains('delete-item')) {
            e.target.parentElement.parentElement.parentElement.remove(); 
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