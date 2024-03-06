
export const DepartureFinder = async  (data) => {
    let result = {ETA: null , NAME:  null , LASTPORT: null, DEST:null};
    const res = await fetch(`/api/destination/${data.MMSI}`);
    const response = await res.json();

    response.destinations.length > 1 ?
    response.destinations?.slice(-2, -1)[0].NAVSTAT !== data.NAVSTAT && response.destinations?.slice(-2, -1)[0].NAVSTAT == 5  ?
    result = {ETA: data.ETA, NAME: data.NAME, LASTPORT: response.destinations?.slice(-2, -1)[0].DEST, DEST:data.DEST}
    :
    result = null
    :
    result = null;

    return result;

}
