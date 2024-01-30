import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";
import Search from "../component/Search";
import Quotation from "../component/Quotation";
import Refund from "../component/Refund";
import Payment from "../component/Payment";
import Cuttinglist from "../component/Cuttinglist";
import Memo from "../component/Memoo";





const Dashboard = () => {
    const [isOpen, setIsOpen] = React.useState(null)
    React.useEffect(()=> {console.log(isOpen);},[isOpen])
    function openModalButtonTop(id, e){
        const found = modalButtonsTop.find(row=> row.id === id)
        setIsOpen(prev=> prev? null: found)
    }
    function openModalButtonBottom(id, e){
        const found = modalButtonsBottom.find(row=> row.id === id)
        setIsOpen(prev=> prev? null: found)
    }
  return (
    <div>
    <div className="dashbaord-container">
      <div>
        <h1> Price list </h1>
        <table border={1} style={{width:"200px"}}>
          <tr style={{width: "200px"}}>
            <th >Product</th>
            <th>price</th>
          </tr>
          <tr>
            <td>Alum 0.45</td>
            <td>N2,300</td>
          </tr>
          <tr>
            <td>Alum 0.45</td>
            <td>N2,300</td>
          </tr>
        </table>
      </div>
      <div>

      <div className="dashboard-icon1">
        {modalButtonsTop.map((item) => (

        <div className="modal-bottns" key={item.id} >
        {item.icon}
        <button style={{ display: "flex", justifyContent:"center", alignItems: "center"}} onClick={()=> openModalButtonTop(item.id)} >{item.text}</button>
        </div>
        ))}

      </div>

      <div className="dashboard-icon2">
        {modalButtonsBottom.map((item) => (

        <div className="modal-bottns" key={item.id} >
        {item.icon}
        <button style={{ display: "flex", justifyContent:"center", alignItems: "center"}} onClick={()=> openModalButtonBottom(item.id)} >{item.text}</button>
        </div>
        ))}
        
      </div>

      </div>
      <div>
        <h1> Stock </h1>
        <table border={1}>
          <tr>
            <th>Product</th>
            <th>price</th>
          </tr>
          <tr>
            <td>Alum 0.45</td>
            <td>N2,300</td>
          </tr>
          <tr>
            <td>Alum 0.45</td>
            <td>N2,300</td>
          </tr>
        </table>
      </div>

    </div>
      <div style={{width: "800px", height:"600px", backgroundColor: '#f5f5f5',border:"1px solid #ccc",
       position:"fixed", top: "30%", left:"50%",transform:"translate(-50%)", display: isOpen ? "block" : "none"}}>
        {/* {modalButtons.map((item) => ( */}
            <div>

                <div>
                    {isOpen?.component}
                </div>
                <div style={{display:"flex", justifyContent: 'space-between', width: "100%", marginTop:"200px"}}>

          <button  style={{ marginLeft:'20px', color:'red'}}onClick={()=>openModalButtonTop(1)} >delete</button>
          <button style={{ marginRight:'50px',color:'green'}} onClick={()=>openModalButtonTop(1)} >print</button>
                </div>
            </div>
        {/* ))} */}


      </div>

    </div>

  );
};

const modalButtonsTop = [
    {
        id: 1,
        text: "search",
        icon: <IoSearchSharp  style={{fontSize: '150px'}} />,
        component: <Search/>,
        button1: "delete",
        button2: "print"
    },
    {
        id: 2,
        text: "quotation",
icon: <HiComputerDesktop  style={{fontSize: '150px'}}/>,
component: <Quotation/>,
button1: "delete",
        button2: "print"
},
{
    id: 3,
    text: "refund",
    icon: <HiOutlineReceiptRefund  style={{fontSize: '150px'}}/>,
        component: <Refund/>,
        button1: "delete",
        button2: "print"
    },
   

]

const modalButtonsBottom = [
    {
        id: 1,
        text: "payment",
        icon: <MdOutlinePayment  style={{fontSize: '150px'}}/>,
            component: <Payment/>,
            button1: "delete",
        button2: "print"
        },

        {
            id: 2,
            text: "cutting list",
            icon: <CiCircleList style={{fontSize: '150px'}}/>,
                component: <Cuttinglist/>,
                button1: "delete",
        button2: "print"
            },

            {
                id: 3,
                text: "memo",
                icon: <CiMemoPad style={{fontSize: '150px'}}/>,
                    component: <Memo/>,
                    button1: "delete",
        button2: "print"
                },
            
]

// const modalItems = [
//     {
//         key: 1,
//     },
//     {
//         key: 2,
//     },
//     {
//         key: 3,
//     },
// ]

export default Dashboard;
