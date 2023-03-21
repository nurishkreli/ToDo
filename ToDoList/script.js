const input = document.getElementById('userInput')
const enter = document.getElementById('enter')
const ul = document.getElementById('ul')



const createListElement = () => {
   const li = document.createElement('li')
   li.appendChild(document.createTextNode(input.value))
   ul.appendChild(li)
   input.value = ''

   const btn = document.createElement('button')
   btn.appendChild(document.createTextNode('X'))
   li.appendChild(btn)


   const doneItem = () => {
      li.classList.toggle('done')
   }

   const deleteItem = () => {
      ul.removeChild(li)
   }

   li.addEventListener('click', doneItem)
   btn.addEventListener('click', deleteItem)


}

const inputLength = () => {
   return input.value.length
}



const addElementByKeypress = (event) => {
   if (inputLength() > 0 && inputLength() <= 45 && event.which === 13) {
      createListElement()
   }
}

const addElementByClick = () => {
   if (inputLength() > 0 && inputLength() <= 45 ) {
      createListElement()
   }
}

input.addEventListener('keypress', addElementByKeypress)
enter.addEventListener('click', addElementByClick)