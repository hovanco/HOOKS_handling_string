import React, { useState } from "react";

function NUMBER_PRIME() {
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
    }

    // ====================================================

    let isT = 0;
    for (let j of arrString) {
      isT = 0;
      for (var i = 2; i <= j / 2; i++) {
        if (j % i === 0) {
          isT++;
          break;
        }
      }
      // !isT && arrSimpleNum.push(j); <=> code if below
      if (isT === 0) {
        arrSimpleNum.push(j);
      }
    }
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
          <h3 className="panel-title">Number prime</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <legend>Number prime</legend>

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
                <label>Number prime</label>
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

export default NUMBER_PRIME;
