import axios from "axios";
import React, { useEffect, useState } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import { useDispatch } from "react-redux";
import { addcarts } from "./ProductSlice";
import { motion } from "framer-motion";

const Groccery = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  async function getData() {
    setLoading(true);
    try {
      const res = await axios.get("https://pronew.onrender.com/api/mdmarts");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-gray-200">
          <RiseLoader color="red" loading={loading} size={15} />
        </div>
      ) : (
        <div className="w-full min-h-screen bg-gradient-to-r from-yellow-100 via-green-100 to-blue-100 p-4">
          <div className="w-full max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Groccery name.."
              className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-8"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data
                .filter((item) => {
                  const itemName = item.proname?.toLowerCase() || "";
                  const searchQuery = search.toLowerCase();
                  return item.protype === "Grocery" && itemName.includes(searchQuery);
                })
                .map((item) => (
                  <motion.div
                    key={item.id}
                    className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-2"
                  >
                    <img className="w-48 h-48 object-cover mx-auto" src={item.proimage} alt={item.proname} />
                    <div className="px-6 py-4">
                      <h2 className="font-bold text-center mb-2 text-gray-800">{item.proname}</h2>
                      <h2 className="font-bold text-center mb-2 text-gray-800">Rs: {item.proprice}</h2>
                      <button
                        onClick={() => dispatch(addcarts(item))}
                        className="bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-8 rounded mx-auto block"
                      >
                        Add Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Groccery;
