import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    
    // constructor() {
    //   super();
    //   this.goToStore = this.goToStore.bind(this);
    // }
    
    goToStore(event) {
      event.preventDefault();
      console.log('changed url');
      // first grap the text from the input box
      console.log(this.storeInput.value);
      // second we're going to transition from / to /store/:storeId
    }
    
    render() {
        // javascript style comment
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                {/*JSX comment*/}
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
                ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;