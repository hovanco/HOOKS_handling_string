import React, { useState } from "react";

function WRITE_BY_FUNCTION_C2() {
  const [stringNum, setStringNum] = useState("");
  const [perfectNumber, setPerfectNumber] = useState("");
  const [primeNumber, setPrimeNumber] = useState("");

  var arrString = stringNum.split(",");
  console.log("arrString: ", arrString);

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePerfectNumber();
    handlePrimeNumber();
  };

  const handlePerfectNumber = () => {
    var arrPerfectNum = [];
    var total = 0;

    for (let j of arrString) {
      total = 0;
      for (let i = 1; i <= j / 2; i++) {
        if (j % i === 0) {
          total = total + i;
        }
      }
      console.log(total, j);
      if (total == j) {
        arrPerfectNum.push(j);
      }
    }
    setPerfectNumber(arrPerfectNum.join());
  };

  const handlePrimeNumber = () => {
    var arrPrimeNum = [];
    var isT = 0;
    for (let j of arrString) {
      isT = 0;
      for (let i = 2; i <= j / 2; i++) {
        if (j % i === 0) {
          isT++;
          break;
        }
      }
      if (isT === 0) {
        arrPrimeNum.push(j);
      }
    }
    setPrimeNumber(arrPrimeNum.join());
  };

  const handleReset = () => {
    setStringNum("");
    setPerfectNumber("");
    setPrimeNumber("");
  };

  return (
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      style={{ marginLeft: "25%", marginTop: "5%" }}
    >
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Number prime - Perfect number</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
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
                  placeholder="Enter list string-number"
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Perfect number</label>
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
                  value={primeNumber}
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

export default WRITE_BY_FUNCTION_C2;
