import { useState } from "react";
export default function Login()
{
 let arr= [{uname:"AAA" ,pass:"123"},{uname:"BBB" ,pass:"123"},{uname:"CCC" ,pass:"123"}]
    let [a,setSer] =useState("")
    let [b,setVar] =useState("")
    let [c,setVal] = useState("")
   // let nam=
    function nameHand(e)
    {   
        setSer(e.target.value)
        console.log(a)
    }
    function passHand(f)
    {
       setVar(f.target.value) 
        
    }

    
    function value()
    {
      // if(a=="xxx"&& b=="123" || a=="rrr" && b=="123" || a=="xeex" && b=="23")
     let result= arr.filter((w)=>{return w.uname==a && w.pass==b}); 
      if(result.length>0)
        {
           setVal(`Login sucess ${a}`) 
        
        }   
        else 
        {
            setVal("Login fail")
        }             
    }
    {
    return <div>
        Enter Name:<input type="text" onBlur={nameHand} placeholder="name"/>
        Enter Pass:<input type="password" onBlur={passHand} placeholder="password"/>
        <input type="button" value="click" onClick={value}/>
        <p>{c}</p>
    </div>
    }
}
