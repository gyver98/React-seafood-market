import React from 'react';

class StorePicker extends React.Component {
    render() {
        // javascript style comment
        return (
            <form className="store-selector">
                {/*JSX comment*/}
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;