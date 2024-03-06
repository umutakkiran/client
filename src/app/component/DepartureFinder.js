
export async function DepartureFinder  (data) {
    let result = {ETA: null , NAME:  null , LASTPORT: null, DEST:null};
    const res = await fetch(`http://localhost:3000/api/destination/${data.MMSI}`);
    const response = await res.json();

    response.destinations.length > 1 ?
    response.destinations?.slice(-2, -1)[0].navstat !== data.NAVSTAT && response.destinations?.slice(-2, -1)[0].navstat == 5  ?
    result = {ETA: data.ETA, NAME: data.NAME, LASTPORT: response.destinations?.slice(-2, -1)[0].destination, DEST:data.DEST}
    :
    result = null
    :
    result = null;

    return result;

}
