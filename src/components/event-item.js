import * as React from 'react'

const EventItem = ({ title, date, location }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default EventItem