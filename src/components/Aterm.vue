<!--
 * @Author: 陈晶华
 * @Date: 2019-11-26 09:28:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-06 21:07:06
 * @Description: "..."
 -->
<template>
    <ul class="Aterm">
        <li @touchstart="Changecolor(1)" :class="{Ach:red1}">
            <span>综合</span>
        </li>
        <li :class="{asty:true ,aprice:true,Ach:red2}" @touchstart="Changecolor(2)">
            <span>价格</span>&nbsp;
            <p class="aicon">
                <i :class="{amark:are1,'el-icon-arrow-up':true}">{{Ared}}</i>
                <i :class="{amark:!are1,'el-icon-arrow-down':true}"></i>
            </p>
        </li>
        <li :class="{Ach:red3,asty:true}"  @touchstart="Changecolor(3)">
            <span>上新</span>&nbsp;
            <p class="aicon">      
                <i  :class="{amark:are2,'el-icon-arrow-up':true}"></i>
                <i :class="{amark:!are2,'el-icon-arrow-down':true}"></i>
            </p>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'Csearch',
   data () {
        return {
          are1:false,
          are2:false,
          red1:true,
          red2:false,
          red3:false
        }
   },
     created(){
        
    },
    computed:{
       
    },
    methods:{
       Changecolor(index){
            switch(index){
                case 1:
                    this.red1=true
                    this.red2=false
                    this.red3=false
                    break;
                case 2:
                    this.red1=false
                    this.red2=true
                    this.are1=!this.are1
                    this.red3=false
                    if(this.are1==true){
                        console.log(this.are1) //按价格从大到小排
                        this.$store.commit("priceTomin")
                    }else{ //按价格从小到大排
                    
                        this.$store.commit("priceTomax")
                    }
                    break;
                case 3:
                    this.red1=false
                    this.red2=false
                    this.red3=true
                    this.are2=!this.are2
                    if(this.are==false){ //按顺序排
                        this.$store.commit("newTomin")
                    }else{ //按倒序排
                        this.$store.commit("newTomin")
                    }
                    break;
            }
      }
  }
}
</script>
<style scoped  lang="scss" type="text/css">
.Aterm{
    font-size: .14rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    height: .5rem;
    margin-top: .1rem;
    background-color: rgb(247, 247, 247);
    position: sticky;
    top: .5rem;
    left: 0;
    border-bottom: 1px solid rgb(221, 218, 218);
    .Ach{
        color: red;
    }
    .amark{
        color: #666;
    }
}
.asty{
    display: flex;
}
 .aicon{
     i{
         display: block;
         font-size: .1rem;
     }
 }
</style>
