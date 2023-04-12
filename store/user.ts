import {appStorage} from "~/storage/storage";

export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state: any, token: string) {
        state.token = token
    }
}
export const actions = {
    async login({ commit }: { commit: any }, { email, password }: { email: string, password: string }): Promise<string> {
        try {

            const {token}: { token?: string } = await this.$api.login({email, password});
            commit('setToken', token)
            this.$cookiz.set("token", token);
            if (token) {
                appStorage.set("token", token);
            }
            return token ? token : "";
        }catch (e){
            return ""
        }
    },
    logout() {
        this.$cookiz.remove("token");
    },
}

export const getters = {
    token: (state: any) => state.token
}