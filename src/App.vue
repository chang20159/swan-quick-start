<template>
    <div class="container">
        <h4>Hello, Swan UI</h4>
        <sw-checkbox/>
        <sw-button @click="$fail('保存失败保存失败保存失败保存失败')">toast</sw-button>
        <sw-button @click="$info('保存保存保存')">toast</sw-button>
    </div>
</template>

<script>
    import {Button,Image,ImageList} from 'swan-ui'
    export default {
        // components: {
        //     [Button.name]:Button,
        //     [Image.name]:Image,
        //     [ImageList.name]: ImageList
        // },
        data(){
            return{
                images: null
            }
        }
    }
</script>

<style lang="less">
    .container{
        h4{
            text-align: center;
            margin-top: 20px;
        }
    }
    .fix-bottom{
        position: fixed;
        bottom: 15px;
    }
</style>