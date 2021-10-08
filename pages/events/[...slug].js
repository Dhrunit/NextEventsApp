import { useRouter } from 'next/dist/client/router'
import React from 'react'
import EventList from '../../components/events/eventList'
import { getFilteredEvents } from '../../dummy-data'
export default function FilteredEvent() {
	const router = useRouter()
	const filteredData = router.query.slug
	if (!filteredData) {
		return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
	}
	const filteredYear = filteredData[0]
	const filteredMonth = filteredData[1]

	const numYear = +filteredYear
	const numMonth = +filteredMonth

	if (
		isNaN(numMonth) ||
		isNaN(numYear) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return <h1 style={{ textAlign: 'center' }}>Invalid Filter</h1>
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })
	if (!filteredEvents || filteredEvents.length === 0) {
		return <h1 style={{ textAlign: 'center' }}>No data found....</h1>
	}
	return (
		<div>
			<EventList items={filteredEvents} />
		</div>
	)
}
