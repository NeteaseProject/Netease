<!--
 * @Author: osier
 * @Date: 2019-11-28 20:15:48
 * @LastEditors: osier
 * @LastEditTime: 2019-12-02 09:48:35
 * @Description: ..
 -->
<template>
    <div class="denewBox">
        <div class="deBox1">
            <p>新品   ></p>
        </div> 
        <div class="deBox2">
           <div class="deBox2left">
               <p class="deleft1">宫廷普洱（熟茶）150克</p>
               <span>推荐理由</span>
           </div> 
           <div class="deBox2right">
                查看评价  
                <span class="iconfont icon-youxiang"></span>
           </div> 
        </div>
        <div class="debox3">
            <div class="debox3_jiantou">
            </div>
            <ul>
                <li><i>①</i>普洱茶“心脏”产区，采摘古树鲜叶</li>
                <li><i>②</i>特级普洱原料制茶，捻出独特荷香气</li>
                <li><i>③</i>挂杯蜜甜香显，韵味持久</li>
            </ul>
        </div>
    </div>   
</template>

<script>
export default {
    name:'Detilesnew',
    data(){
        return{
            
        }
    }
}
</script>


<style lang="scss" scoped="" type="text/css">
.denewBox{
    width:95%;
    padding-left:5%;
    background-color: #fff;
    padding-bottom:10px;
    .deBox1{
        padding-top:10px;
        width:100%;
        height:.2rem;
        font-size:14px;
        text-align:left;
        color:rgb(206, 58, 58);
        p{
            display: block;
            width:16%;
            text-align: center;
            box-sizing: border-box;
            border: 0.7px solid rgb(206, 58, 58);
            border-radius: 15px;
        }
    }
    .deBox2{
        width:95%;
        height:.8rem;
        padding-left:5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .deBox2left{
            display: flex;
            flex-direction: column;
            margin-left:-36px;
            .deleft1{
                font-size:16px;
                font-weight: 600;
                padding-bottom:5px;
            }
            span{
                font-size:14px;
            }
        }
        .deBox2right{
            font-size:14px;
        }
    }
    .debox3{
        width:95%;
        height:.8rem;
        background-color: rgb(241, 241, 241);
        box-sizing: border-box;
        border:0.7px solid rgb(230, 227, 227);
        border-radius: 3px;
        position: relative;
        li{
            font-size:14px;
            line-height: 24px;
            padding-left:5px;
            list-style: none;
        }
        li:nth-child(1){
            padding-top:5px;
        }
        i{
            font-style: normal;
            color:red;
            padding-right:3px;
        }
        .debox3_jiantou{
            width:0;
            height:0;
            margin: auto;
            border: 9px solid transparent;
            border-bottom-color: rgb(236, 236, 236);
            position: absolute;
            left: 17px;
            top: -16px;
            z-index: 100;
        }
    }
}
.icon-youxiang{
    margin-left:16px;
}


</style>