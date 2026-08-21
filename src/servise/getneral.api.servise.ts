import {url} from "../component/constanta/const.ts";


const baseUrl =url;

export const getAll = async <T,>(endpoint: string): Promise<T> => {

    return await fetch(`${baseUrl}${endpoint}`)
        .then(res => res.json());
};
