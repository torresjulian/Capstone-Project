import { Vendor } from './vendor';

export class Merchandise {
    _id: string;
    code: string;
    name: string;
    details: string;
    image: string;
    price: number;
    vendor: Vendor = new Vendor();
}