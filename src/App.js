import React from "react"
import product, { childmap, menus } from "./products"

console.log(product);
console.log("--menus", menus);
console.log("--children", childmap);

const App = () => {

    return (
<div>
    <h2>Simple bradcump</h2>



    {/* {
       
        brandcump.map((x, index)=>(
            <>
         <span style={{padding: "5px"}}><a href={x.link}>{x.name}</a></span>
           { brandcump.length-1 > index && <span> / </span>}

         </>
        ))
        
    } */}

{/**/}

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
        {
              menus.length > 0 && menus.map((item, index)=>(<li><a>{item.text}</a></li>))
        }

      {/* <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li> */}
    </ul>
  </div>
</div>

</div>
    ) 

}


export default App

