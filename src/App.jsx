import React from 'react';
import ReservationForm from './components/ReservationForm'; // Importera din nya komponent
import DeleteReservation from './components/DeleteReservation'; // Importera DeleteReservation

function App() {
    return (
        <div className="container">
            {/* Bokningsformuläret */}
            <ReservationForm />
            {/* Liten marginal mellan sektionerna */}
            <div style={{ margin: '2rem 0' }}></div>
            {/* Ta bort bokning */}
            <DeleteReservation />
        </div>
    );
}

export default App;
