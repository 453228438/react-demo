//React必须引入，React，ReactDOM名字是固定的
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';

//需要渲染的内容（DOM）
//需要渲染在哪里（el）
//渲染完成的回调
ReactDOM.render(
    //组件首字母必须大写，当成标签使用，可以是单标签，也可以是双标签
    <App/>,
    document.querySelector('#root'),
    // ()=>{
    //     console.log('渲染完成');
    // }
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();//可以在浏览器端开启一个小服务器
