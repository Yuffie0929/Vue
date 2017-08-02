/**
 * Created by Administrator on 2017/7/31.
 */
Vue.component('modal', {
    props: {
        modalTitle: {
            type: String,
            default: "这是一个模态框",
        },
    },
    template: `<div class="modal-wrapper" id="app">

        <div class="modal-header">
            <h4 v-text="modalTitle"></h4>
        </div>
        
        <div class="modal-content">
            <slot name="modal-content"></slot>
        </div>
        
        <div class="modal-footer">
            <slot name="modal-footer">
                <input class="btn blue" type="button" value="确定" @click="okHandle">
                <input class="btn" type="button" value="取消" @click="cancelHandle"> 
            </slot>
        </div>
    </div>`,
    methods: {
        okHandle: function (){
            this.$emit('on-ok');
        },
        cancelHandle: function (){
            this.$emit('on-cancel');
        },
    },
});


new Vue({
    data: {
        list: [{text: '1'},{text: '2'},{text: '3'},]
    },
    el: '#app',
    methods: {
        ok: function (){
            alert(1);
        },
        cancel: function (){
            alert(2);
        },
    },
});

