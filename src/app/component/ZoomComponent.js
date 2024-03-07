import {useMapEvents} from "react-leaflet";
import { useDispatch } from "react-redux";
import { getShipsDataThunk } from "../../../services/slices/allships-slice";
export function ZoomComponent() {
  const dispatch = useDispatch();
    
    const mapEvents = useMapEvents({
        zoomend: () => {
            const bounds = mapEvents.getBounds();
              const minLat = bounds.getSouth();
              const maxLat= bounds.getNorth();
              const minLng= bounds.getWest();
              const maxLng= bounds.getEast();
               dispatch(getShipsDataThunk(minLat,maxLat,minLng,maxLng));
        },
        dragend: () => {
            const bounds = mapEvents.getBounds();
            const minLat = bounds.getSouth();
            const maxLat= bounds.getNorth();
            const minLng= bounds.getWest();
            const maxLng= bounds.getEast();
             dispatch(getShipsDataThunk(minLat,maxLat,minLng,maxLng));
        }
    });

    return null
}