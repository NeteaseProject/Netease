/*
 * @Author: 菲菲呀
 * @Date: 2019-11-30 15:50:08
 * @LastEditors: 菲菲呀
 * @LastEditTime: 2019-12-06 19:14:53
 * @Description: 
 */
import Vue from 'vue'
import VueX from 'vueX'

Vue.use(VueX)

export default new VueX.Store({
    state:{
        footerCls:[//存储数据
            true,
            false,
            false,
            false
        ]
    },
    mutations:{//跟踪状态
        changefooter(state,index){
            // console.log(index)
            // console.log(state.footerCls)
            //合法性的判断
            if(index<0 || index>state.footerCls.length-1){
                return;
            }
            state.footerCls.forEach((item,index,arr)=>{
                arr[index] = false;
            });
            // state.footerCls[index] = true;
            state.footerCls.splice(index,1,true); //用splice方法时vue才能检测到数据的变化，
            
        }
    }
})