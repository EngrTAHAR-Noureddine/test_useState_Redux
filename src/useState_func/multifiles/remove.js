import React from 'react';

function Remove (props) {
    
        return (
            <div>
                <input className="remove" type="submit" value="remove"
                  onClick={props.Decrement}/>
            </div>
        )
    
}
export default Remove;