/**
 * Created by Yuffie on 2017/8/1.
 */

var data = [{
        title: "目录",
        children: [{
            title: "我的音乐",
            children:[{
                title: "周杰伦",
                children: [{
                    title: "发如雪",
                }]
            }, {
                title: "王杰",
                children: [{
                    title: "一场游戏一场梦",
                }]
            }],
        }, {
            title: "我的照片",
        }]
    }];

Vue.component('m-tree', {
    computed: {
        count(){
            var c = this.incrementCount;
            return ++c;
        },
        stylePadding(){
            return 'padding-left:' + this.incrementCount * 16 +'px';
        }
    },
    props: {
        list: {
            type: Array,
            default: []
        },
        incrementCount: {
            type: Number,
            default: 0
        }
    },
    template: `<div class="tree-menu">
    <ul>
        <li v-for="item of list">
            <div class="tree-title" :style="stylePadding">
                <span>
                    <strong v-text="item.title"></strong>
                    <i class="ico"></i>
                </span>
            </div>
            <m-tree 
            :increment-count="count" 
            v-if="item.children" 
            :list="item.children"></m-tree>
        </li>
    </ul>
</div>`,
});

new Vue({
    el: "#app",
    data: {
        treeList: data,
    }
});