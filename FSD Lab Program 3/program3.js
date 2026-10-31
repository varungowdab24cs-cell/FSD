const name = document.getElementById('name'); 
const cgpa = document.getElementById('cgpa'); 
const status = document.querySelector('#status'); 

// 1. Modify CONTENT dynamically
document.getElementById('btnUpdate').addEventListener('click', () => {
    name.innerText = name.innerText.toUpperCase(); 
    cgpa.innerText = cgpa.innerText;
    status.innerText = 'ELIGIBLE FOR PLACEMENT'; 
    if (parseFloat(cgpa.innerText) >= 7.5) 
        cgpa.innerHTML = cgpa.innerText + ' <b>(Distinction)</b>'; 
    });

// 2. Modify STYLES dynamically
document.getElementById('btnHighlight').addEventListener('click', () => { 
    cgpa.style.color = 'red'; 
    cgpa.style.fontWeight = 'bold'; 
    cgpa.style.backgroundColor = 'yellow'; });

// 3. Modify ATTRIBUTES / classes dynamically 
document.getElementById('btnTheme').addEventListener('click', () => { 
    document.body.classList.toggle('dark'); 
    document.getElementById('title') .setAttribute('title', 'Theme changed dynamically'); });  

// 4. CREATE a new element dynamically 
const note = document.createElement('p'); 
note.innerText = 'Content updated without page reload.'; 
document.body.appendChild(note); 
