import React, { useEffect, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Del = ({ id }) => {
    const nav = useNavigate();
    const [Value, SetValue] = useState([]);

    useEffect(() => {
        async function GetData() {
            try {
                let response = await axios.get(`https://mdmartsserver.onrender.com/api/mdmarts/${id}`);
                response = response.data;
                SetValue(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        GetData();
    }, [id]);

    const DelItem = async () => {
        try {
            const ID = 10001;
            if (Value.protype === "Fancy") {
                let m = parseInt(prompt('ONLY DEVELOPER CAN DELETE..'));
                if (ID === m) {
                    let response = await axios.delete(`https://mdmartsserver.onrender.com/api/mdmarts/${id}`);
                    response = response.data;
                    alert('Data deleted....');
                    nav('/fancy');
                }
            }
            if (Value.protype === "Grocery") {
                let m = parseInt(prompt('ONLY DEVELOPER CAN DELETE..'));
                if (ID === m) {
                    let response = await axios.delete(`https://mdmartsserver.onrender.com/api/mdmarts/${id}`);
                    response = response.data;
                    alert('Data deleted....');
                    nav('/');
                }
            }
            if (Value.protype === "Mobile") {
                let m = parseInt(prompt('ONLY DEVELOPER CAN DELETE..'));
                if (ID === m) {
                    let response = await axios.delete(`https://mdmartsserver.onrender.com/api/mdmarts/${id}`);
                    response = response.data;
                    alert('Data deleted....');
                    nav('/mobile');
                }
            }
            if (Value.protype === "Laptop") {
                let m = parseInt(prompt('ONLY DEVELOPER CAN DELETE..'));
                if (ID === m) {
                    let response = await axios.delete(`https://mdmartsserver.onrender.com/api/mdmarts/${id}`);
                    response = response.data;
                    alert('Data deleted....');
                    nav('/laptop');
                }
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

    return (
        <button
            onClick={DelItem}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
            <DeleteIcon className="text-white" />
        </button>
    );
}

export default Del;
