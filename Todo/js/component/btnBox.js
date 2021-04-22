//追加されたTodoのコンポーネント
let btnBox = {
    template:
    `
    <div class="btn-box">
        <button class="todo-complete" v-show="!todo.isDone" @click.prevent="completeTodoChild(todo)">完了</button>
        <button class="todo-return" v-show="todo.isDone" @click.prevent="todoToReturnChild(todo)">Todoに戻す</button>
        <button class="todo-deletion" @click="deleteItemChild(todo)">削除</button>
    </div>
    `,
    props:["todo"], //propsはカスタムタグでバインドした値を使える
    data(){
        return{
        }
    },
    methods:{
        completeTodoChild(todo){
            this.$emit('complete-todo',todo);
        },
        todoToReturnChild(todo){
            this.$emit('todo-to-return',todo);
        },
        deleteItemChild(todo){
            this.$emit('delete-item',todo);
        }

    }
}

