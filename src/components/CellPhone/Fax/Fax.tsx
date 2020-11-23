import React from 'react';
import styles from 'styled-components'

export const Fax = () => {
    return (
        <div>
            <div style={{height:64,backgroundColor:'#F9FBFF'}}>Send a fax</div>
            <span>Send to</span>
            <input/>
            <span>Cover page notes</span>
            <textarea/>
            <span>Attach</span>
            <input type="file"/>
            <button>Send</button>
        </div>
    );
};
