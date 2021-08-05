import type RootStateTypes from "@/store/interface"
import type { IUser, UserStateTypes } from "./interface"
import type { Ilogin } from "@/types/login"
import type { Module } from "vuex"
import { getToken, getUserInfo, setToken, setUserInfo, storageClear } from "@/utils/storage"

const user: Module<UserStateTypes, RootStateTypes> = {
    namespaced: true,
    state: () => ({
        token: getToken(),
        userInfo: getUserInfo()
    }),
    mutations: {
        setToken(state, token: string | null) {
            state.token = token
            setToken(token ?? '')
        },
        setUserInfo(state, userInfo: IUser) {
            state.userInfo = userInfo
            setUserInfo(userInfo)
        }
    },
    actions: {
        async login({ commit, dispatch }, data: Ilogin) {

        },
        async logout({ commit }) {
            // await logout()
            commit('setToken', null)
            storageClear()
        }
    }
}

export default user
