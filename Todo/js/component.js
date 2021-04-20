//コンポーネント化用

let todoTitle = {
    template:
    `<div><h1>Todo List</h1></div>`,
    // props:{

    // },
    // data(){
    //     return{
    //     }
    // }

}

let todoForm = {
    template:
    `
    <div>
        <div id="container" v-cloak>
        <input type="text" maxlength="20" v-model="newItem" placeholder="add Todo">
        <button class="add" @click.prevent="addItem">追加</button>
        <button class="doneAll" @click.prevent="doneAll">すべて完了</button>
        </div>
    </div>
    `,
    props:{

    },
    data(){
        return{
        }
    }
}
