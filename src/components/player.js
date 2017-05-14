import React from 'react';

export default class Player extends React.Component{

	render(){
		return(
			   <div className='TVcontainer'>
          <div className='playerContainer'>
            <h1>Player</h1>
            <div className='player'>
            <iframe src={this.props.activeStream} autoPlay='false' height="400" width="600" frameBorder="0" scrolling="no"
   					allowFullScreen="true">	</iframe>
            </div>
          </div> 
         </div>  
			)
	}
}
