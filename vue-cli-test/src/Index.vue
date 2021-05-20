<template>
  <v-container>
    <h1>Todo List</h1>
    <v-container>
      <add-todo :todos="todos"></add-todo>
      <complete-all :todos="todos"></complete-all>
    </v-container>
    <v-container>
      <ul>
        <li v-for="( todo,index ) in todos" :key="index">
          <todo-item :todos="todos" :todo="todo"></todo-item>
        </li>
      </ul>
    </v-container>
  </v-container>
</template>

<script>
  import AddTodo from './components/AddTodo';
  import CompleteAll from './components/CompleteAll';
  import TodoItem from './components/TodoItem';

  export default {
    name: 'App',
    components: {
      AddTodo,
      CompleteAll,
      TodoItem,
    },
    data() {
      return {
        todos:[]
      }
    }
  };
</script>
