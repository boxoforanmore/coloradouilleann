import * as React from 'react'
import EventItem from './event-item'
import FutureEvents from './future-events'
import PastEvents from './past-events'

const EventsList = () => {
  return (
    <div>
        <ul>
            <FutureEvents />
        </ul>
        <br />
        <ul>
            <PastEvents />
        </ul>
    </div>
  )
}

export default EventsList