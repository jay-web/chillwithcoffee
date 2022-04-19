export const ACTION_TYPES = {
    FETCH_LAT_LONG: "fetch_lat_long",
    FETCH_COFFEE_STORE: "fetch_coffee_store"
}

export const storeReducers = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_LAT_LONG:
            return {...state, latLong: action.payload}
        case ACTION_TYPES.FETCH_COFFEE_STORE:
            return {...state, coffeeStores: action.payload}
        default:
            throw new Error("Wrong action type for reducer")
    }
}