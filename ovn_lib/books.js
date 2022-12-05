export default class books{
    constructor(name,author,pages,status){
        this.name = name;
        this.pages = pages;
        this.author = author;
        this.status = status;
    }
    printBooks(){
        return this.name + " is a book writen by " + this.author + " and is " + this.pages + " pages long, the book is currently " + this.status
    }
}

