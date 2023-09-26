import { ActualUser } from "./types";

export interface State {
    userName: string;
    loader: boolean;
    data: [] | any;
}