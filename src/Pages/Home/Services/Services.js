import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-server-blue-phi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <p className="text-2xl font-bold text-orange-600 text-center">
          Service
        </p>
        <h2 className="text-5xl semi-bold text-center my-3">
          Our Service Area
        </h2>
        <p className="text-center my-5">
          The majority have suffered alteration in some form, by injected humor,
          Or Randomised <br /> words which don't look even slightly believable
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
