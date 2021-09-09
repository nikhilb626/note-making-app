console.log('welcome to noteapp');

showNotes();

// if use adds notes add it to localstorage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function () {
    let addtxt = document.getElementById('addtext');
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    addtxt.value = "";
    showNotes();
    alert("note has been added !,please check the page below");


})


// function to show elements from localstorage
function showNotes(){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `    <div class="noteCard">
                <h3 id="notehead">NOTE ${index+1}</h3>
                <p class="card-text">${element}</p>
                <button id="${index}" class="btns"  onclick="deleteNotes(this.id)">delete note</button>
    </div>`
    });
    let notesElem=document.getElementById('inner-container2');
    if(notesObj.length !=0){
        notesElem.innerHTML=html;}
    else{
            notesElem.innerHTML=`<p id="before" >Nothing to show ! use "add a Note" section above to add notes</p>`;
        }
    
}


// function to delete note
function deleteNotes(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
    
    
}



// function for functional search input

let search=document.getElementById('search');
search.addEventListener('input',function(){
    let inputVal=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt=element.getElementsByClassName("card-text")[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})
