"use client"

import { ReactNode } from "react";




export default function FrontEnd({children} : { children: ReactNode}){
   
    
    return (
       <div >
       <div >


             {children}
        </div>
       
       </div> 
    )
}