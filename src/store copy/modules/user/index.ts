import { accountLogin } from "@/api"
import { logout, userInfo, userRegister } from "@/api/login"
import router from "@/router"
import RootStateTypes from "@/store/interface"
import { Ilogin, Iregister } from "@/types/login"
import { getToken, getUserInfo, setToken, setUserInfo, storageClear, getRoleType, setRoleType, getUserBtn, setUserBtn } from "@/utils/storage"
import { Module } from "vuex"
import { IUser, UserStateTypes } from "./interface"

const user: Module<UserStateTypes, RootStateTypes> = {
    namespaced: true,
    state: () => ({
        token: getToken(),
        userInfo: getUserInfo(), // 用户信息
        roleType: getRoleType() ?? '',
        userBtn: getUserBtn()
    }),
    mutations: {
        setToken(state, token: string | null) {
            state.token = token
            setToken(token ?? '')
        },
        setUserInfo(state, userInfo: IUser) {
            state.userInfo = userInfo
            setUserInfo(userInfo)
        },
        setRoleType(state, roleType: string) {
            state.roleType = roleType
            setRoleType(roleType)
        },
        setUserBtn(state, userBtns: any) {
            state.userBtn = userBtns
            setUserBtn(userBtns)
        }
    },
    actions: {
        async login({ commit, dispatch }, data: Ilogin) {
            return accountLogin(data).then(async ({ data }) => {
                commit('setToken', data.token)
                commit('setUserInfo', data.user)
                commit('setRoleType', data.roleType)
                commit('setUserBtn', data.userBtn);

                (window as any).$message.success('登录成功')
                setTimeout(() => {
                    router.replace('/')
                }, 1000)
                return data
            })
        },
        async logout({ commit }) {
            await logout()
            commit('setToken', null)
            storageClear()
            router.push('/login')
        },
        // 获取用户信息
        async getInfo({ commit }) {
            const { data } = await userInfo()
            commit('setUserInfo', data)
            return data
        },
        async register({ commit }, data: Iregister) {
            return userRegister(data).then(async ({ data }) => {
                (window as any).$message.success('注册成功，请进行登录！')
                setTimeout(() => {
                    router.push('/login')
                }, 1000);
            })
        }
    }
}

export default user
