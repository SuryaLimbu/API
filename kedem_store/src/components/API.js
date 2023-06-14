
const BASE_URL = 'https://fakestoreapi.com';

const fetchData = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        if (response.ok) {
            const data = await response.json();
          
            return data;
        } else {
            throw new Error('Request failed');
        }
    } catch (error) {
        console.error(error);
    }
};

export default fetchData;
