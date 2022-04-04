import axiosClient from "./axiosClient";

const pinApi = {
    getAllPin() {
        const url = `pins`;
        return axiosClient.get(url);
    },
    getPinByCategory(category){
        const url = `pins/category`;
        const param = {category};
        return axiosClient.get(url, {params: param})
    },
    getPinById(id){
        const url = `pins/${id}`;
        return axiosClient.get(url);
    },
    createPin(formData){
        const url = `pins/create-pin`;
        return axiosClient.post(url, formData);
    },
    savePin(formSave){
        const url = `pins/save`;
        return axiosClient.post(url, formSave);
    },
    getPinsByUserLike(id){
        const url = `pins/user-like/${id}`;
        return axiosClient.get(url);
    }
}
export default pinApi;