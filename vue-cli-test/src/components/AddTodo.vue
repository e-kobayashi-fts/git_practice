<template>
  <v-row v-cloak>
    <v-col cols="7">
      <v-text-field
        v-model="input.message"
        label="add Todo"
        maxlength="15"
        :counter="15"
        required>
      </v-text-field>
    </v-col>
    <v-col>
      <v-btn @click.prevent="addItem" color="indigo">
        追加
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  module.exports = {
    props: [ "todos" ], 
    data() {
      return {
        input:{
          message: ''
        }
      }
    },
    methods:{
      addItem() {
        //新規Todoの追加
        if( !this.input.message ) { return } //未入力ならreturnする
        this.todos.push ({
          item: this.input.message,
          isDone: false,
          isChecked: false
        });
        this.input.message = "";
      }
    }
  };
</script>