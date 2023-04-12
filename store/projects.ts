export function state(){
    return {
        projects: []
    }
}
export const mutations = {
    setProjects(state: any, projects: any[]) {
        state.projects = projects
    }
}
export const actions = {
    async getProjects({ commit }: { commit: any }): Promise<any> {
        const {projects} = await this.$api.getProjects()
        commit('setProjects', projects)
        return  projects
    },
    async editProject(_: any, { id, name}: {id: number, name: string}): Promise<void> {
        await this.$api.editProject(id, name)
    }
}
export const getters = {
    projects: (state: any) => state.projects
}