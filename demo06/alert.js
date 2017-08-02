/**
 * Created by Yuffie on 2017/7/31.
 */
Vue.component('m-alert', {
    props: {
        type: {
            type: String,
            default: 'info',
        },
        title: {
            type: String,
            default: '提示信息'
        },
        closeable: {
            type: Boolean,
            default: true,
        },
        showIcon: {
            type: Boolean,
            default: true,
        },
        warpStyle: String
    },
    template: `
        <div class="m-alert" :class="[alertClass]" :style="warpStyle">
            <slot name="m-icon">
                <i v-if="showIcon" class="m-icon" :class="[iconClass]"></i>
            </slot>
            <div class="m-content">
                <slot name="m-content">
                    <span class="m-message" v-text="title"></span>
                </slot>
                <i v-if="closeable" class="m-icon m-icon-close" @click="closeHandle"></i>
            </div>
        </div>`,
    computed: {
        alertClass(){
            return `m-alert-${this.type}`
        },
        iconClass(){
            return `m-icon-${this.type}`
        },
    },
    methods: {
        closeHandle: function (){
            this.$emit('close-click');
        },
    }
});
new Vue({
    el: '#app',
    methods: {
        close: function (){
            alert("关闭");
        }
    }
});