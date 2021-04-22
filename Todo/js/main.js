// Vueインスタンス
let app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components:{
        addTodo,     //Todo追加のテキストボックスやボタン、全て完了ボタンのコンポーネント
        doneAll,
        todoItem,   //追加されたTodo(完了/todoに戻す、削除)のコンポーネント
        btnBox
    },
    data(){
      return {
        // 使用するデータ
            newItem:'',  //新規Todoの入力内容
            todos:[]     //Todo格納用配列
        }
    },
    methods:{
        addItem(newItem){
            //新規Todoの追加
            if(!newItem){return} //未入力ならreturnする
            const todo = {
                item:newItem,
                isDone:false,       //todo消化済みか
                isChecked:false     //チェックボックスがチェック済みか
            }
            this.todos.push(todo);//todosに格納
        },
        doneAll(){
            //チェックボックスでチェックが入ったものをまとめて完了にする
            this.todos.forEach(todo => {
                if(todo.isChecked){
                    todo.isDone = true;
                }
            });
        },
        completeTodo(todo){
            //未完了を完了にする
            todo.isDone = true;
        },
        revertToTodo(todo){
            //未完了に戻す
            todo.isDone = false;
            todo.isChecked = false; //チェックボックスの状態を戻す
        },
        deleteItem(todo){
            //Todoを消す
            let index = this.todos.indexOf(todo);
            if(index > -1){
              //splice(0)になるとindex0以降の配列要素すべてを消してしまうので、
              //範囲をindexから1要素分に設定
              this.todos.splice(index,1);//todosからindexの項目を削除する
            }
        }
    }
});
