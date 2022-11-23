import React from 'react';
import { useState } from 'react';

const Member = ({name, age, rating, activities }) => {

    const [visible, setVisible] = useState(true);

    const removeElement = () => {
        setVisible((prev) => !prev);
      };


    return (
        <div>
            {visible && <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <div>
                    <h2>{name}</h2>
                    <p>Age: {age}</p>
                    <p>Rating: {rating}</p>
                    <p>Activities: {activities.map((activity, i) => {
                        return (
                        <li>{activity}</li> 
                        )
                    })}</p>
                    <button onClick={removeElement}>
                        Remove
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default Member;