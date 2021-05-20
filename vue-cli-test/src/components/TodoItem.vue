<template>
  <v-row>
    <v-col cols="1">
      <v-checkbox
        v-show="!todo.isDone"
        v-model="todo.isChecked">
      </v-checkbox>
    </v-col>
    <v-col cols="4">
      <span :class="{ done: todo.isDone }">
        {{ todo.item }}
      </span>
    </v-col>
    <v-col>
      <v-row>
        <v-col>
          <v-btn
            @click.prevent="completeTodo( todo )"
            v-if="!changeStatus()"
            color="orange">
            完了
          </v-btn>
          <v-btn
            @click.prevent="revertToTodo( todo )"
            v-if="changeStatus()"
            color="green darken-4">
            Todoに戻す
          </v-btn>
        </v-col>
        <v-col>
          <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  v-bind="attrs"
                  v-on="on">
                  削除
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2">
                  Attention
                </v-card-title>
                <v-card-text>
                  本当に削除しますか？
                  削除すると元に戻せません。
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn 
                    @click="deleteItem( todo )"
                    color="error">
                    削除する
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog = false">
                    キャンセル
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  module.exports = {
    props: [ "todo","todos" ],
    data() {
      return {
        dialog: false,
      }
    },
    methods: {
      completeTodo ( todo ) {
        todo.isDone = true;
      },
      revertToTodo ( todo ) {
        todo.isDone = false;
        todo.isChecked = false;
      },
      changeStatus () {
        return this.todo.isDone;
      },
      deleteItem ( todo ) {
        let index = this.todos.indexOf( todo );
        if( index > -1 ) {
          this.todos.splice( index,1 );
        }
        this.dialog = false;
      }
    }
  }
</script>