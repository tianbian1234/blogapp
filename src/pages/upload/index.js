import React, {Component} from 'react';
import axios from '../../util/axios';
import './index.scss';

export default class Upload extends Component{
    constructor(props){
        super(props);
    }
    handleClick = () =>{
        var xhr = new XMLHttpRequest();
        var form  = new FormData();
        var files = document.getElementById('file').files;

        for(var i=0; i<files.length;i++){
            var file = files[i];
            form.append('file', file, file.name);
        }

        xhr.open('POST', window['_MAX_API_']+'/upload', true);

        xhr.send(form);

    }
    render(){
        return(
            <div>
                <input type='file' name='file' id='file' multiple='multiple' />
                <button onClick={this.handleClick}>提交</button>
            </div>
        )
    }
}