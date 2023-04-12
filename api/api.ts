import {AxiosError, AxiosInstance, AxiosResponse} from "axios";

export class Api {
    private axios: any;
    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    async createAxiosRequest(
        url?: string,
        method?: "GET" | "POST" | "PUT" | "DELETE",
        data?: {[key: string]: any},
    ): Promise<any> {
            return await this.axios
                .request({
                    method,
                    url,
                    data
                })
                .then(({data: response}: AxiosResponse) => {
                    return response;
                })
                .catch((e: AxiosError)=> {
                    if (e.response?.status === 401) {
                        throw new Error("Unauthorized")
                    }
                })
    }

    async login(data: {email: string, password: string}): Promise<{token?: string}> {
        return await this.createAxiosRequest("/auth/login", "POST", data);
    }

    async getProjects(): Promise<any> {
        return await this.createAxiosRequest("/projects-manage/index", "GET");
    }

    async editProject(id: number, name: string): Promise<any> {
        const formData = new FormData();
        formData.append("name", name);
        return await this.createAxiosRequest(`/projects-manage/update?id=${id}`, "POST", formData);
    }
}
