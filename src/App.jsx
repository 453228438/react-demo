import React from 'react';


//声明组件，就是一个类
class App extends React.Component{
  constructor(){
    super();
    //定义组件的属性
    //必须写在constructor中
    this.state = {
      message:'hello react'
    }
    this.testAtion = this.testAtion.bind(this)//在此声明后，就无需在下面用bind了，是不传参的写法，传参还是得写在下面的方法上
  }


  render(){
    // console.log(this.state.message);
    // this.testAtion();


    //在render函数中返回组件的dom结构
    //dom结构必须是一个对象，多个标签需要一个根元素包裹
    return (//也可以返回一个数组，里面包含dom结构
      <div className='app'>
        <h1>test demo</h1>
  
        {/* 如需编译，要加上花括号{} */}
        <p>{this.state.message}</p>
        {/* 此时点击按钮后指向的是undefined，但是它本身有一个事件对象可以获取 */}
        <button onClick={this.testAtion}>按钮</button>
        {/* 需要用bind改变this指向，还可以传值，如果加了参数，那事件对象会排在后面 */}
        <button onClick={this.testAtion}>按钮1</button>
        <button onClick={this.testAtion}>按钮2</button>
        <button onClick={this.testAtion.bind(this,3)}>按钮3</button>

        <button onClick={this.modifyAction.bind(this)}>修改p标签</button>

      </div>
    )
  }

  //方法定义在类内部即可；在render中执行
  testAtion(idx,event){
    console.log(event)
    console.log(idx,'testAtion执行了')
  }

  modifyAction(){
    //不能这么直接修改state的值
    // this.state.message = 'hello world';

    //修改state的值的正确方式：使用setState()方法 
    if(this.state.message === 'hello react'){
      this.setState({message:'hello world'})
    }else {
      this.setState({message:'hello react'},()=>{
        console.log(this.state.message)
      })
    }
    
  }
}

export default App;
