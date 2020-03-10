import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
   render(){
      return (
         <div>
            <div className="ui container">
               <SearchBar  className="ui"/>
            </div>
         </div>
      ); 
   }
}

export default App;