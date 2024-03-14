import React from 'react'

const Ex_Event = () => {
  const handleClick = (e)=>{
document.getElementById('demoEvent').innerHTML = 'Em đã bị bấm '
  }
  const hienThiTen = (name)=>{
    alert(name)
  }
  return (
    <div>
        <h1>Demo event React</h1>
        <button className='' onClick={()=>{
            hienThiTen("Quang Khai") 
        }}>Click me</button>
        <p id="demoEvent">

        </p>
        <input type="text" name='' id='' placeholder='Vui lòng nhập tên' onChange={(e)=>{
            console.log(e.target.value);
            
        }} />
    </div>
  )
}

export default Ex_Event