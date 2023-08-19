import * as Location from 'expo-location'
import React,{useEffect,useState,useRef,useContext} from 'react';
import MapView,{Camera} from 'react-native-maps'
import { OrderContext } from '../../../../context/OrderContext';
import { Order } from '../../../../../Domain/entities/Order';


const DeliveryAddressMapViewModel=(order:Order)=>{

    const[messagePermissions,setMessagePermissions]=useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const[position,setPosition]=useState<Location.LocationObjectCoords>()
    const[refPoint,setRefPoint]=useState({
        name:'',
        latitude:0.0,
        longitude:0.0,
    });
    const mapRef = useRef<MapView | null>(null);
    const {updateToDelivered}=useContext(OrderContext);

    useEffect(() => {
      
        const requestPermissions = async () => {
            const foreground = await Location.requestForegroundPermissionsAsync();

            if (foreground.granted) {
                startForegroundUpdate();
            }
        }

        requestPermissions();

    }, [])
{}
        const onRegionChangeComplete=async (latitude:number,longitude:number)=>{
            try {
                const place = await Location.reverseGeocodeAsync({
                    latitude:latitude,
                    longitude:longitude
                });
                let city;
                let street;
                let streetNumber;

                place.find(p=>{
                    city=p.city;
                    street=p.street;
                    streetNumber=p.streetNumber;
                    setRefPoint({
                        name:`${street}, ${streetNumber}, ${city}`,
                        latitude:latitude,
                        longitude:longitude
                    });
                })
                
            } catch (error) {
                console.log('ERROR'+error);
                
            }
        }
        const updateToDeliveredOrder = async () => {
            const result = await updateToDelivered(order);
            setResponseMessage(result.message);
        }
    
        const startForegroundUpdate = async () => {
            const { granted } = await Location.getForegroundPermissionsAsync(); 
    
            if (!granted) {
                setMessagePermissions('Permiso de ubicacion denegado')
                return;
            }
    
            const location = await Location.getLastKnownPositionAsync(); // UBICACION UNA SOLA VEZ
            setPosition(location?.coords);
            const newCamera: Camera = {
                center: { latitude: location?.coords.latitude!, longitude: location?.coords.longitude! },
                zoom: 15,
                heading: 0,
                pitch: 0,
                altitude: 0
            };
            mapRef.current?.animateCamera(newCamera, { duration: 2000 })
    
        }
    return{
        messagePermissions,
        position,
        mapRef,
        ...refPoint,
        onRegionChangeComplete,
        updateToDeliveredOrder,
        responseMessage
        
    }
}
export default DeliveryAddressMapViewModel;