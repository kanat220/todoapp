let main = document.createElement('main')
main.className='container'
let audio = new Audio('sound.mp3')


document.body.prepend(main)


let procJectName = document.createElement('h1')
procJectName.innerHTML = "Let's do it"
main.append(procJectName)
let listBlock = document.createElement('div')
listBlock.className='mainBlock'
main.append(listBlock)

let fistsDiv = document.createElement('div')
listBlock.append(fistsDiv)


let texIn = document.createElement('input')
texIn.className = 'texIn'
texIn.setAttribute('placeholder','Gonna do')
texIn.setAttribute('type','text')
fistsDiv.append(texIn)

let setDate = document.createElement('input')
setDate.className = 'setDate'
setDate.setAttribute('placeholder','Gonna do')
setDate.setAttribute('type','date')
fistsDiv.append(setDate)

let addBtn = document.createElement('button')
addBtn.innerHTML='ADD'
addBtn.id = 'addBtn'
fistsDiv.append(addBtn)

let list = document.createElement("ul")
listBlock.append(list)

let todosArray = localStorage.getItem('todos') || []


const renderTodoItem = () => {
    list.innerHTML =''
    todosArray.map((todo,id) => {
        console.log(todo)
        let newTask = texIn.value;
        let newDate = setDate.value;
    
        let li = document.createElement("li");
        li.className = "taskItem";
    
        let label = document.createElement("label");
        label.textContent = todo.text + "  " + todo.date;
    
        let doneBtn = document.createElement("img");
        doneBtn.className = "doneImg";
        doneBtn.src = "done.png"; 
    
        let deleteBtn = document.createElement("img");
        deleteBtn.className = "deleteImg";
        deleteBtn.src = "delete.png"; 

        deleteBtn.addEventListener('click',deleTo)
        doneBtn.addEventListener('click',doneTo)
        li.append(label);
        li.append(doneBtn);
        
        list.append(li);
        li.append(deleteBtn);
    }
    )
}

const AddTodo = () => {
   let liText = texIn.value
   let liDate = setDate.value

   if (liText !='') {
    todosArray.push({
        text: liText,
        checked: false,
        date: liDate
    })
localStorage.setItem('todos',JSON.staring)
    audio.play()
    texIn.value = ''
    setDate.value = ''
    renderTodoItem()
   }
  

    
   
}

// doneBtn.addEventListener('click', () => {
//     label.style.textDecoration = "line-through";
    
// });


// deleteBtn.addEventListener('click', () => {
//     li.remove();
// });

addBtn.addEventListener("click", AddTodo)

renderTodoItem();
addBtn.addEventListener("click", AddTodo)

function deleTo (e){
    e.target.parentNode.remove()
}
function doneTo (e){
    e.target.parentNode.classList.toggle('done')
}