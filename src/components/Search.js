import React from 'react';

class Search extends React.Component {

selectStreamProvider= ()=>{
  let searchStreamProvider=document.getElementById('selectStreamProvider').value;
  let searchTerm=document.getElementById('searchTerm').value;
  console.log( searchStreamProvider + searchTerm)
}




  render() {
    return (
			<from>
        <label> Search</label>
          <select id='selectStreamProvider' onClick={()=>this.selectStreamProvider()} >
          {this.props.streamProviders.map(function(streamProvider, index){
            return(
                <option id={index}>{streamProvider}</option>
              )
          }
            )}
          </select>
    </from>
    );
  }
}

export default Search;