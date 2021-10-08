import React from 'react'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

import { useRouter } from 'next/dist/client/router'
import { getEventById } from '../../dummy-data'
export default function IndividualEvent() {
	const router = useRouter()
	let event = getEventById(router.query.id)
	if (!event) {
		return <div>Event Not found</div>
	}
	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	)
}
