<!--
 * @Author: osier
 * @Date: 2019-11-30 16:13:07
 * @LastEditors: osier
 * @LastEditTime: 2019-12-05 19:44:32
 * @Description: ..
 -->
<template>
<div class="decusBox">
    <div class="decusBox1">
        <div class="decusLeft">
            <p>用户评价（5）</p>
        </div>
        <div></div>
        <div class="decusRight">
            <p>查看全部</p>
            <span class="iconfont icon-youxiang"></span>
        </div>
    </div>
    <div class="decusBox2">
        <ul>
            <li>
                <div class="liname">
                    <div class="liname1">
                        <div class="liname1Top">
                            <img src="../assets/img/touxiang.jpg" alt="头像">
                            <p>m****6</p> 
                            <img class="imgs" src="../assets/img/vip.jpg" alt="vip标志">
                        </div>
                        <div class="liname1Bottom">
                            <p>来套全的，都尝一遍，夹<br/>子好漂亮☺</p>
                        </div>
                    </div>
                    <div class="liname2">
                        <img src="../assets/img/detile-bg6.jpg" alt="">
                    </div>
                </div>
            </li>
            <li>
                <div class="liname">
                    <div class="liname1">
                        <div class="liname1Top">
                            <img src="../assets/img/touxiang1.jpg" alt="头像">
                            <p>m****6</p> 
                            <img class="imgs" src="../assets/img/vip.jpg" alt="vip标志">
                        </div>
                        <div class="liname1Bottom">
                            <p>来套全的，都尝一遍，夹<br/>子好漂亮☺</p>
                        </div>
                    </div>
                    <div class="liname2">
                        <img src="../assets/img/detile-bg2.jpg" alt="">
                    </div>
                </div>
            </li>
            <li>
                <div class="liname">
                    <div class="liname1">
                        <div class="liname1Top">
                            <img src="../assets/img/touxiang2.jpg" alt="头像">
                            <p>m****6</p> 
                            <img class="imgs" src="../assets/img/vip.jpg" alt="vip标志">
                        </div>
                        <div class="liname1Bottom">
                            <p>来套全的，都尝一遍，夹<br/>子好漂亮☺</p>
                        </div>
                    </div>
                    <div class="liname2">
                        <img src="../assets/img/detile-bg4.jpg" alt="">
                    </div>
                </div>
            </li>
            <li>
                <div class="liname">
                    <div class="liname1">
                        <div class="liname1Top">
                            <img src="../assets/img/touxiang3.jpg" alt="头像">
                            <p>m****6</p> 
                            <img class="imgs" src="../assets/img/vip.jpg" alt="vip标志">
                        </div>
                        <div class="liname1Bottom">
                            <p>来套全的，都尝一遍，夹<br/>子好漂亮☺</p>
                        </div>
                    </div>
                    <div class="liname2">
                        <img src="../assets/img/detile-bg6.jpg" alt="">
                    </div>
                </div>
            </li>
            <li>
                <div class="liname">
                    <div class="liname1">
                        <div class="liname1Top">
                            <img src="../assets/img/touxiang4.jpg" alt="头像">
                            <p>m****6</p> 
                            <img class="imgs" src="../assets/img/vip.jpg" alt="vip标志">
                        </div>
                        <div class="liname1Bottom">
                            <p>来套全的，都尝一遍，夹<br/>子好漂亮☺</p>
                        </div>
                    </div>
                    <div class="liname2">
                        <img src="../assets/img/detile-bg5.jpg" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name:'Detilescustomer',
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped="" type="text/css">
.decusBox{
    width:100%;
    margin-top:10px;
    background-color:white;
    padding-bottom:10px;
    .decusBox1{
        height:.4rem;
        margin-left:-12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom:0.7px solid rgb(230, 227, 227);
        box-sizing: border-box;
        p{
            font-size:14px;
        }
        .decusRight{
            display: flex;
            justify-content: space-between;
            margin-left:40px;
            align-items: center;
            p{
                color:rgb(150, 147, 147);
            }
            .iconfont{
                margin-left:15px;
            }
        }
    }
    .decusBox2{
        padding-left:10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .decusBox2 ul{
        width:100%;
        margin-top:10px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        &::-webkit-scrollbar{
            display:none;
        }
        display: flex;
        li{
            width:3.1rem;
            height:1.2rem;
            box-sizing: border-box;
            border:0.7px solid rgb(230, 227, 227);
            flex-shrink: 0;
            margin-right:20px;
            border-radius:5px;
            .liname{
                height: 1.2rem;
                position: relative;
                img{
                    width:30px;
                    height:30px;
                    border-radius: 50%;
                    box-sizing: border-box;
                    position:absolute;
                    top:10px;
                    left:10px;
                }
                p{
                    font-size:14px;
                    position:absolute;
                    top:13px;
                    left:50px;
                }
                .imgs{
                    width:15px;
                    height:15px;
                    border-radius:3px;
                    position:absolute;
                    top:16px;
                    left:106px;
                }
            }
            .liname1Bottom p{
                position: absolute;
                top:50px;
                left:5px;
            }
            .liname2 img{
                width:1.2rem;
                height:100%;
                box-sizing: border-box;
                border-radius: 1px;
                margin-left: 1.8rem;
            }
        }
    }
}
</style>