import React, {Component} from "react"
import "./style.css"

class ImageGenerator extends Component {
constructor () 
{
    super();
    this.state = {
        topText:"",
        bottomText: "",
        randomImg: "https://picsum.photos/150"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) { 
    const {name, value} = event.target
    this.setState ({ [name] : value})
}

handleSubmit(event) {
    fetch("https://picsum.photos/150")
        .then(response => response.json())
        .then(response => {
            const {image} = response.data
            this.setState({ randomImg: image })
        })
}

 render () 
 {
     return ( 
         <div>
             <form className="image-gen-form" onSubmit={this.handleSubmit}>
             <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button>New Image</button>
             </form>
             <div className="image-gen">
                 <img src={this.state.randomImg} alt=""/>
                 <h2 className="top">{this.state.topText}</h2>
                 <h2 className="bottom">{this.state.bottomText}</h2>
             </div>
         </div>
     )
 }

}

export default ImageGenerator