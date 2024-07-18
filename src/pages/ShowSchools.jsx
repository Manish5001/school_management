import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Schools List</h2>
      <div className="row">
        {schools.map((school, index) => (
          <div key={index} className="col-md-4 ">
            <div className="card" style={{ width: '100%', height: '420px' }}>
              <img
                src={`http://localhost:5000/api/schoolImages/${school.image}`}
                className="card-img-top"
                alt={school.name}
                style={{height: '270px'}}
              />
              <div className="card-body">
                <h5 className="card-title">{school.name}</h5>
                <p className="card-text">{school.address}</p>
                <p className="card-text">{school.city}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;
