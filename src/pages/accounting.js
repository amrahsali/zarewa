import React from "react";
import { CiBank } from "react-icons/ci";



const Accounting = () => {

    return (
        <div>
            <div style={{display: "flex", justifyContent:"space-between"}} >

            <div>
            <button style={{ display: "flex"}}>Reciept</button>
            <button style={{ display: "flex" }}>deposit</button>               
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between",width:"100"}} >

            <div style={{display:"flex",justifyContent:"space-between"}}>

            <div style={{margin:"10px",width:"300px", height:"300px",  border: "1px solid rgb(178, 151, 151)",padding:"10px"}}>
                <h3>
                    N,1,045,000
                </h3>
                <p>Net sales</p>
            </div>  
           
            <div style={{margin:"20px",width:"300px", height:"300px", border: "1px solid rgb(178, 151, 151)",padding:"10px"}}>
                <h3>
                    N,1,045,000
                </h3>
                <p>cash</p>
            </div>  
            <div style={{margin:"20px",width:"300px", height:"300px",border: "1px solid rgb(178, 151, 151)",padding:"10px"}}>
                <form style={{}}>
                <label for="fcash">Floating Cash</label>
              <input
                style={{ width: "50px" }}
                type="text"/><br></br>
               <label for="Af">Available form</label>
              <input
                style={{ width: "50px" }}
                type="text"
              />
                </form>
            </div>  
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{margin:"10px",width:"300px", height:"300px", border: "1px solid rgb(178, 151, 151)",padding:"10px"}}>
                <h3>
                    N,1,045,000
                </h3>
                <p>Net sales</p>
            </div>  
           
            <div style={{margin:"20px",width:"300px", height:"300px", border: "1px solid rgb(178, 151, 151)",padding:"10px"}}>
                <h3>
                    Debitors
                </h3>
            </div>  
            <div style={{margin:"20px",width:"300px", height:"300px",border: "1px solid rgb(178, 151, 151)",padding:"10px"}}>
                <h3>
                    Creditors
                </h3>
            </div>  
            </div>
            </div>
                
                      
        </div>
            </div>
    )
};
export default Accounting;
