import { useRouter } from 'next/dist/client/router'
import React from 'react'
import EventList from '../../components/events/eventList'
import EventSearch from '../../components/events/eventSearch'
import { getAllEvents } from '../../dummy-data'
export default function AllEvents() {
	const events = getAllEvents()
	const router = useRouter()
	const findEventsHandler = (year, month) => {
		router.push(`events/${year}/${month}`)
	}
	return (
		<div>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</div>
	)
}
