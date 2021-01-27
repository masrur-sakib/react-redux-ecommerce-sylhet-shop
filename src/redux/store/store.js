import { createStore } from "redux";
import sylhetShopReducers from "../reducers/sylhetShopReducers";

export const store = createStore(sylhetShopReducers);