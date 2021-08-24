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
//ShowWarning Protypes 
UI.prototype.showWarning=function(warningText,className){
const form=document.querySelector('#formid');
const parent=document.querySelector('.wrapper');
const newDiv=document.createElement('div');
newDiv.className=` alert ${className}`;
newDiv.appendChild((document.createTextNode(warningText)));
parent.insertBefore(newDiv,form);
setTimeout(function(){
document.querySelector('.alert').remove();
},2000)



}
//delete Prototype
UI.prototype.delete=function(targetElement){
if(targetElement.className==="fas fa-times"){
  targetElement.parentElement.parentElement.remove();



}

 
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
    if(btitle=="" || bauthor=="" || bisbn==""){
      ui.showWarning('Please Enter The Value','warning');
    }
    else{
      //Calling prototypes like function
      ui.showWarning('Book added Succesfully','success');
      ui.addBookDetails(bookdetails);
      ui.clear();
    }
  
  



  
   
   






    e.preventDefault();
})
document.querySelector('table').addEventListener('click',function(e){

  const ui=new UI();
ui.delete(e.target);
ui.showWarning('Book Removed!!!','success');

  e.preventDefault();
})