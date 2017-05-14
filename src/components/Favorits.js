import React from 'react';

export default class Favorits extends React.Component{

changeChannel=function(index){
  console.log(index)
  this.setState({
    activeStream:this.props.favorits[index].link
  })
}


	render(){
		return(
           <div>
            <ul>
            {this.props.favorits.map((channel, index) =>{
              return(
                <li onClick={()=> this.changeChannel(index)} className='favorits' id={channel.id}>
                  <img className='streamImg' src={channel.img} role='presentation'></img>
                <p>{channel.name}</p></li>
              )}
              )
              }
              </ul>
          </div>   
			)
	}

}