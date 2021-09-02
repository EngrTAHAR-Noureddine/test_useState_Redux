import React from 'react';

function Add(props) {

    
        return (
            <div>
                <input className="add" type="submit" value="Add" 
                onClick={props.Increment}/>
            </div>
        )
    
}
export default Add;