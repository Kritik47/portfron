import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const ProductUpdate = () => {
  const { id } = useParams();
  const [proimage, setProImage] = useState(null);
  const [proname, setProName] = useState('');
  const [proprice, setProPrice] = useState('');
  const [protype, setProType] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const UpdateItem = async () => {
    setIsUpdating(true);
    const AllData = { proimage, proname, proprice, protype, qnty: 0 };
    try {
      const ID = 10001;
      let m = prompt('ONLY DEVELOPER CAN UPDATE ITEM HERE');
      m = parseInt(m, 10); // Convert m to an integer
      if (m === ID) {
        let response = await axios.put(`https://pronew.onrender.com/api/mdmarts/${id}`, AllData);
        response = await response.data;
        alert("Product updated successfully!");
        setIsUpdating(false);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    async function GetData() {
      try {
        let response = await axios.get(`https://pronew.onrender.com/api/mdmarts/${id}`);
        response = await response.data;
        setProImage(response.proimage);
        setProName(response.proname);
        setProPrice(response.proprice);
        setProType(response.protype);
      } catch (e) {
        console.log(e);
      }
    }
    GetData();
  }, [id]);

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', proimage);
      formData.append('upload_preset', 'relation');
      formData.append('cloud_name', 'dulq1nkwm');
      const ID = 10001;
      let m = prompt('ONLY DEVELOPER CAN UPLOAD..');
      m = parseInt(m, 10); // Convert m to an integer
      if (m === ID) {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dulq1nkwm/image/upload', formData);
        setProImage(response.data.secure_url);
        alert("Image Updated successfully!");
      }
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: "#333" }}>Update Product</h1>
        <div className="mb-4">
          <label htmlFor="proname" className="block font-medium mb-2">Product Name:</label>
          <input
            type="text"
            id="proname"
            value={proname}
            onChange={(e) => setProName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="proprice" className="block font-medium mb-2">Product Price:</label>
          <input
            type="number"
            id="proprice"
            value={proprice}
            onChange={(e) => setProPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="protype" className="block font-medium mb-2">Product Type:</label>
          <select
            value={protype}
            onChange={(e) => setProType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a type</option>
            <option value="Fancy">Fancy</option>
            <option value="Grocery">Grocery</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="proimage" className="block font-medium mb-2">Product Image:</label>
          <div className="flex justify-between items-center">
            <input
              type="file"
              id="proimage"
              onChange={(e) => setProImage(e.target.files[0])}
              className="w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleImageUpload}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
            >
              Upload
            </button>
          </div>
        </div>
        <button
          onClick={UpdateItem}
          disabled={isUpdating}
          className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isUpdating ? 'Updating...' : 'UPDATE'}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductUpdate;
