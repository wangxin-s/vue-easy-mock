<template>
<div class="creator">
    <Layout>
        <div slot="topLeft">
            <el-row>
                <el-col :span="10">
                    <el-input placeholder="search"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">
                        <i class="el-icon-search"></i>
                    </el-button>
                </el-col>
                <el-col :span="6" style="margin-left:20px;">
                    <el-select v-model="drop">
                        <el-option v-for="item in select" :key="item.value" :value="item.value" :label="item.label"></el-option>
                    </el-select>
                </el-col>
            </el-row>
        </div>
        <div slot="topRight">
            <el-button type="primary">创建新课</el-button>
        </div>
        <div slot="center">
            <el-card v-for="card in cardList" :key="card">
                <img :src="require('@/assets/logo.png')" alt="" class="head">
                <h1>这是title</h1>
                <h1>内容</h1>
                <p>内容2</p>
            </el-card>

        </div>
    </Layout>
</div>
</template>

<script>
import {
    Component,
    Vue
} from "vue-property-decorator";
import Layout from "@/components/tableTriditionLayout";
import Card from '@/components/card';

@Component({
    name: "creatorHome",
    components: {
        Layout,
        Card
    }
})
export default class CreatorHome extends Vue {
    drop = "";
    select = [{
        label: "123",
        value: "123"
    }, {
        label: "234",
        value: "234"
    }];
    cardList = [1,2,3,4]
}
</script>

<style lang="scss" scoped>
@import "~@/style/setting.scss";

.creator {
    width: 100%;
    height: 600px;
    margin-top: 20px;
    .el-card{
        margin: 20px 0;
    }
    .head{
        @include border(0,#fff,50%);
        width:150px;
        height:150px;
        float:left;
    }
}
</style>
