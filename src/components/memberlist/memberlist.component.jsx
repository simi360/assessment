import React from 'react';
import Member from '../member/member.component'

const Memberlist = ({members}) => {
	return (
		<div>
			{members.map((user,i) => {
				return (
					<Member key={i} 
					name={members[i].name}
					age={members[i].age}
                    rating={members[i].rating}
                    activities={members[i].activities}
                    
					/> )
				})
			}
		</div>
	);
}

export default Memberlist; 