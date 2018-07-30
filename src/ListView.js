import React from 'react';
import './App.css';

class ListView extends React.Component {
  render() {  
      // accessibility trick, seen on https://dev.to/johnlukeg/make-react-navigation-accessible-again
      const buildHandleEnterKeyPress = (onClick) => ({ key }) => {
          if (key === 'Enter') { 
            onClick(); 
          }
        };
      
    return (
        <ul className='list-view'>
                {this.props.data &&(
                    this.props.showedData.map((data, index)=>{
                        return(
                            <li role='button' key={data.id} id={data.id} onClick={this.props.handleClick.bind(this, data.id)} onKeyPress={buildHandleEnterKeyPress(this.props.handleClick.bind(this, data.id))} tabIndex={index+2}> 
                                <b className="list-name">{data.name}</b> <br/> 
                                <i className="list-location">{data.place}</i> <br/>
                                <span className="list-date">{data.date}</span>
                            </li>
                        )
                    })
                )}
        </ul>
     
    );
  }
}

export default ListView;
