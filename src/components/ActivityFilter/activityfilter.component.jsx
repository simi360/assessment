import React from 'react';

const ActivityFilter = ({value}) => {
	return (
		<div className='pa2 tc'>

			<input 
            value= {value}
			type='radio' 
            id={value}
            name='activity'
			// onChange = {searchChange}
			/>
            <label for={value}>{value}</label>

		</div>
		);
}

export default ActivityFilter;