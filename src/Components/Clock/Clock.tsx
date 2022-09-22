import {useEffect, useState} from 'react';
import {CurContainer, CurDate, CurDay, CurTime} from "./ClockStyled";

function Clock(): JSX.Element {
	const day: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	const [date, setDate] = useState(new Date());
	
	useEffect(() => {
		const id = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(id)
	}, [])
	
	return (
		<CurContainer>
			<CurDate>
				{date.getFullYear()}&nbsp;/&nbsp;
				{date.getMonth() + 1}&nbsp;/&nbsp;
				{date.getDate()}
			</CurDate>
			<CurDay>
				{day[date.getDay()]}
			</CurDay>
			<CurTime>
				{date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
				&nbsp;:&nbsp;
				{date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
			</CurTime>
		</CurContainer>
	)
}

export default Clock;