import { useState } from 'react';
import { useHttpHook } from '../../hooks/useHttpHook';
import { useOrderContext } from '../../hooks/useOrderContext';
// Images & Components
import DeliveryIcon from '../../assets/checkout/icon-cash-on-delivery.svg';
// CSS
import './Form.scss';

const Form = () => {
	const { sendRequest, error, emptyFields, errorFields } = useHttpHook();
	const { orders, dispatch } = useOrderContext();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		zipCode: '',
		city: '',
		country: '',
		method: 'e-Money',
		eNumber: '',
		ePIN: '',
		orders,
	});

	// handle input change
	const handleChange = (e) => {
		const name = e.target.name;

		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: e.target.value,
			};
		});
	};

	// handle form submit
	const handleSubmit = async (e) => {
		e.preventDefault();

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
				clearFields();
			}
		} catch (error) {}
	};

	// helper function to clear the fields
	const clearFields = () => {
		setFormData({
			name: '',
			email: '',
			phone: '',
			address: '',
			zipCode: '',
			city: '',
			country: '',
			method: 'e-Money',
			eNumber: '',
			ePIN: '',
			orders,
		});
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
							error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!formData.name
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							placeholder='Alexei Ward'
							name='name'
							value={formData.name}
							onChange={handleChange}
						/>
						{error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!formData.name && <span className='error-message'>{error}</span>}
					</div>
					<div
						className={`form-input ${
							error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!formData.email) ||
								(errorFields.length > 0 && errorFields.includes('email')))
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							placeholder='alexei@mail.com'
							name='email'
							value={formData.email}
							onChange={handleChange}
						/>
						{error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!formData.email) ||
								(errorFields.length > 0 && errorFields.includes('email'))) && (
								<span className='error-message'>{error}</span>
							)}
					</div>
					<div
						className={`form-input ${
							error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!formData.phone) ||
								(errorFields.length > 0 && errorFields.includes('phone')))
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='phone'>Phone</label>
						<input
							type='tel'
							name='phone'
							placeholder='+1 202-555-0136'
							value={formData.phone}
							onChange={handleChange}
						/>
						{error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!formData.phone) ||
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
							!formData.address
								? 'form-error'
								: ''
						}`}
						id='form-address'>
						<label htmlFor='address'>Address</label>
						<input
							type='text'
							placeholder='1137 Williams Avenue'
							name='address'
							value={formData.address}
							onChange={handleChange}
						/>
						{error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!formData.address && (
								<span className='error-message'>{error}</span>
							)}
					</div>
					<div
						className={`form-input ${
							error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!formData.zipCode) ||
								(errorFields.length > 0 && errorFields.includes('zip-code')))
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='zip-code'>Zip Code</label>
						<input
							type='text'
							placeholder='10001'
							name='zipCode'
							value={formData.zipCode}
							onChange={handleChange}
						/>
						{error &&
							((emptyFields.length > 0 &&
								emptyFields.includes('info') &&
								!formData.zipCode) ||
								(errorFields.length > 0 &&
									errorFields.includes('zip-code'))) && (
								<span className='error-message'>{error}</span>
							)}
					</div>
					<div
						className={`form-input ${
							error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!formData.city
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='city'>City</label>
						<input
							type='text'
							name='city'
							placeholder='New York'
							value={formData.city}
							onChange={handleChange}
						/>
						{error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!formData.city && <span className='error-message'>{error}</span>}
					</div>
					<div
						className={`form-input ${
							error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!formData.country
								? 'form-error'
								: ''
						}`}>
						<label htmlFor='country'>Country</label>
						<input
							type='text'
							name='country'
							placeholder='United State'
							value={formData.country}
							onChange={handleChange}
						/>
						{error === 'Empty Field' &&
							emptyFields.includes('info') &&
							!formData.country && (
								<span className='error-message'>{error}</span>
							)}
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
									name='method'
									value='e-Money'
									id='method-1'
									checked={formData.method === 'e-Money' ? true : false}
									onChange={handleChange}
								/>
								<label htmlFor='method-1'>e-Money</label>
							</div>
							<div className='flex'>
								<input
									type='radio'
									name='method'
									id='method-2'
									value='Cash on Delivery'
									checked={
										formData.method === 'Cash on Delivery' ? true : false
									}
									onChange={handleChange}
								/>
								<label htmlFor='method-2'>Cash on Delivery</label>
							</div>
						</div>
					</div>
					{formData.method === 'e-Money' && (
						<>
							<div
								className={`form-input ${
									error === 'Empty Field' &&
									emptyFields.includes('method') &&
									!formData.eNumber
										? 'form-error'
										: ''
								}`}>
								<label htmlFor='eMoneyNumber'>e-Money Number</label>
								<input
									type='text'
									name='eNumber'
									placeholder='238521993'
									value={formData.eNumber}
									onChange={handleChange}
								/>
								{error === 'Empty Field' &&
									emptyFields.includes('method') &&
									!formData.eNumber && (
										<span className='error-message'>{error}</span>
									)}
							</div>
							<div
								className={`form-input ${
									error === 'Empty Field' &&
									emptyFields.includes('method') &&
									!formData.ePIN
										? 'form-error'
										: ''
								}`}>
								<label htmlFor='city'>e-Money PIN</label>
								<input
									type='text'
									name='ePIN'
									placeholder='6891'
									value={formData.ePIN}
									onChange={handleChange}
								/>
								{error === 'Empty Field' &&
									emptyFields.includes('method') &&
									!formData.ePIN && (
										<span className='error-message'>{error}</span>
									)}
							</div>
						</>
					)}
					{formData.method === 'Cash on Delivery' && (
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
