import axios from "./jsonAxios";
import config from "./config";

const URL = config.API_BASE_URL + "/api/tracks";

const TrackService = {
    count: () => {
        return axios.get(`${URL}/count`);
    },

    getAll: () => {
        return axios.get(URL);
    },

    getOne: (id) => {
        return axios.get(`${URL}/${id}`);
    },
};

export default TrackService;
