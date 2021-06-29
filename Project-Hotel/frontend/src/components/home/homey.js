import { useState, useEffect } from 'react';
import Example from  "./booking";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHotels } from '../../service/hotelapi';
const AllHotels = () => {
    const [hotels, setHotels] = useState([]);
    
    useEffect(() => {
        getAllHotels();
    }, []);
    const getAllHotels = async () => {
        let response = await getHotels();
        setHotels(response.data);
    }
    return (
        <div className="container">
            {hotels.map((hotels)=>(
            <div className="card border-info m-5 hotCard">
                <div className="card-header">
                    {hotels.city}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{hotels.name}</h5>
                    <p className="card-text">{hotels.address}</p>
                    <h3 className="text-success">₹ {hotels.price}</h3>
                    <Example hotel={hotels}/>
                </div>
            </div>
            ))}
        </div>
    )
}

export default AllHotels;