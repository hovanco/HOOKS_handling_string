import React, { useState } from "react";

function USE_OPERATOR_MAP() {
  const [stringNum, setStringNum] = useState("");

  const [oldNumber, setOldNumber] = useState("");
  const [eventNumber, setEventNumber] = useState("");

  const handleSubmit = (event) => {
    console.log("stringNumber : ", stringNum);
    event.preventDefault();

    let arrString = stringNum.split(","); // arr string input
    console.log("arrString", arrString);

    let arrOldNum = []; // arr old number null
    let arrEventNum = []; // arr event number null

    arrString.map((i) =>
      i % 2 == 0 ? arrOldNum.push(i) : arrEventNum.push(i)
    );

    setOldNumber(arrOldNum.join()); // join element to arr old number null
    setEventNumber(arrEventNum.join()); // join element to arr event number null
  };

  const handleReset = () => {
    setStringNum("");
    setOldNumber("");
    setEventNumber("");
  };

  return (
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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

export default USE_OPERATOR_MAP;
