import React, { useState } from "react";

function PerfectNumber() {
  const [stringNum, setStringNum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    var total = 0;
    var i = 0;

    for (i = 1; i <= stringNum / 2; i++) {
      if (stringNum % i === 0) {
        total = total + i;
      }
    }
    if (total == stringNum) {
      console.log("It is a perfect number.");
    } else {
      console.log("It is not a perfect number");
    }
  };

  const handleReset = () => {
    setStringNum("");
  };

  return (
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      style={{ marginLeft: "25%", marginTop: "5%" }}
    >
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Perfect Number</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <legend>Perfect Number</legend>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Number Input</label>
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
                <label>Result</label>
                <input
                  type="text"
                  className="form-control"
                  id
                  // value={eventNumber}
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

export default PerfectNumber;
