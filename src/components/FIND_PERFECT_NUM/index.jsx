import React, { useState } from "react";

function FIND_PERFECT_NUM() {
  const [stringNum, setStringNum] = useState("");

  const [perfectNumber, setPerfectNumber] = useState("");

  const [simpleNumber, setSimpleNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let arrString = stringNum.split(",");

    var arrPerfectNum = [];
    var arrSimpleNum = [];

    var total = 0;
    var i = 0;

    for (let j of arrString) {
      total = 0;
      for (i = 1; i <= j / 2; i++) {
        if (j % i === 0) {
          total = total + i;
        }
      }
      console.log(total, j);
      if (total == j) {
        arrPerfectNum.push(j);
      }
      console.log("total of i: ", total);
    }
    console.log("total of j: ", total);

    setPerfectNumber(arrPerfectNum.join());
    setSimpleNumber(arrSimpleNum.join());
  };

  const handleReset = () => {
    setStringNum("");
    setPerfectNumber("");
    setSimpleNumber("");
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
                <label>Perfect Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={perfectNumber}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Simple Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={simpleNumber}
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

export default FIND_PERFECT_NUM;
