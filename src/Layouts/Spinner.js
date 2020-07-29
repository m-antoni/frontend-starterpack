import React from 'react'
import spinner from './img/spinner.gif';

export const Spinner = ()=> {
	return (
		<img src={spinner} alt="spinner..." style={spinnerStyle}/>
	)
}

// works only in bootsrap
export const MiniSpinner = () => {
	return (
		<div className="text-center my-3">
			<div className="spinner-border text-primary" style={miniSpinnerStyle}></div>
		</div>
	)
}

// Styles
const spinnerStyle = {
	paddingTop: '100px',
	paddingBottom: '500px',
	width: '100px',
	margin: 'auto',
	display: 'block'
}

const miniSpinnerStyle = {
	width: '5rem',
	height: '5rem',
	margin: 'auto',
	display: 'block'
}
