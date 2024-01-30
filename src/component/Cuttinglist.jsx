import React from 'react'

const Cuttinglist = () => {
  return (
    <div>

      <h1 style={{textAlign: "center"}} >Cutting List</h1>
    <div style={{display: "flex", justifyContent: "space-between",  }} >
    <form>
        <label for="qtno">RecieptId</label> br
              <input
                style={{ width: "50px" }}
                type="text"
              />
        <label for="date">Date</label>
              <input
                style={{ width: "50px" }}
                type="text"
              />
               <label for="new">New</label>
              <input
                style={{ width: "50px" }}
                type="text"
              />
    </form>
    <table border={1} >
      <tr>
        <td style={{width: "100px", height: "25px"}} ></td>
        <td style={{width: "100px", height: "25px"}} ></td>
        <td style={{width: "100px", height: "25px"}} ></td>
      </tr>
      <tr>
        <td style={{ height: "25px"}} colSpan={3} ></td>
      </tr>
      <tr>
        <td style={{width: "100px", height: "25px"}} ></td>
        <td style={{width: "100px", height: "25px"}} ></td>
        <td style={{width: "100px", height: "25px"}} ></td>
      </tr>
    </table>
    </div>






    </div>
  )
}

export default Cuttinglist
