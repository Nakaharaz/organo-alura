import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [image, setImage] = useState("");
	const [team, setTeam] = useState(props.teams[0]);

	const onSave = (event) => {
		event.preventDefault();
		props.onEmployeeRegister({
			name,
			role,
			image,
			team,
		});
		setImage("");
		setName("");
		setRole("");
	};

	return (
		<section className="form">
			<form onSubmit={onSave}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<TextField
					required
					label="Nome"
					placeholder="Digite seu nome"
					value={name}
					onChange={(value) => setName(value)}
				/>
				<TextField
					required
					label="Cargo"
					placeholder="Digite seu cargo"
					value={role}
					onChange={(value) => setRole(value)}
				/>
				<TextField
					required
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					value={image}
					onChange={(value) => setImage(value)}
				/>
				<DropdownList
					required
					label="Time"
					itens={props.teams}
					value={team}
					onChange={(value) => setTeam(value)}
				/>
				<Button>Criar Card</Button>
			</form>
		</section>
	);
};

export default Form;
