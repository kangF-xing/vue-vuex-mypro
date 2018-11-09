import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store= new Vuex.Store({
    state:{
        buynum:1,
        buyshow:false,
        kJid:"",
    },
    mutations:{
        minus(state){
            state.buynum--
            if(state.buynum<=1){
                state.buynum=1
            }
        },
        add(state){
            state.buynum++
        },
        comeOut(state){
            state.buyshow=true
        },
        shut(state){
            state.buyshow=false
        },
        kjid(state,val){
            state.kJid=val
        }
    }
})

export default store