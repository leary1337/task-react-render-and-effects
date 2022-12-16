import {useEffect, useState} from "react";
import {subscribe, unsubscribe} from './resources/API';

export function Effects(props: { sourceId: string }) {
	const [message, setMessage] = useState(-1);
	const updateMessage = (message: any) => {
		setMessage(message);
	};
	
	useEffect(() => {
		setMessage(-1);
		subscribe(props.sourceId, updateMessage);
		return () => unsubscribe(props.sourceId, updateMessage);
	}, [props.sourceId]);
	
	return (
		<div>
			{props.sourceId}: {message}
		</div>
	);
}
