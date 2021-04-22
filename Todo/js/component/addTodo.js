/**
 * Todo追加
 * 
 * <button @click="[子コンポーネントのメソッド名]">
 * <slot name="[親で呼び出す時の名前]"></slot>
 * slotの名前はキャメルケースだと表示されない模様
 */
let addTodo = {
    template:
    `
    <div id="container" v-cloak>
        <input type="text" maxlength="20" v-model="newItem" placeholder="add Todo">
        <button class="add-todo" @click="addItemChild">追加</button>
        <slot name="done-all"></slot>
    </div>
    `,
    data(){
        return{
            newItem:""//ここに入力値を入れる。v-modelでbindすると値が入る
        }
    },
    methods:{
        addItemChild() {
            /**
             * this.$emit(
             *  '[カスタムタグに指定するカスタムイベントハンドル名]',
             *   [イベントで呼び出したメソッドに渡す引数]
             *  )
             * 
             * ※scriptで呼び出すときはthis.$emitで使う
             * ※@click などで使う場合は@click="$emit('[カスタムイベントハンドル]',[引数])"
             * ※$emitで指定するハンドル名はケバブケースでないと警告される  
             */
            this.$emit('add-item',this.newItem);
            this.newItem = ""; // テキストボックス初期化
        }
    }
}

