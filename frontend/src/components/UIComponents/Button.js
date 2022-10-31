import { Link } from 'react-router-dom';

// css
import './Button.scss';

const Button = ({ className, text, to, onClick }) => {
	if (to) {
		return (
			<Link className={className} to={to} onClick={onClick}>
				{text}
			</Link>
		);
	}

	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};
export default Button;
