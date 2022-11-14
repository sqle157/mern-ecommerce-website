import { Link } from 'react-router-dom';
// CSS
import './Button.scss';

const Button = ({ className, text, to, onClick, form, role }) => {
	// if Button is a Link
	if (to) {
		return (
			<Link className={className} to={to} onClick={onClick}>
				{text}
			</Link>
		);
	}

	// Default button
	return (
		<button className={className} onClick={onClick} form={form} role={role}>
			{text}
		</button>
	);
};
export default Button;
