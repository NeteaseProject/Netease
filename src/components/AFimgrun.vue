<!--
 * @Author: 菲菲呀
 * @Date: 2019-11-26 09:31:07
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-06 17:44:22
 * @Description: 
 -->
<template>
<div class="mainBox">
    <p v-show="false">{{getId}}</p>
    <ul>
        <li v-for="(nextpage,index) in clsdetail" :key="index" :class="index==oldindex?'red':''" @touchstart="getchange(index)">
            <div :class="{red_one:index==oldindex,imgs:true}">
                <img :src="nextpage.typepic" alt="">
            </div>
            <span>{{nextpage.typetit}}</span>
        </li>
    </ul>
</div>
  
</template>
<script>
export default {
  name: 'Fimgrun',
  data () {
    return {
        nextpages:[],
        oldindex:'0',
        clsdetail:[],
        typeId:''
    }
  },
  computed:{
      getId:function(){
          return this.$store.state.id
      }
  },
  methods:{
      getchange(id){
         this.oldindex = id ;
        //  console.log(this.clsdetail);
         this.$store.commit('savegoods',this.clsdetail[id])
      }
  },
  created(){
      fetch("http://localhost:3000/clist?id="+this.getId)
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          this.nextpages = data[0].goodstype1;
          this.nextpages.map(item=>{
              item.mintype.forEach(element => {
                  this.clsdetail.push(element)
              });
          })
        //   console.log(this.clsdetail)

      })
      .catch(err=>{
          console.log(err)
      })
  },
  updated(){
      if(this.typeId!=this.getId){
          this.typeId=this.getId
          this.clsdetail=[]
          fetch("http://localhost:3000/clist?id="+this.getId)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                this.nextpages = data[0].goodstype1;
                this.nextpages.map(item=>{
                    item.mintype.forEach(element => {
                        this.clsdetail.push(element)
                    });
                })
            })
            .catch(err=>{
                console.log(err)
            })
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.mainBox{
    width:100%;
    height:1rem;
    background-color: rgb(247, 247, 247);
    // background:white;

    ul{
        display: flex;
        list-style: none;
        align-items: center;
        overflow-x: auto;
        box-sizing: border-box;
        
        li{
            width:.6rem;
            font-size:12px;
            margin:0 .07rem;
            
            .imgs{
                 width:.6rem;
                height:.6rem;
                border:1px solid #d9d9d9;
                border-radius:4px;
                position: relative;
                background:white;
                img{
                display: block;
                position: absolute;
                width:.45rem;
                height:.45rem;
                left:0;
                right:0;
                bottom: 0;
                top:0;
                margin:auto;
                }
            }
            .red_one{
                border:1px solid red;
                border-radius:4px;
            }
            span{
                width:.55rem;
                display: block;
                text-align: center;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
        }
        .red{
            color:red;
        }
        
    }
}
</style>
