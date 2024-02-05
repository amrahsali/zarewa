import React from "react";
import { MdHome } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { FaSearch } from "react-icons/fa";





const Production = () => {

    return (
        <div style={{
            display: "flex",
            paddingRight: "20px",
            width: "100%",
            justifyContent: "space-around"
          }}>
            <div>

        <div
        style={{
            display: "flex",
        }}
        >
        <div style={{
            display: "flex", justifyContent:"center", alignItems: "center"
          }}>
          <MdHome style={{ fontSize: "100px", }} />
          <button>Home</button>
        </div>
        <div>
          <MdProductionQuantityLimits style={{ fontSize: "100px" }} />
        </div>
        <div>
          <MdModeEdit  style={{ fontSize: "100px" }} />
        </div>
        <div>
          <ImCancelCircle  style={{ fontSize: "100px" }} />
        </div>
        <div>
          <FaSearch   style={{ fontSize: "100px" }} />
        </div>
      </div>

    

        <div >
            <h3 style={{}}> Production Histoty </h3>
            <table border={1} style={{width:"200px"}}>
          <tr style={{width: "200px"}}>
            <th >ProId</th>
            <th>Date</th>
            <th >Name</th>
            <th>CutId</th>
            <th >Guage</th>
            <th>color</th>
            <th >coil</th>
            <th>Before</th>
            <th >kG</th>
            <th>After</th>
            <th >Meters</th>
            <th >Con</th>
            <th>Off</th>
          </tr>
          <tr>
            <td>459</td>
            <td>2/3/2024</td>
            <td>Ahamd Kafinta</td>
            <td>334</td><td>AZ/024</td>
            <td>BG</td><td>123</td>
            <td>56</td><td>43</td>
            <td>234</td><td>443</td>
            <td>22</td><td>100</td>
          </tr>
          <tr>
          <td>459</td>
            <td>2/3/2024</td>
            <td>Ahamd Kafinta</td>
            <td>334</td><td>AZ/024</td>
            <td>BG</td><td>123</td>
            <td>56</td><td>43</td>
            <td>234</td><td>443</td>
            <td>22</td><td>100</td>
          </tr>
        </table>

        
        </div>
            </div>
         <div>
         <h3> New Stock </h3>
         <table border={1} style={{width:"200px"}}>
       <tr style={{width: "200px"}}>
         <th >Id</th>
         <th>Coil No</th>
         <th >Guage</th>
         <th>Color</th>
         <th >Kg</th>
         
       </tr>
       <tr>
         <td>459</td>
         <td>2</td>
         <td>Cl</td>
         <td>334</td><td>56</td>
        
       </tr>
       <tr>
       <td>459</td>
         <td>2</td>
         <td>Cl</td>
         <td>334</td><td>56</td>
       </tr>
     </table>

              </div>
     
     </div>
    )
};
export default Production;