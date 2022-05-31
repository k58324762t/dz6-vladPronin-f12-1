import React from 'react'

export function Users({ data }) {
	return (
		<>
			<td>
				{data.map((key, el) => {
					return (
						<>
							<th key={key}>{el.name}</th>
							<th key={key}>{el.email}</th>
							<th key={key}>{el.userName}</th>
						</>
					)
				})}
			</td>
		</>
	)
}
