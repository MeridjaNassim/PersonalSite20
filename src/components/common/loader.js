import React from 'react'
import { logos } from "./images"
export default function PageLoader({style,id,loading,relative} ) {


    return (
       
        <div
          key={`loader`}
          id={id}
          style={{
            ...style,
            alignItems: "center",
            backgroundColor: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position:relative ? 'relative': 'absolute' ,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <img width="100px" height="100px" src={logos.logo} style={{ margin: 0 }} alt="gdg-logo" />
         {loading ? <img src={logos.loading} width="100px" style={{ margin:"0 auto" , fontFamily:"sans-serif" , color:"#fafafa" , fontSize:14 ,
          }} alt="loading..."></img> : null }
           <noscript style={{textAlign : 'center',color :'#212121' , fontFamily:"Montserrat , sans-serif" , letterSpacing:"3px"}}>
        Please enable javascript to be able to see the site
      </noscript>
        </div>
    )
}
