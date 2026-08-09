import type {Company} from "./ICompany.ts";
import type {Address} from "./IAdress.ts";

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

