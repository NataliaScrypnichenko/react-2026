import {url} from "../component/constanta/constanta.tsx";
import type {ICart} from "../model/ICart.ts";

const baseUrls = url;

export const cartsService = {
    getAllCartsOfUserById: async (id: number): Promise<ICart[]> => {

        return await fetch(`${baseUrls}/carts/user/${id}`)
            .then(value => value.json())
            .then(data => data.carts);

    }
}
