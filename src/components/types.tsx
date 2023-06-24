export interface IAddress {
    name: string;
    title: string;
    img1: string;
    id:number
}

export interface IUser {
    id: number;
    text: string;
    all: IAddress[];
}