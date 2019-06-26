import React from 'react';

/** vue中的指令
 * v-text
 * v-html
 * v-if
 * v-show
 * v-for
 * v-on
 * v-bind
 * v-model
 * v-pre
 * v-once
 */



//声明组件，就是一个类
class App1 extends React.Component{
  constructor(){
    super();
    this.state = {
      message:'hello react',
      title:'App',
      isActive:true,
      isExist:true,
      isShow:true,
      list:['a','b','c','d','e'],
      obj:{
        a:1,
        b:2,
        c:3
      }
    }
  }


  render(){
    //不用每次都写this.state了
    let {title,isActive,isExist,isShow,list,obj} = this.state;

    //局部变量也可以解析，直接写变量
    let message = 'hello message'

    //v-html:
    let dom = <div></div>

    // v-bind
    let path = 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=47ecfc47bfde9c82b268f1dd0de8eb6f/f9198618367adab49f59033d87d4b31c8601e4c7.jpg'
    let boxClass = 'box' + this.state.isActive&&'active';


    return (
      <div className='app'>
        {/* v-text */}
        <h1>{title}</h1>
        <h3>{message}</h3>
        {dom}


        {/* v-bind */}
        <img src={path} alt=""/>
        {/* 如果有其他类名 */}
        <div className={'box' + isActive?'active':''}></div>
        <div className={'box' + isActive&&'active'}></div>
        <div className={boxClass}></div>

        {/* 如果绑定syle，需要写style的对象 */}
        <div style={{width:'100px',height:'100px',backgroundColor:'red'}}></div>


        {/* v-if */}
        {isExist && <div style={{width:'100px',height:'100px',backgroundColor:'yellow'}}></div>}
        {isExist ? <div style={{width:'100px',height:'100px',backgroundColor:'yellow'}}></div> : ''}


        {/* v-show */}
        <div style={{width:'100px',height:'100px',backgroundColor:'red',display:isShow?'':'none'}}></div>
        <div style={{width:'100px',height:'100px',backgroundColor:'red',display:!isShow&&'none'}}></div>
        <div style={{width:'100px',height:'100px',backgroundColor:'red',display:isShow||'none'}}></div>


        {/* v-for */}
        <ul>{/*数组 */}
          {
            // 第一种方式
            list.map(item=>{
              return <li key={item}>{item}</li>
            })

            // 第二种方式
            (function(){
              let dom = [];
              for(let i = 0;i<list.length;i++){
                dom.push(<li key={list[i]}>{list[i]}</li>)
              }
              return dom;
            })()
          }
        </ul>

        <ul>{/*对象*/}
          {
            Object.keys(obj).map(key=>{
              return <li key={key}>{obj[key]}</li>
            })
          }
        </ul>

      </div>
    )
  }

}

export default App1;
