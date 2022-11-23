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

    storeBookInLocalStorage() {
        let books;
        let book = this.book; 
    
        if (localStorage.getItem('books') === null) {
            books = []; 
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
    
        books.push(book);
        console.log(books);
        localStorage.setItem('books', JSON.stringify(books));
    }

    displayBook(){
        console.log("Display Book");
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

// Load Event Listner 
btnSubmit.addEventListener('click', (e)=>{

    let book = new Book(bookName.value, author.value, isbn.value)

    book.storeBookInLocalStorage();
    
    // console.log(localStorage);

    e.preventDefault(); 
   
})

// Contruct Book, add to UI and add to LS


// Store book in local storage 

