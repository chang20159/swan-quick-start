<template>
    <div class="container">
        <h4>Hello, Swan UI</h4>
        <sw-checkbox/>
        <sw-image-list :column="2">
            <sw-image v-for="(item,index) in images" 
                      :key="index"
                      :src="item"></sw-image>
        </sw-image-list>
        <sw-button class="fix-bottom" 
                   block 
                   @click="handleClick">点我查看图片</sw-button>
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
        },
        methods:{
            handleClick(){
                this.images = [
                    'https://fuss10.elemecdn.com/b/2e/a6c333694efb4db66c6a3ba07e9d8jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    'https://fuss10.elemecdn.com/e/6c/0de9d18ef47292380826be8d8cfe8jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    'https://fuss10.elemecdn.com/9/78/f449290a86fb3ca7d793a5cc50344jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85',
                    'https://fuss10.elemecdn.com/b/ce/fdff43a9ea94d46706be48f50bc26jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85'
                ]
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