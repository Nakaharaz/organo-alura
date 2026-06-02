import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
	return (
		props.employees.length > 0 && (
			<section
				style={{
					backgroundColor: props.secondaryColor,
				}}
				className="team"
			>
				<h3
					style={{
						borderColor: props.primaryColor,
					}}
				>
					{props.name}
				</h3>
				<div className="employees">
					{props.employees.map((employee) => (
						<Employee
							key={employee.name}
							backgroundColor={props.primaryColor}
							employee={employee}
							name={employee.name}
							role={employee.role}
							image={employee.image}
						/>
					))}
				</div>
			</section>
		)
	);
};

export default Team;
