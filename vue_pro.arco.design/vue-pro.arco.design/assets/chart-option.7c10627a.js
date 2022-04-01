/*
 * @Author: saber
 * @Date: 2022-04-01 18:53:10
 * @LastEditTime: 2022-04-01 18:58:40
 * @LastEditors: saber
 * @Description: 
 */
import {
    c as t
} from "./arco.fe701834.js";
import {
    d as n
} from "./index.8269c28a.js";

function u(r) {
    const o = n(),
        e = t(() => o.theme === "dark");
    return {
        chartOption: t(() => r(e.value))
    }
}
export {
    u
};