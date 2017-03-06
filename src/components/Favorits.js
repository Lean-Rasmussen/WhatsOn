import React from 'react';

export default class Favorits extends React.Component{




	render(){
		return(
           <div>
            <ul>
            {this.props.favorits.map((channel, index) =>{
              return(
                <li onClick={()=> this.changeChannel(index)} className='favorits' id={channel.id}>
                  <img className='streamImg' src={channel.img} role='presentation'></img>
                <span>{channel.name}</span></li>
              )}
              )
              }
              </ul>
          </div>   
			)
	}

}