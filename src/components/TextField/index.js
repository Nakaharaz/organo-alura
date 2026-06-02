import "./TextField.css";

const TextField = (props) => {
	const modifiedPlaceholder = `${props.placeholder}...`;

	// let value = "";

	const onType = (event) => {
		props.onChange(event.target.value);
	};

	return (
		<div className="text-field">
			<label>{props.label}</label>
			<input
				value={props.value}
				onChange={onType}
				required={props.required}
				placeholder={modifiedPlaceholder}
			/>
		</div>
	);
};

export default TextField;
