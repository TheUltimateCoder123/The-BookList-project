//Book constructer
function Book(title,author,isbn){
this.title=title;
this.author=author;
this.isbn=isbn;

}
//////UI constructer
function UI(){}
//addBookdetails Prototype Inside UI
UI.prototype.addBookDetails=function(book){

const tbody=document.querySelector('#book-list');
const tdata=document.createElement('tr');
tdata.innerHTML=`
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><i class="fas fa-times"></i></td>

`
tbody.appendChild(tdata);

}
/////////////////////////////Clear prototype inside UI//////////////////
UI.prototype.clear=function(){
  document.getElementById('Bname').value="";
  document.getElementById('author').value="";
  document.getElementById('isbn').value="";



}

 /////////////////////////////////////////////////EVent Listerners to form
document.querySelector('#formid').addEventListener('submit',function(e){

const btitle=document.getElementById('Bname').value,
       bauthor=document.getElementById('author').value,
       bisbn=document.getElementById('isbn').value;
      //This is bookDetails obect
    const bookdetails=new Book(btitle,bauthor,bisbn);
//This is UI object
    const ui=new UI();
  
    //Calling prototypes like function
    ui.addBookDetails(bookdetails);
    ui.clear();
   
   






    e.preventDefault();
})