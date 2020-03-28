import axios from 'axios';
import { loginRequest } from './axiosApi';

// 登录接口
export const login = (params) => { return loginRequest("post", "api/user/login", params) };
// 获取用户菜单
export const menu = (params) => { return axios.get("/api/menu?&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
// 退出接口
export const loginout = () => { return axios.delete("/api/login?&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
