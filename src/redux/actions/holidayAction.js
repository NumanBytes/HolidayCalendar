import axios from 'axios';

const API_KEY = 'RNxdm0QrDIllINScSSizzgxwTkn5aec6';
const API_URL = 'https://calendarific.com/api/v2/holidays';

export const fetchHolidays = (country, year) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    api_key: API_KEY,
                    country: 'Pakistan',
                    year: 2023,
                },
            });
            console.log('API_URL:', API_URL);
            console.log('API Request Params:', {
                api_key: API_KEY,
                country,
                year,
            });

            console.log('API Response:', response.data);
            const holidays = response.data.response.holidays;

            if (!holidays) {
                throw new Error('No holidays data found');
            }

            dispatch({
                type: 'FETCH_HOLIDAYS',
                payload: holidays,
            });

        } catch (error){
            console.error('Error fetching holidays', error);
        }
    };
};