import axiosClient from "./axiosClient";

const userApi = {
    existUser(id){
        const url = `user/id/${id}/exist`;
        return axiosClient.get(url);
    },
    createUser(dataUser) {
        const url = 'user/create';
        return axiosClient.post(url, dataUser);
    },
    getUser(id) {
        const url = `user/id/${id}`;
        return axiosClient.get(url)
    }
}
export default userApi