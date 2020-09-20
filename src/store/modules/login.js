import { Login } from "@/api/login";
import { setToKen,setUserName,removeToKen,removeUserName  }  from "@/utils/app"
const state = {
    //vuex默认刷新页面之后 state值会重置，所以不要
    token:'',
    username:''
};
const getters={
};
const mutations={
    SET_TOKEN:(state,value)=>{
        state.token = value;
    },
    SET_USERNAME:(state,value)=>{
        state.username = value;
    }



};
const actions ={
    //第一个参c数content,是指上面的commit, dispath, state, rootState, rootGetters ,也可以直接解构{ commit ,state}要什么就写什么
    login:(content,date)=>{
        return new Promise((resolve, reject) => {
            Login(date).then((response) => {
                let data = response.data.data;

                //1、在state中赋值
                content.commit("SET_TOKEN",data.token);
                content.commit("SET_USERNAME",data.username);
                //2、在cookie种赋值
                setToKen(data.token);
                setUserName(data.username);

                resolve(response);
            }).catch(error => {
                reject(error)
            })
        });
    },

    logout:({commit})=>{
        return new Promise((resolve, reject) => {
            //清除token
            removeToKen();
            removeUserName();

            //清除state
            commit('SET_TOKEN','');
            commit('SET_USERNAME','');

            resolve();
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
