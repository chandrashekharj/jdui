import React from "react";
import FileDrop from 'react-file-drop';
import './style.css';

class DragDropCompnent extends React.Component {
    handleDrop = (files, event) => {
        console.log(files, event);
        const {
            currentTarget = {},
        } = event;

        const fileName = files[0].name;
        
        console.log(files);
        let textNode = document.createTextNode(fileName);
        currentTarget.nextSibling.innerHTML = '';
        currentTarget.nextSibling.appendChild(textNode);  
    }
    handleChange = (e)=>{
            const {
            currentTarget: {
                value = ''
            } = {},
            //currentTarget = {},
            } = e;
            let val = value.split('fakepath');
            console.log(val)
            //let fileValue= val[1];
        
    }
    render() {
       
        return(
            <div className="grid-wrap">
                <h3>Drag & Drop</h3>
                <div id="react-file-drop-demo" className="file-drop">
                    <FileDrop onDrop={this.handleDrop} className="file-drop-target">
                        Drop some files here!                    
                    </FileDrop>
                    <div className="fileDrop"></div>
                     <h2> OR </h2>
                     <label htmlFor="file-upload" className="custom-file-upload">
                        <i className="fa fa-cloud-upload"></i> Custom Upload
                    </label>
                    <div>
                    <input id="file-upload" onChange={this.handleChange} type="file"/>
                        <div className="fileDrop"></div>
                    </div>          
                 </div>
            </div>
        )
    }
}
export default DragDropCompnent;