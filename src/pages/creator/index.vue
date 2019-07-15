<template>
<div class="creator">
    <System>
        <div slot="nav">
            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="select">
                <el-menu-item v-for="(item,index) in navList" :key="index" :index="('' + (index + 1))">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{item.label}}</span>
                </el-menu-item>
            </el-menu>
        </div>
    </System>
</div>
</template>

<script>
import {
    Component,
    Vue
} from "vue-property-decorator";
import System from "@/pages/index/systemIndex";

@Component({
    name: "creator",
    components: {
        System
    }
})
export default class Creator extends Vue {
    navList = [
        {label:'课程中心'},
        {label:'问答消息'},
        {label:'业绩推广'},
        {label:'客服支持'}
    ]
    activeIndex = '1';

    select(...args){
        console.log(args)
    }
}
</script>

<style lang="scss" scoped>
@import "~@/style/setting.scss";

.creator {}
</style>
