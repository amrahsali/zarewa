import React from 'react'

const Stock = () => {
  return (
    <div>
    <h4>  Finished Stock</h4>
    <div>
        <h1> Stock </h1>
        <table border={1}>
          <tr>
            <th>Id</th>
            <th>Coil</th>
            <th>Guage</th>
            <th>Color</th>
            <th>Kg</th>

          </tr>
          <tr>
            <td>145</td>
            <td>0</td>
            <td>AZ/45</td>
            <td>BG</td> 
            <td>0</td>
          </tr>
          <tr>
          <td>145</td>
            <td>0</td>
            <td>AZ/45</td>
            <td>BG</td> 
            <td>0</td>
          </tr>
        </table>  
      </div>

    </div>
  )
}

export default  Stock