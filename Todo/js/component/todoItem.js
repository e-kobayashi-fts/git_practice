//追加されたTodoのコンポーネント
let todoItem = {
    template:
    `
       <div>
          <input v-show="!todo.isDone" :value="todo" v-model="todo.isChecked" type="checkbox">
          <span :class="{done: todo.isDone}">{{todo.item}}</span>
          <slot name="btn-box"></slot>
       </div>
    `,
    props:["todo"], //propsはカスタムタグでバインドした値を使える
    data(){
        return{
        }
    },
    methods:{
        // completeTodoChild(todo){
        //     this.$emit('complete-todo',todo);
        // },
        // todoToReturnChild(todo){
        //     this.$emit('todo-to-return',todo);
        // },
        // deleteItemChild(todo){
        //     this.$emit('delete-item',todo);
        // }
    }
}

