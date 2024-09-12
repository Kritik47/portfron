import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const nav = useNavigate();
  
    return (
        <div className="bg-gradient-to-b from-blue-300 to-purple-300 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6 text-center">
                    <h1 className="text-3xl font-bold mb-4 text-blue-800">Successful payment done!</h1>
                    <h1 className="text-3xl font-bold mb-4 text-blue-800">Bank of Sahu</h1>
                    <button
                        onClick={() => nav('/')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        Go to Site
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;
