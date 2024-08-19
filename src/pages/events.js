import * as React from 'react'
import EventItem from '../components/event-item'
import Layout from '../components/layout'

const EventsList = () => {
  const events = [
    { title: 'Concert 1', date: '2024-11-15', location: 'City Hall' },
    { title: 'Workshop', date: '2024-12-02', location: 'Community Center' },
  ]

  return (
    <Layout>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.title}>
            <EventItem {...event} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default EventsList