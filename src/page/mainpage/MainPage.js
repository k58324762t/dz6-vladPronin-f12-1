import React, { useEffect, useState } from 'react'
import { Users } from '../../componets/User/Users'

const URl = 'https://jsonplaceholder.typicode.com/users'

function MainPage() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(URl)
			.then(res => res.json())
			.then(data => setData(data))
	})

	return (
		<>
			<table border='2'>
				<tr>
					<td>Name</td>
					<td>email</td>
					<td>userName</td>
				</tr>
				<tr>
					<Users data={data} />
				</tr>
			</table>
		</>
	)
}
export default MainPage
