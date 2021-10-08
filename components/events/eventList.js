import React from 'react'
import EventItem from './eventItem'
import classes from './eventList.module.css'

export default function EventList(props) {
	const { items } = props
	return (
		<ul className={classes.list}>
			{items.map((item) => (
				<EventItem
					key={Math.random()}
					title={item.title}
					id={item.id}
					location={item.location}
					date={item.date}
					image={item.image}
				/>
			))}
		</ul>
	)
}
