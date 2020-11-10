import React, { useState } from "react";

function USE_MAX() {
  const [stringNum, setStringNum] = useState("");

  const [oldNumber, setOldNumber] = useState("");
  const [eventNumber, setEventNumber] = useState("");

  const handleSubmit = (event) => {
    console.log("stringNumber : ", stringNum); // arr string number input
    event.preventDefault();

    let arrString = stringNum.split(","); // arr string number input to arr string
    console.log("arrString", arrString);

    let arrOldNum = []; // arr old number null
    let arrEventNum = []; // arr event number null

    // get old number and event number from arrString to arrOldNum and arrEventNum
    for (let i of arrString) {
      if (i % 2 == 0) {
        arrOldNum.push(i);
        console.log("arrOldNum", arrOldNum);
        // setOldNumber(arrOldNum.join());  // set state in for, render again
      } else {
        arrEventNum.push(i);
        console.log("arrEventNum", arrEventNum);
        // setEventNumber(arrEventNum.join()); // set state in for, render again
      }
    }
    setOldNumber(arrOldNum.join()); // join(): convert string to number, join element to arr old number null
    setEventNumber(arrEventNum.join()); //join(): convert string to number, join element to arr event number null
  };

  const handleReset = () => {
    setStringNum("");
    setOldNumber("");
    setEventNumber("");
  };

  return (
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      style={{ marginLeft: "25%", marginTop: "5%" }}
    >
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">
            Get old number and event number from array string
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <legend>Cut string</legend>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Array input</label>
                <input
                  type="text"
                  className="form-control"
                  id
                  name="num1"
                  value={stringNum}
                  onChange={(e) => setStringNum(e.target.value)} // convert string-number to number
                  placeholder="Enter list number"
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Old integers</label>
                <input
                  type="text"
                  className="form-control"
                  id
                  value={oldNumber}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Even integers</label>
                <input
                  type="text"
                  className="form-control"
                  id
                  value={eventNumber}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default USE_MAX;
