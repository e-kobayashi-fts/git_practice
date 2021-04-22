/**
 * 全て完了機能のコンポーネント
 */
 let doneAll = {
    //  <button @click="[子コンポーネントのメソッド名]">
    template:
    `
    <span>
        <button class="done-all" @click="doneAllChild">すべて完了</button>
    </span>
    `,
    data(){
        return{
            
        }
    },
    methods:{
        doneAllChild(){
            this.$emit('done-all');
        }
    }
}

