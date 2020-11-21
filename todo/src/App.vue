<template>
  <div class="wrapper">
    <h1>My Todo List !</h1>
    <LoginButton />
    <form @submit.prevent="addTodo">
      <input type="text" name="todo-text" v-model="newTodoText" placeholder="New todo">
    </form>
    <ul v-if="todos.length">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
    </ul>
    <p class="none" v-else>Nothing left in the list. Add a new todo in the input above.</p>
    <p>
      0.0.2
    </p>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue"
import LoginButton from "./components/LoginButton.vue"
import BondMixin from './mixins/bond/BondMixin' //'@/mixins/bond/BondMixin' ne fonctionne pas ???


let nextTodoId = 1

const createTodo = text => ({
  text,
  id: nextTodoId++
})

export default {
  components: {
    TodoItem,
    LoginButton //  'LoginButton': () => import('./components/LoginButton.vue'), //@ ??

  },
  mixins: [BondMixin],
  data() {
    return {
      todos: [
        createTodo("Learn Vue"),
        createTodo("Learn about single-file components"),
        createTodo("Fall in love ❤️"),
        createTodo("ADD a todo list on my POD with BOND https://github.com/scenaristeur/bond/tree/main/todo"),
        createTodo("use @jeffz zipextract to install toolszip archives (https://github.com/scenaristeur/bond/tags) on a POD https://github.com/jeff-zucker/solid-file-client#createziparchivesourceurl-archiveurl-options-extractziparchivearchiveurl-targetfolderurl-options"),
          createTodo("use a ttl file to store todos"),
          createTodo("add status on a todo"),
          createTodo("make tutos for basic things : create a HTML on POD, read a file on a POD, write a file on a POD, create a VUEJS app, create a simple TODO app on SOLID")

        ],

        newTodoText: ""
      }
    },

    methods: {
      addTodo() {
        const trimmedText = this.newTodoText.trim()

        if (trimmedText) {
          this.todos.push(createTodo(trimmedText))
        }

        this.newTodoText = ""
      },

      removeTodo(item) {
        this.todos = this.todos.filter(todo => todo !== item)
      }
    }
  }
  </script>


  <style>
  *, *::before, *::after{
    box-sizing: border-box
  }
  html, body{
    font: 16px/1.2 BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    padding: 10px
  }
  .wrapper{
    width: 75%;
    margin: 0 auto;
  }
  form{
    margin-bottom: 20px
  }
  input[type="text"]{
    width: 100%;
    padding: 10px;
    border: 1px solid #777
  }
  ul, li{
    margin: 0;
    padding: 0
  }
  p.none{
    color: #888;
    font-size: small
  }
  </style>
