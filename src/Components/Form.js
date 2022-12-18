import React, { useState } from "react";

const Form = ({ list, setList }) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [account, setAccount] = useState("");
  const [total, setTotal] = useState("");

  const options = ["Select Account", "Saving", "Current"];

  const handelChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handelchange2 = (event) => {
    setValue2(event.target.value);
  };
  const handelaccountChange = (e) => {
    setAccount(e.target.value);
  };
  const addUser = () => {
    const newUser = {
      account: account,
      credit: Number(value1).toLocaleString("en-IN"),
      debit: Number(value2).toLocaleString("en-IN"),
      // total: Number(total).toLocaleString("en-IN")
      total: (Number(value1) - Number(value2)).toLocaleString("en-IN")
    };
    const newList = [...list, newUser];
    setList(newList);
    setValue1("");
    setValue2("");
    setTotal("");
  };
  return (
    <div className="form">
      <select name="account" id="account" onChange={handelaccountChange}>
        {/* <option value="">Select Account</option>
          <option value="Saving"></option>
          <option value="Current"></option> */}
        {options.map((e, i) => (
          <option key={`${e}-${i}`} value={e}>
            {e}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="cridit"
        placeholder="enter Credit Amount"
        value={value1}
        onChange={handelChange1}
      />
      <input
        type="number"
        name="debit"
        placeholder="enter Debit Amount"
        value={value2}
        onChange={handelchange2}
      />
      <button
        disabled={
          account === "" || (value1 === "" && value2 === "" && total === "")
        }
        onClick={addUser}
      >
        Add user{" "}
      </button>
    </div>
  );
};

export default Form;
