import React, { useState } from 'react';
import axios from 'axios';

function DeleteReservation() {
    const [email, setEmail] = useState('');

    // Hantera ändring i e-postfältet
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Hantera borttagning av bokning
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            // Anropa DELETE på API
            const response = await axios.delete(`https://localhost:7032/api/Reservation/deleteByEmail/${email}`);
            console.log('Bokning borttagen:', response.data);
            alert('Bokningen har tagits bort!');
        } catch (error) {
            console.error('Fel vid borttagning av bokning:', error);
            alert('Det gick inte att ta bort bokningen. Försök igen.');
        }
    };

    return (
        <div>
            <h2>Ta bort bokning</h2>
            <form onSubmit={handleDelete}>
                <label>
                    E-post för bokning:
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </label>
                <button type="submit">Ta bort bokning</button>
            </form>
        </div>
    );
}

export default DeleteReservation;
