import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment';
import {fetchHolidays} from "../redux/actions/holidayAction.js";
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localized = momentLocalizer(moment);
function HolidayCalendar({holidays, fetchHolidays}) {
    const [selectedCountry, setSelectedCountry] = useState('Pakistan');
    const [view, setView] = useState('month');

    useEffect(() => {
        fetchHolidays(selectedCountry, view);
    }, [fetchHolidays, selectedCountry, view]);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleViewChange = (newView) => {
        setView(newView);
    };
    console.log(holidays);
    return (
        <div>
            <div>
                <label htmlFor="country-select">Select a country: </label>
                <select
                    id="country-select"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="Pakistan">Pakistan</option>
                    <option value="USA">USA</option>
                    <option value="Iran">Iran</option>
                </select>
            </div>
            <div>
                <button onClick={() => handleViewChange('month')}>Month</button>
                <button onClick={() => handleViewChange('year')}>Year</button>
                <button onClick={() => handleViewChange('week')}>Week</button>
            </div>


            <Calendar
                localizer={localized}
                events={holidays}
                startAccessor="date"
                endAccessor="date"
                titleAccessor="name"
                style={{height: 500}}
                view={view}
                onView={handleViewChange}
            />
        </div>
    );
}


const mapStateToProps = (state) => ({
    holidays: state.holiday ? state.holiday.holidays: [],

});


export default connect(mapStateToProps, {fetchHolidays})(HolidayCalendar);
