import React from 'react';

export default class SaveLoadFavorits extends React.Component{
//Saving and loading from Local storage
  saveToLocalStorage(){
    window.localStorage.setItem('favorits', JSON.stringify(this.state.favorits));
  }

loadFromLocalStorage(){
  this.setState({
    favorits: JSON.parse(window.localStorage.getItem("favorits")),
  })
}

	render(){
		return(
           <div className='SaveLoad'>
            <button onClick={() => this.loadFromLocalStorage()} >Load my favorits</button>
            <button onClick={() => this.saveToLocalStorage()} >Save My favorits</button>
          </div>   
			)
	}
}