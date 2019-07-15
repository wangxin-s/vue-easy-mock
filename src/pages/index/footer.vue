<template>
    <footer>
        footer
    </footer>
</template>
<script>
import {Component,Vue} from 'vue-property-decorator';

@Component({
    name:'pageFooter'
})
export default class PageFooter extends Vue{

}
</script>
<style lang="scss" scoped>
@import '~@/style/setting.scss';
footer{
    width:100vw;
    @include setPadding();
    @include relative();
    height:300px;
    background: #eee;
    line-height: 300px;
    text-align: center;
    font-size:1.5rem;
}
</style>

