import axios from 'axios';
import React from 'react';
import SearchInput from './SearchImput';
import ImageList from './ImageList';


class App extends React.Component {
  state = {images: [] }

 onSearchSubmit =  async (entry) =>{
  
  const response = await axios.get(`https://pixabay.com/api/?key=22632839-082ca2a3a5bd47cac60bc5443&q=${entry}&image_type=photo`)
 this.setState({images:response.data.hits})
  }

  
  render(){


     return(
         <div className= 'ui container' style = {{marginTop:'30ox'}}>
       <SearchInput onSearchSubmit ={this.onSearchSubmit}/>
       Tenemos {this.state.images.length} Imagenes
         <ImageList  images = {this.state.images}/>
         </div>

     )
}
}


export default App;
