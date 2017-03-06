import React from 'react';

class Search extends React.Component {
  render() {
    return (
			<from>
        <label> Search Stuffs</label>
          <select>
            <option>Twitch</option>
            <option>YouTube</option>
          </select>
          <label>Enter name for favorits</label>
          <input id='streamNameInput' type='add'></input> 
     	  <button>Add to favorits</button>

    </from>
    );
  }
}

export default Search;