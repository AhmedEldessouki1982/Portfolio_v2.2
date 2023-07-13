import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const UseUserContext = createContext();

export default function GetUserObject(props) {
    const [userObject, setUserObject] = useState({});
    const getUser = async () => {
		try {
			const url = "http://localhost:8000/auth/getuser";
			const { data } = await axios.get(url, { withCredentials: true });
			setUserObject(data);
		} catch (err) {
			setUserObject(err.response.data);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

    return (
        <UseUserContext.Provider value={userObject}>{props.children}</UseUserContext.Provider>
    )
}

export const UseGetUser = () => {
    return useContext(UseUserContext);
};