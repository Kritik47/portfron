import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from "@material-ui/icons/Remove";
import { removecarts, clearcarts, addcarts, removesingle } from "./ProductSlice";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";

const Addcarts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allpro.product);

  const calTotal = () => {
    return data.reduce((acc, item) => {
      return acc + item.qnty * item.proprice;
    }, 0);
  };

  const HandleStripe = async () => {
    const Stripe = await loadStripe('pk_test_51PGBd4SIVAMgmpINu8DChyeLmWLx5aZqCd1M2tqzjGmzKPwjMOQIGCELPPfxGeqD28tX2AOonm4kbGEEJ0XK0WQH00fTTMO2IX');
    try {
      let response = await axios.post('https://mdmartsserver.onrender.com/api/stripe', data);
      response = await response.data;
      const result = await Stripe.redirectToCheckout({
        sessionId: response.id
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 bg-red-500 h-auto p-4 rounded">
      <div className="w-full h-auto bg-gray-700 flex flex-col md:flex-row justify-between items-center px-4 py-2 rounded">
        <div className="mb-2 md:mb-0">
          <h2 className="text-white">TOTAL: {calTotal().toFixed(2)}</h2>
        </div>
        <div className="flex space-x-2">
          <button onClick={HandleStripe} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Pay
          </button>
          <button
            onClick={() => dispatch(clearcarts())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Clear
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {data.map((item) => (
          <div key={item.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <img className="w-48 h-48 object-cover mx-auto" src={item.proimage} alt={item.proname} />
            <div className="px-6 py-4">
              <h2 className="font-bold text-center mb-2">{item.proname}</h2>
              <h2 className="font-bold text-center mb-2">Rs: {item.proprice}</h2>
              <div className="flex justify-center items-center space-x-2 mb-2">
                <button
                  onClick={item.qnty <= 1 ? () => dispatch(removecarts(item)) : () => dispatch(removesingle(item))}
                  className="bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2"
                >
                  <RemoveIcon className="w-4 h-4" />
                </button>
                <span>{item.qnty}</span>
                <button
                  onClick={() => dispatch(addcarts(item))}
                  className="bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2"
                >
                  <AddIcon className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => dispatch(removecarts(item))}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addcarts;
