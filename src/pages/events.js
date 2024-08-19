import * as React from 'react'
import EventItem from '../components/event-item'
import Layout from '../components/layout'
import EventsList from '../components/events-list'
// import * as PastEvents from '../data/past-events'
// import * as FutureEvents from '../data/future-events' 

const Events = () => {
//   const events = [
//     { title: 'Concert 1', date: '2024-11-15', location: 'City Hall' },
//     { title: 'Workshop', date: '2024-12-02', location: 'Community Center' },
//   ]

  return (
    <Layout>
      <h1>Events</h1>
      <EventsList />
    </Layout>
  )
}

export default Events