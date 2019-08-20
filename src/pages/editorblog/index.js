import React, {Component} from 'react';
import Editor from 'wangeditor';
import Select from '../../components/select';
import { _axios, _sendImg } from '../../util/axios';
import { message } from 'antd';
import './index.scss';

export default class EditorBlog extends Component{
    constructor(props){
        super(props);
        this.state={
            type: 'javascript',
            num: 0,
            imgUrl: '',
            backgroundImg: ''
        }
    }

    handleSubmit = () =>{
        let date = new Date();
        let html = this.editor.txt.html(), title = this.refs.title.innerHTML;
        let { type, backgroundImg } = this.state;

        _axios('/add_blog', {
            _id: date.getTime(),
            type,
            title: title,
            content: html,
            readcount: 0,
            readlike: 0,
            author:'天边彩',
            img: backgroundImg
        }).then(res => {
            message.success('页面提交成功');
        })

        console.log(this.refs.title.innerHTML);
        console.log(this.editor.txt.html());
    }

    onChangeType = (title) =>{
        this.setState({
            type: title
        })
    }

    handleBackgroundImg = () => {
        if(this.refs.mybackground.value == ""){
            message.error("图片上传错误")
        }else{
            let form = new FormData();
            let files = this.refs.mybackground.files;
            for(var i=0; i<files.length;i++){
                var file = files[i];
                form.append('file', file, file.name);
            }

            _sendImg('/upload', form).then((res) => {
                this.setState({
                    backgroundImg: res.url
                })
            })
        }
    }

    sendPicToServer = (files, insert) => {
        var xhr = new XMLHttpRequest();
        var form  = new FormData();

        for(var i=0; i<files.length;i++){
            var file = files[i];
            form.append('file', file, file.name);
        }

        xhr.open('POST', window["_MAX_API_"]+'/upload', true);

        xhr.onreadystatechange = () => {
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
                console.log("22222222", JSON.parse(xhr.responseText));
                let  data  = JSON.parse(xhr.responseText);
                console.log("222222", data.data.msg.url);
                insert(data.data.msg.url);
            }
        }

        xhr.send(form);
    }

    componentDidMount(){
        this.editor = new Editor(this.refs.editorText);
        this.setState({num: 900});
        // this.editor.customConfig.uploadImgServer = 'http://localhost:4000/api/upload';
        this.editor.customConfig.uploadImgShowBase64 = true;
        this.editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
        this.editor.customConfig.uploadImgMaxLength = 10;
        this.editor.customConfig.uploadFileName = 'files';
        this.editor.customConfig.showLinkImg = false;
        this.editor.customConfig.customUploadImg = (files, insert) => {
            let url = this.sendPicToServer(files, insert);
        }
        this.editor.create()
    }
    render(){
        let { num, backgroundImg } = this.state;
        return(
            <div className='editorblog'>
                <h2 className="title" contentEditable="true" ref="title">编辑新的标题</h2>
                {/* <div className="editorBar" ref="editorBar"></div> */}
                <div className="editorText" ref="editorText" style={{zIndex: num}}></div>
                <Select
                    style={{width: 200}}
                    changeRole={(title) => this.onChangeType(title)}
                    data={['javascript', 'echarts', 'go', 'python', '情感话题', '随笔记录']}
                />
                <div className="file_back" style={{backgroundImage:`url(${backgroundImg})`, backgroundSize: 'cover'}}>首图选择<input ref="mybackground" type="file" accept=".png,.jpeg,.jpg,.gif" name="mybackground" onChange={this.handleBackgroundImg}/></div>
                <button className="submit" onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
}