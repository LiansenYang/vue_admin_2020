/* 前面这里是为了使用到this.$cookie ，但是this作为vue是直接用不了的，必须使用到new Vue();
import vue from "vue";
const adminToKen = "admin_toKen";

let vm = new vue();
export function getToken(){
    vm.$cookie.set(adminToKen,adminToKen);
    console.log(vm.$cookie.get(adminToKen));
    return vm.$cookie.get(adminToKen);
}*/

/**
 * cookie 在每次请求后台的时候都会传过去，可以设置过时的时间，暂时先用这个，后面可以使用jwt
 */

import cookie from "vue-cookie";

const adminToKen = "admin_toKen";
const usernameKey = "username";

export function getToken(){
    return cookie.get(adminToKen);
}

export function setToKen(toKen){
    return cookie.set(adminToKen, toKen);
}

export function removeToKen(toKen){
    return cookie.delete(adminToKen);
}

export function setUserName(value){
    return cookie.set(usernameKey, value);
}

export function getUserName(){
    return cookie.get(usernameKey);
}

export function removeUserName(){
    return cookie.delete(usernameKey);
}