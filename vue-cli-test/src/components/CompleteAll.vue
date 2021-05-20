<template>
  <div class="done-all-container">
    <v-btn
      v-if="hasTodoLists()"
      @click.prevent="doneAll"
      color="green">
      すべて完了
    </v-btn>
  </div>
</template>

<script>
  module.exports = {
    props: [ "todos" ],
    data() {
      return {}
    },
    methods:{
      doneAll() {
        this.todos.forEach ( todo => {
          if( todo.isChecked ) {
            todo.isDone = true;
          }
        });
      },
      hasTodoLists() {
        return this.todos.length > 0;
      }
    }
  };
</script>
