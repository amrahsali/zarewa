import React from "react";
import { HiComputerDesktop } from "react-icons/hi2";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { IconBase } from "react-icons";
import Quotation from "../component/Quotation";
import Reciept from "../component/Reciept";

const Transaction = () => {
  const [isOpen, setIsOpen] = React.useState(null);
  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  function openmodalbtn(id, e) {
    const open = modalBtn.find((rown) => rown.id === id);
    setIsOpen((prev) => (prev ? null : open));
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingRight: "20px",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <HiComputerDesktop style={{ fontSize: "100px" }} />
          </div>
          <div>
            <MdOutlinePayment style={{ fontSize: "100px" }} />
          </div>
          <div>
            <CiCircleList style={{ fontSize: "100px" }} />
          </div>
          <div>
            <HiOutlineReceiptRefund style={{ fontSize: "100px" }} />
          </div>
        </div>
        <div style={{ }}>
          <h3>Edit</h3>
          {modalBtn.map((item) => (
            <button
              style={{ display: "flex" }}
              onClick={() => openmodalbtn(item.id)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
      <div className="transaction-heading">
        <div>
          <h1> Qouation </h1>
          <table border={1} style={{ width: "200px" }}>
            <tr style={{ width: "200px" }}>
              <th>Qt.id</th>
              <th>Name</th>
              <th>Color</th>
              <th>Guage</th>
            </tr>
            <tr>
              <td>0544</td>
              <td>Abdurrahman</td>
              <td>PR</td>
              <td>Al/0.55</td>
            </tr>
            <tr>
              <td>0544</td>
              <td>Abdurrahman</td>
              <td>PR</td>
              <td>Al/0.55</td>
            </tr>
          </table>
        </div>
        <div>
          <div>
            <h1> Cutting List </h1>
            <table border={1} style={{ width: "200px" }}>
              <tr style={{ width: "200px" }}>
                <th>cut id</th>
                <th>Name</th>
                <th>Color</th>
                <th>Guage</th>
              </tr>
              <tr>
                <td>0544</td>
                <td>Abdurrahman</td>
                <td>PR</td>
                <td>Al/0.55</td>
              </tr>
              <tr>
                <td>0544</td>
                <td>Abdurrahman</td>
                <td>PR</td>
                <td>Al/0.55</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div>
            <h1> Payment </h1>
            <table border={1} style={{ width: "200px" }}>
              <tr style={{ width: "200px" }}>
                <th>Rc id</th>
                <th>Payee</th>
                <th>QT.id</th>
                <th>Paid</th>
              </tr>
              <tr>
                <td>0544</td>
                <td>Abdurrahman</td>
                <td>PR</td>
                <td>Al/0.55</td>
              </tr>
              <tr>
                <td>0544</td>
                <td>Abdurrahman</td>
                <td>PR</td>
                <td>Al/0.55</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "800px",
          height: "600px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translate(-50%)",
          display: isOpen ? "block" : "none",
        }}
      >
        {/* {modalButtons.map((item) => ( */}
        <div>
          <div>{isOpen?.component}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "200px",
            }}
          >
            <button
              style={{ marginLeft: "20px", color: "red" }}
              onClick={() => openmodalbtn(1)}
            >
              delete
            </button>
            <button
              style={{ marginRight: "50px", color: "green" }}
              onClick={() => openmodalbtn(1)}
            >
              print
            </button>
          </div>
        </div>
        {/* ))} */}
      </div>
    </>
  );
};

const modalBtn = [
  {
    id: 1,
    component: <Quotation />,
    text: "Quotation",
  },
  {
    id: 2,
    component: <Quotation />,
    text: "Cutting list",
  },
  {
    id: 3,
    component: <Reciept />,
    text: "reciept",
  },
];
export default Transaction;
