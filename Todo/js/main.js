// Vueインスタンス
let app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
      return {
        // 使用するデータ
            newItem:'',             //追加用フォームbind用
            todos:[],               //追加するTodo
            isChecked:[]            //チェックされた配列のindex格納
        }
    },
    methods:{
        addItem(){
            if(!this.newItem){return}
            //渡された値をtodos配列に入れる
            const todo = {
                item:this.newItem,
                isDone:false       //todo消化済みか否か
            }
            this.todos.push(todo);//todosに格納
            this.newItem='';//newItemを初期化
        },
        doneAll(){
            //すべて完了ボタンを押下したときのうごき
            const that = this;
            this.isChecked.forEach(index => {
                that.todos[index].isDone = true;
            });
            this.isChecked = [];//チェックされたindexの配列を初期化
            console.log(this.todos);
        },
        isDonetoggle(index){
            //完了済みのタスクをTodoに戻す/未完了を完了にする
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        deleteItem(index){
            //Todoを消す
            //splice(0)になるとindex0以降のすべてを消してしまうので、
            //範囲をindexから1要素分に設定してみる
            this.todos.splice(index,1);//todosからindexの項目を削除する
        }
    },
});