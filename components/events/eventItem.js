import React from 'react'
import Link from 'next/link'
import classes from './eventItem.module.css'
import Button from '../ui/button'

export default function EventItem(props) {
	const { title, image, location, date, id } = props
	return (
		<li className={classes.item}>
			<img src={`localhost:3000/${image}`} alt='image' />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{date}</time>
					</div>
					<div className={classes.address}>
						<address>{location}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={`/events/${id}`}>Explore Event</Button>
				</div>
			</div>
		</li>
	)
}
