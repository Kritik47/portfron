import axios from "axios";
import React, { useEffect, useState } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useNavigate } from "react-router-dom";
import { addcarts } from "./ProductSlice";
import Del from "./Del";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const All = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <div className="flex justify-center items-center h-screen">
          <RiseLoader color="green" loading={loading} size={15} />
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto mt-10 bg-gradient-to-r from-green-200 to-blue-200 p-4 rounded-lg">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search All types name.."
              className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <button
              onClick={() => navigate("/addnew")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0"
            >
              Add New Item
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data
              .filter((item) => {
                const itemName = item.proname?.toLowerCase() || "";
                const searchQuery = search.toLowerCase();
                return itemName.includes(searchQuery);
              })
              .map((item) => (
                <motion.div 
                  key={item.id} 
                  className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img className="w-full h-48 object-cover" src={item.proimage} alt={item.proname} />
                  <div className="px-6 py-4">
                    <h2 className="font-bold text-lg text-center mb-2 text-gray-800">{item.proname}</h2>
                    <h2 className="font-bold text-lg text-center mb-2 text-gray-800">Rs: {item.proprice}</h2>
                    <div className="flex justify-center items-center mt-4">
                      <button
                        onClick={() => navigate(`/update/${item._id}`)}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        <EditIcon className="text-white" />
                      </button>
                      <Del id={item._id} />
                    </div>
                    <button
                      onClick={() => dispatch(addcarts(item))}
                      className="bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-8 rounded mx-auto block mt-4"
                    >
                      Add Cart
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default All;