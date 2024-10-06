import React, { useState } from 'react';
import axios from 'axios';

function ReservationForm() {
    const [reservation, setReservation] = useState({
        name: '',
        email: '',
        reservationDate: '',
        reservationTime: '',
        numberOfGuests: ''
    });

    // Hanterar ändringar i formuläret
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservation({ ...reservation, [name]: value });
    };

    // Hanterar formulärets inskickande
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Lägg till sekunderna "00" till tiden för att matcha formatet "HH:mm:ss"
            const timeString = `${reservation.reservationTime}:00`;

            // Skicka bokningsdata till API
            const response = await axios.post('https://localhost:7032/api/Reservation', {
                Name: reservation.name, // Stor bokstav
                Email: reservation.email, // Stor bokstav
                ReservationDate: reservation.reservationDate, // Stor bokstav
                ReservationTime: timeString, // Stor bokstav
                NumberOfGuests: parseInt(reservation.numberOfGuests, 10) // Stor bokstav
            });
            console.log('Bokning skickad:', response.data);
            alert('Bokningen är skickad!');
        } catch (error) {
            console.error('Fel vid bokningen:', error);
            alert('Det gick inte att skicka bokningen. Försök igen.');
        }
    };

    return (
        <div>
            <h1>Boka bord</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Namn:
                    <input
                        type="text"
                        name="name"
                        value={reservation.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    E-post:
                    <input
                        type="email"
                        name="email"
                        value={reservation.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Datum:
                    <input
                        type="date"
                        name="reservationDate"
                        value={reservation.reservationDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Tid (heltimme):
                    <select
                        name="reservationTime"
                        value={reservation.reservationTime}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Välj tid</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                    </select>
                </label>
                <label>
                    Antal gäster:
                    <input
                        type="number"
                        name="numberOfGuests"
                        value={reservation.numberOfGuests}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Boka</button>
            </form>
        </div>
    );
}

export default ReservationForm;
