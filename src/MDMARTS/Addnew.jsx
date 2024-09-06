import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Addnew = () => {
  const nav = useNavigate();
  const [proimage, setProImage] = useState(null);
  const [proname, setProName] = useState('');
  const [proprice, setProPrice] = useState('');
  const [protype, setProType] = useState('');
  const qnty = 0;
  const AllData = { proimage, proname, proprice, protype, qnty };

  const AddnewItem = async () => {
    console.log(AllData);
    const ID = 10001;
    try {
      if (proimage && proname && proprice && protype) {
        let m = prompt('ONLY DEVELOPER CAN ADD ITEM HERE');
        m = parseInt(m, 10); // Convert m to an integer
        if (m === ID) {
          const response = await axios.post('https://pronew.onrender.com/api/mdmarts', AllData);
          alert("Product added successfully!");
          console.log(response.data);
          setProImage(null);
          setProName('');
          setProPrice('');
          setProType('');
          nav('/all');
        }
      } else {
        alert("Fill all the fields...");
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleImageUpload = async () => {
    const ID = 10001;
    try {
      if (proimage) {
        const formData = new FormData();
        formData.append('file', proimage);
        formData.append('upload_preset', 'relation');
        formData.append('cloud_name', 'dulq1nkwm');
        let m = prompt('ONLY DEVELOPER CAN UPLOAD..');
        m = parseInt(m, 10); // Convert m to an integer
        if (m === ID) {
          const response = await axios.post('https://api.cloudinary.com/v1_1/dulq1nkwm/image/upload', formData);
          console.log(response.data);
          setProImage(response.data.secure_url);
          alert("Image Uploaded successfully!");
        }
      } else {
        alert('Please choose a file first.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <motion.div className="flex justify-center items-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>
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
            <motion.button
              onClick={handleImageUpload}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Upload
            </motion.button>
          </div>
        </div>
        <div className="flex justify-between">
          <motion.button
            onClick={AddnewItem}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Add Product
          </motion.button>
          <motion.button
            onClick={() => nav('/all')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            All Items
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Addnew;
