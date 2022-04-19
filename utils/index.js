export const getOrigin = () => {
    let origin = Intl.DateTimeFormat().resolvedOptions().timeZone;
    origin = origin.split("/")[0];
    return origin;
}

export const isEmpty = (obj) => {
    return Object.keys(obj).length > 0;
}