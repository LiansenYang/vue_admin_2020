<template>
        <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
      </svg>
</template>
<script>
    export default {
        name:'svgIcon',
        props:['iconClass','className'],
/*
        mounted: function () {
            // `this` 指向 vm 实例
            console.log(this.iconName);
        },*/
        computed: {
            // 计算属性的 getter
            iconName: function () {
                // `this` 指向 vm 实例
                return "#icon-"+this.iconClass
            },
            svgClass:function () {
                if(this.className){
                    return "svg-icon "+this.className;
                }else{
                    return "svg-icon";
                }
            }
        }
    }

</script>
<style lang="scss" scoped>
    .svg-icon{
        width: 1em;
        height: 1em;
        fill:currentColor;
        color: #fff;
    }

</style>