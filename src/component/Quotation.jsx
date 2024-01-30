import React from "react";

const Quotation = () => {
  const [qtNo, setQtNo] = React.useState("");
  const [terms, setTerms] = React.useState("");
  const [pname, setPname] = React.useState("");
  const [pnumber, setpnumber] = React.useState("");
  const [date, setdate] = React.useState("");
  const [color, setcolor] = React.useState("");
  const [design, setdesign] = React.useState("");
  const [guage, setguage] = React.useState("");

  return (
    <div>
      <h3>Quotation</h3>
      <div className="quotation-div">
        <div className="qoutation-form">
          <form>
            <label for="qtno"> Qt No: </label>
            <input
              style={{ width: "50px" }}
              type="text"
              id="qtno"
              name="qtno"
              value={qtNo}
              onChange={(e) => setQtNo(e.target.value)}
            />
            <label for="terms"> Terms: </label>
            <input
              style={{ width: "30px" }}
              type="text"
              id="terms"
              name="terms"
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
            />
            <br />
            <label for="pname"> Project name: </label>
            <br />
            <input
              type="text"
              id="pname"
              name="name"
              value={pname}
              onChange={(e) => setPname(e.target.value)}
            />
            <br />
            <label for="pnumber"> Phone number: </label>
            <br />
            <input
              type="text"
              id="pnumber"
              name="Pnumber"
              value={pnumber}
              onChange={(e) => setpnumber(e.target.value)}
            />
            <br />
            <label for="date"> Date: </label>
            <br />
            <input
              type="text"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
            />
            <br />
            <label for="color"> Color: </label>
            <br />
            <input
              type="text"
              id="color"
              name="color"
              value={color}
              onChange={(e) => setcolor(e.target.value)}
            />
            <br />
            <label for="design">Design: </label>
            <br />
            <input
              type="text"
              id="design"
              name="design"
              value={design}
              onChange={(e) => setdesign(e.target.value)}
            />
            <br />
            <label for="guage"> Guage: </label>
            <br />
            <input
              type="text"
              id="guage"
              name="guage"
              value={guage}
              onChange={(e) => setguage(e.target.value)}
            />
          </form>
        </div>
        <div
          className="qoutation-heading"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: "10px",
            }}
          >
            <div className="heading-box">
              <h5>product</h5>
            </div>

            <div className="heading-box">
              <h5>Qantity</h5>
            </div>

            <div className="heading-box">
              <h5>Qauntity price </h5>
            </div>
            <div className="heading-box">
              <h5>Value</h5>
            </div>
          </div>
          <div>
            <form
              style={{
                border: "1px solid red",
                justifyContent: "space-between",
              }}
            >
              <input style={{ width: "60px" }} type="text" />
              <input style={{ width: "50px" }} type="text" />
              <input style={{ width: "40px" }} type="text" />
              <input style={{ width: "60px" }} type="text" />
              <input style={{ width: "30px" }} type="text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
