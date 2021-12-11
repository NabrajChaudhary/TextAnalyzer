import React, {useState} from 'react'
import Button from '../Button/Index'

const TextField = (props) => {
     const [text, setText] = useState(' ');
    
    const handleOnChange=(event)=>{
        console.log("Change was done");
        setText(event.target.value);
    }

    const handleUppercase =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowercase =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText=()=>{
        let newText = ' ';
        setText(newText);
    }
    return (
        <div className='h-screen'>
            <div className="container text-blue-400">
                <h2 className='text-4xl my-2 py-5'>Enter Text here:</h2>
                <h1 className='text-center text-4xl'>{props.textAreaTitle}</h1>
                <textarea className=" bg-green-200 resize rounded-md w-10/12 text-xl text-black" placeholder='Enter Text Here' value={text}  onChange={handleOnChange}></textarea>

                <div>
                  <Button cname="bg-blue-400" btnTitle="Upper Case" onClickValue={handleUppercase}/>
                  <Button cname="bg-green-400" btnTitle="Lower Case" onClickValue={handleLowercase} />
                  <Button cname="bg-red-400" btnTitle="Clear Text" onClickValue={handleClearText} />
                </div>
            </div>
            <br/>
            <br/>
            <div className="container bg-gray-200 h-3/5">
                  <h1 className='text-3xl'>Text Details</h1>
                <h3 className='text-2xl text-black'>{text.split(" ").length} Words and {text.length} Characters.</h3>
                <h1 className='text-3xl'>Text Preview</h1>
                <p className='text-2xl'>{text}</p>
            </div>
        </div>
    )
}

export default TextField
