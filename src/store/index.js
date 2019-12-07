/*
<<<<<<< HEAD
<<<<<<< HEAD
 * @Author: 陈晶华
 * @Date: 2019-11-28 16:47:29
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-12-06 22:24:41
 * @Description: "..."
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		typeid:"01001",
		clsId:"01",
		id:"01001",
		Goods:[],
		Goodscopy:[],
		GoodsTomain:[]
	},
	mutations: {
		changeType(state,typeId){
            //  console.log(typeId)
             state.typeid=typeId;
		},
		changeCls(state,clsid){
            //  console.log(clsid)
             state.clsId=clsid;
		},
		savetypeId(state,id){
			state.id=id
			// console.log(state.id)
		},
		savegoods(state,goods){
			// console.log("这是仓库")
			state.Goods=goods;
			state.Goodscopy=state.Goods;//深拷贝
			// console.log(state.Goods.goods)
		},
		priceTomin(state){
			let arr =state.Goods.goods
			for(let i=0; i<arr.length-1;i++){
				for(let j=0; j<arr.length-1-i;j++){
					if(arr[j].lastmoney<arr[j+1].lastmoney){
						let temp = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = temp;
					}
				}
			}
			state.Goods.goods=[];
			state.Goods.goods=arr
			state.GoodsTomain=arr
		},
		priceTomax(state){
			// state.Goods.goods=[];
			state.Goods.goods=state.GoodsTomain.reverse()
		},
		newTomin(state){
			// console.log(state.Goodscopy)
			state.Goods.goods=state.Goodscopy.goods.reverse()
		}
	}
}); 
=======
 * @Author: your name
 * @Date: 2019-12-06 17:20:47
 * @LastEditTime: 2019-12-07 09:10:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23d:\wangyiyanxuan\src\store\index.js
 */
import Vue from 'vue';
import vuex from "vuex";
Vue.use(vuex)
export default new vuex.Store({
    state:{
         
    },
    getter:{

    },
    mutations: {
        
    },
    active:{}
})
>>>>>>> b421aef870892733c2a40e148d86f4daa135ffd5
=======
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
>>>>>>> feifei
