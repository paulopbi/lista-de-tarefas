const form = document.querySelector('[data-form]')
const input = document.querySelector('[data-input]')
const ul = document.querySelector('[data-ul-list]')

const tasks = []

const addTask = (task) => {
  tasks.push(task)
  render()
}

const deleteTask = (index) => {
  tasks.splice(index, 1)
  render()
}

const render = () => {
  const isTaskListEmpty = tasks.length === 0

  if (!isTaskListEmpty) {
    ul.innerHTML = ''

    tasks.forEach((task, index) => {
      ul.innerHTML += `
      <li class="todo__item">
        <span>${task}</span>
        <button class="todo__delete" onClick="deleteTask(${index})">X</button>
      </li>
    `
    })
    return
  }

  showEmptyListMessage()
}

const showEmptyListMessage = () => {
  ul.innerHTML = `
  <li class="todo__item todo__item--empty">
    A lista está vazia
  </li>`
}

const validateInput = (value) => {
  if (!value) {
    ul.innerHTML = `
    <li class="todo__item todo__item--error">
      Valor inválido
    </li>
    `
    return false
  }

  return true
}

const handleSubmit = (event) => {
  event.preventDefault()
  const normalizedValue = input.value.trim()

  if (validateInput(normalizedValue)) {
    addTask(normalizedValue)
    return
  }

  console.error('Algo deu errado, tente novamente')
}

form.addEventListener('submit', handleSubmit)
document.addEventListener('DOMContentLoaded', render)
