import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceCard } from '../store/serviceCard/serviceCard';
import { useParams } from 'react-router-dom';

const ServiceCardDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { serviceCard, loading, error } = useSelector((state) => state.serviceCard.getServiceCard);

  useEffect(() => {
    dispatch(getServiceCard(id));
  }, [dispatch, id]);

  if (loading === 'loading') return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {serviceCard && (
        <>
          <h2>{serviceCard.title}</h2>
          <p>{serviceCard.description}</p>
          {serviceCard.image && (
            <img src={`${BASE_URL}/api/service-cards/image/${serviceCard.image}`} alt={serviceCard.title} />
          )}
        </>
      )}
    </div>
  );
};

export default ServiceCardDetails;
