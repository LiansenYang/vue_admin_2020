import router from "./index";
import store from "@/store/index"
import { getToken,removeToKen, removeUserName } from "@/utils/app.js";


var wirteRouter = ['/login'];

router.beforeEach((to,from,next) =>{
    if(getToken()){
        //当有token之后还是访问login页面的话，清除token和Username
        if('/login' === to.path){
            removeToKen();
            removeUserName();
            store.commit('login/SET_TOKEN','');
            store.commit('login/SET_USERNAME','');
        }
        next();
        console.log("存在");
    }else{
        console.log("不存在");
        if(wirteRouter.indexOf(to.path) !== -1){
            next();
        }else{
            next("/login");
        }
    }

    console.log(to);       //从哪个页面来
    console.log(from);      //到哪个页面去
    console.log(next);

});
