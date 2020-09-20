import Vue from "vue";
import svgIcon from './svgIcon'

Vue.component('svg-icon',svgIcon);


/*
* require.context(‘./svg’, false, /\.svg$/) 参数说明：
*       第一个：目录 当前目录下的svg
*       第二个：是否遍历子级目录
*       第三个：定义遍历文件规则
* */
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => {
    console.log(requireContext.keys().map(requireContext));
    return requireContext.keys().map(requireContext)
}
requireAll(req);
