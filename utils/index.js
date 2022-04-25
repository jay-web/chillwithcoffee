export const getOrigin = () => {
    let origin = Intl.DateTimeFormat().resolvedOptions().timeZone;
    origin = origin.split("/")[0];
    return origin;
}

export const isEmpty = (obj) => {
    
    for (const property in obj) {
        return false;
      }
      return true;
    
   
}