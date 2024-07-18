import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../App.css'; // Import the CSS file

const AddSchool = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Destructure reset

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append('image', data.image[0]);
    try {
      const res = await axios.post('http://localhost:5000/api/insert-schools', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("School added successfully");
      console.log(res.data);
      reset(); // Clear the input fields after successful submission
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <p>Name is required.</p>}

      <input {...register('address', { required: true })} placeholder="Address" />
      {errors.address && <p>Address is required.</p>}

      <input {...register('city', { required: true })} placeholder="City" />
      {errors.city && <p>City is required.</p>}

      <input {...register('state', { required: true })} placeholder="State" />
      {errors.state && <p>State is required.</p>}

      <input {...register('contact', { 
        required: true, 
        pattern: /^[0-9]{10}$/ })} 
        placeholder="Contact" type="text" maxLength="10"/>
      {errors.contact && <p>Contact is required and must be 10 digits.</p>}

      <input {...register('image', { required: true })} type="file" />
      {errors.image && <p>Image is required.</p>}

      <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
      {errors.email_id && <p>Valid email is required.</p>}

      <button type="submit">Add School</button>
    </form>
  );
};

export default AddSchool;
