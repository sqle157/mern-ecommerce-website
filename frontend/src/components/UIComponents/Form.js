import { useState } from 'react';
import { useHttpHook } from '../../hooks/useHttpHook';
import { useOrderContext } from '../../hooks/useOrderContext';
// Images & Components
import DeliveryIcon from '../../assets/checkout/icon-cash-on-delivery.svg';
// CSS
import './Form.scss';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [method, setMethod] = useState('e-Money');
	const [eNumber, setENumber] = useState('');
	const [ePIN, setEPIN] = useState('');
	const { sendRequest, error, emptyFields, errorFields } = useHttpHook();
	const { orders, dispatch } = useOrderContext();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = {
			name,
			email,
			phone,
			address,
			zipCode,
			city,
			country,
			method,
			eNumber: method === 'e-Money' ? eNumber : '',
			ePIN: method === 'e-Money' ? ePIN : '',
			orders,
		};

		try {
			const data = await sendRequest(
				'/api/order',
				'POST',
				JSON.stringify(formData),
				{
					'Content-Type': 'application/json',
				}
			);

			if (data) {
				window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
				dispatch({ type: 'TOGGLE_MODAL' });
				dispatch({ type: 'REMOVE_ALL_ORDER' });
				clearFields();
			}
		} catch (error) {}
	};

	const clearFields = () => {
		setName('');
		setAddress('');
		setEmail('');
		setPhone('');
		setZipCode('');
		setCity('');
		setCountry('');
		setMethod('e-Money');
		setENumber('');
		setEPIN('');
	};

	return (
		<form
			id='checkout-form'
			className='form'
			autoComplete='off'
			onSubmit={handleSubmit}>
			<input
				autoComplete='false'
				name='hidden'
				type='text'
				style={{ display: 'none' }}
			/>
			<h3>Checkout</h3>
			<div className='form-group'>
				<span className='subtitle'>Billing Details</span>
				<div className='form-control'>
					<div
						className={`form-input ${
							error === 'Empty Field' && emptyFields.includes('info') && !name
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							placeholder='Alexei Ward'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!name && <span className='error-message'>{error}</span>}
					</div>
					<div
						className={`form-input ${
							error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!email) ||
								(errorFields.length > 0 && errorFields.includes('email')))
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							placeholder='alexei@mail.com'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!email) ||
								(errorFields.length > 0 && errorFields.includes('email'))) && (
								<span className='error-message'>{error}</span>
							)}
					</div>
					<div
						className={`form-input ${
							error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!phone) ||
								(errorFields.length > 0 && errorFields.includes('phone')))
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='phone'>Phone</label>
						<input
							type='tel'
							id='phone'
							placeholder='+1 202-555-0136'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						{error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!phone) ||
								(errorFields.length > 0 && errorFields.includes('phone'))) && (
								<span className='error-message'>{error}</span>
							)}
					</div>
				</div>
			</div>
			<div className='form-group'>
				<span className='subtitle'>Shopping Info</span>
				<div className='form-control'>
					<div
						className={`form-input ${
							error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!address
								? 'form-error'
								: ''
						}`}
						id='form-address'>
						<label htmlFor='address'>Address</label>
						<input
							type='text'
							placeholder='1137 Williams Avenue'
							id='address'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						{error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!address && <span className='error-message'>{error}</span>}
					</div>
					<div
						className={`form-input ${
							error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!zipCode) ||
								(errorFields.length > 0 && errorFields.includes('zip-code')))
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='zip-code'>Zip Code</label>
						<input
							type='text'
							placeholder='10001'
							id='zip-code'
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
						/>
						{error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!zipCode) ||
								(errorFields.length > 0 &&
									errorFields.includes('zip-code'))) && (
								<span className='error-message'>{error}</span>
							)}
					</div>
					<div
						className={`form-input ${
							error === 'Empty Field' && emptyFields.includes('info') && !city
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='city'>City</label>
						<input
							type='text'
							id='city'
							placeholder='New York'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						{error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!city && <span className='error-message'>{error}</span>}
					</div>
					<div
						className={`form-input ${
							error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!country
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='country'>Country</label>
						<input
							type='text'
							id='country'
							placeholder='United State'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
						{error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!country && <span className='error-message'>{error}</span>}
					</div>
				</div>
			</div>
			<div className='form-group'>
				<span className='subtitle'>Payment Details</span>
				<div className='form-control'>
					<div className='form-input' id='form-radio'>
						<label htmlFor=''>Payment Method</label>
						<div className='form-radio'>
							<div className='flex'>
								<input
									type='radio'
									id='method-1'
									value='e-Money'
									checked={method === 'e-Money' ? true : false}
									onChange={(e) => setMethod(e.target.value)}
								/>
								<label htmlFor='method-1'>e-Money</label>
							</div>
							<div className='flex'>
								<input
									type='radio'
									id='method-2'
									value='Cash on Delivery'
									checked={method === 'Cash on Delivery' ? true : false}
									onChange={(e) => setMethod(e.target.value)}
								/>
								<label htmlFor='method-2'>Cash on Delivery</label>
							</div>
						</div>
					</div>
					{method === 'e-Money' && (
						<>
							<div
								className={`form-input ${
									error === 'Empty Field' &&
									emptyFields.includes('method') &&
									!eNumber
										? 'form-error'
										: ''
								}`}>
								<label htmlFor='eMoneyNumber'>e-Money Number</label>
								<input
									type='text'
									id='eMoneyNumber'
									placeholder='238521993'
									value={eNumber}
									onChange={(e) => setENumber(e.target.value)}
								/>
								{error === 'Empty Field' &&
									emptyFields.includes('method') &&
									!eNumber && <span className='error-message'>{error}</span>}
							</div>
							<div
								className={`form-input ${
									error === 'Empty Field' &&
									emptyFields.includes('method') &&
									!ePIN
										? 'form-error'
										: ''
								}`}>
								<label htmlFor='city'>e-Money PIN</label>
								<input
									type='text'
									id='country'
									placeholder='6891'
									value={ePIN}
									onChange={(e) => setEPIN(e.target.value)}
								/>
								{error === 'Empty Field' &&
									emptyFields.includes('method') &&
									!ePIN && <span className='error-message'>{error}</span>}
							</div>
						</>
					)}
					{method === 'Cash on Delivery' && (
						<div className='form-message'>
							<div>
								<img src={DeliveryIcon} alt='' />
							</div>
							<div>
								<p>
									The ‘Cash on Delivery’ option enables you to pay in cash when
									our delivery courier arrives at your residence. Just make sure
									your address is correct so that your order will not be
									cancelled.
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</form>
	);
};
export default Form;
