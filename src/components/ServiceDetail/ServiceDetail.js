import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {id} = useParams();

    const [vehicle, setVehicle] = useState([]);
    useEffect( ()=> {
        fetch('/fakeData.json')
        .then(res=>res.json())
        .then(data => setVehicle(data));
    },[]);

    const ExactItem = vehicle.filter(td => td._id === id);
    console.log(ExactItem);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div>
                <img src={ExactItem[0]?.imageURL} alt="" />
                <h3>Brand: {ExactItem[0]?.name}</h3>
                <h4>Price: {ExactItem[0]?.price}</h4>
                <p>Description: {ExactItem[0]?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;