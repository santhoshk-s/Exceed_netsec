import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getServiceById } from '../store/serviceCard/serviceCard';
import img1 from "../images/servicescard/service1.jpeg";
import img2 from "../images/servicescard/service2.jpeg";
import img3 from "../images/servicescard/service3.png";
import img4 from "../images/servicescard/4.jpeg";
import img5 from "../images/servicescard/5.jpg";
import img6 from "../images/servicescard/service6.png";
import img7 from "../images/servicescard/service7.png";
import img8 from "../images/servicescard/8.jpg";
import img9 from "../images/servicescard/service9.jpeg";
import img10 from "../images/servicescard/service10.jpeg";
import img11 from "../images/servicescard/service11.jpeg";
import img12 from "../images/servicescard/it & services.jpeg";
import img13 from "../images/servicescard/13.jpeg";
import img14 from "../images/servicescard/service14.png";
import img15 from "../images/lanwan.jpg";
import img16 from "../images/it & services.jpeg";
import img17 from "../images/backup.jpg";

function DynamicServicePage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { service, loading, error } = useSelector((state) => state.serviceCard);

    useEffect(() => {
        if (id) {
            dispatch(getServiceById(id));
        }
    }, [dispatch, id]);

    const imageMap = {
        "66a35ad1e2445cfea42cb80d": img1,
        "66a35c21e2445cfea42cb836": img2,
        "66a35cd2e2445cfea42cb844": img3,
        "66a35e40e2445cfea42cb85d": img4,
        "66a35efbe2445cfea42cb865": img5,
        "66a35fa8e2445cfea42cb877": img6,
        "66a36063e2445cfea42cb87b": img7,
        "66a361b3e2445cfea42cb885": img8,
        "66a3690ce2445cfea42cb893": img9,
        "66a36a2ce2445cfea42cb899": img10,
        "66a36b7be2445cfea42cb8a3": img11,
        "66a36cc1e2445cfea42cb8b9": img12,
        "66a36dd7e2445cfea42cb8cd": img13,
        "66a37048e2445cfea42cb8e0": img14,
      
    };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (error) {
        return <h1 className='text-red-500 text-xl text-center'>Error: {error}</h1>;
    }

    if (!service) {
        return <div>No service found</div>;
    }

    const img = imageMap[id] || service.imageurl;

    return (
        <section className="bg-white h-full mx-4 ">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {service.heading}
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg text-justify">
                            {service.description}
                        </p>
                    </div>
                    <div className="mt-12 md:mt-0 ">
                        <img 
                            src={ service.imageurl || img }
                            alt={service.heading}
                            className="object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DynamicServicePage;
