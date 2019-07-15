<template>
    <header>
        <img :src="require('@/assets/logo.png')" alt="logo" class="logo">
        <section class="headerRight">
            <span><i class="el-icon-bell" />消息</span>
            <el-button type="primary" class="login" @click="gotoLogin">登录/注册</el-button>
        </section>
    </header>
</template>
<script>
import {Component, Vue} from 'vue-property-decorator';

@Component({
    name:'mainHead',
})
export default class MainHead extends Vue{
    gotoLogin(){
        this.$router.push('/login');
    }
}
</script>
<style lang="scss">
    @import '~@/style/setting.scss';
    header{
        @include setPadding();
        width:100vw;
        height:$headerHeight;
        background:$headerColor;
        .logo{
            height:90%;
        }
        .headerRight{
            float:right;
            line-height: $headerHeight;
            .login{
                margin:0 20px;
            }
        }
    }
</style>

