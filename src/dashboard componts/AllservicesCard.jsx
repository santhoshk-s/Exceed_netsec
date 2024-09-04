import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServiceCards } from '../store/serviceCard/serviceCard';
import { BASE_URL } from '../store/constant';
import axios from 'axios';
import ServiceCardEditForm from './ServiceCarsEditForm';

function AllservicesCard() {
  const dispatch = useDispatch();
  const { serviceCards, loading, error } = useSelector((state) => state.serviceCard.allServiceCards);

  useEffect(() => {
    dispatch(getAllServiceCards());
  }, [dispatch]);

  if (loading === 'loading') return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {serviceCards && serviceCards.map((card) => (
        <div key={card._id} className="service-card">
          {/* <h2>{card.heading}</h2>
          <p>{card.description}</p>
          <img 
            src={`${BASE_URL}/api/service-cards/image/${card.image}`} 
            alt={card.heading} 
            style={{ width: '100px', height: '100px', objectFit: 'cover' }} // Adjust size as needed
            onError={(e) => { e.target.onerror = null; e.target.src="/path/to/placeholder.jpg"; }} // Fallback image
          /> */}
          <ServiceCardEditForm card={card} />
        </div>
      ))}
    </div>
  );
}

export default AllservicesCard;
