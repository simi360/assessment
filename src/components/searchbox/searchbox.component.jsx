import React from 'react';

const Searchbox = ({searchChange}) => {
	return (
		<div className='pa2 tc'>

			<input 
			className='tc pa3 ba b--green bg-lightest-blue' 
			type='search' 
			placeholder='Search Members' 
			onChange = {searchChange}
			/>

		</div>
		);
}

export default Searchbox;