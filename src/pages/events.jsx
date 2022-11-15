import * as React from 'react';
import EventHero from '../components/events/eventHero';

const Events = () => {
    return (
        <main className='overflow-hidden'>
            <EventHero/>
            <div className="dummy" style={{ height: 2000 }}></div>
        </main>
    )
}

export default Events;