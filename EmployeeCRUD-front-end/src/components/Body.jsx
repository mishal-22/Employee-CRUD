import axios from "axios";
import React, { useEffect, useState } from "react";

function Body() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employee, setEmployee] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !address || !department || !salary) {
      alert("Please enter all the details");
      return;
    } else {
      const response = await axios.post("http://localhost:8080/employee/add", {
        name,
        address,
        department,
        salary,
      });
      //   alert("New Employee added");
      fetchEmployee();
      setName("");
      setAddress("");
      setDepartment("");
      setSalary("");
    }
  };

  function fetchEmployee() {
    fetch("http://localhost:8080/employee/get")
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data);
      });
  }
  function onDelete(id) {
    fetch(`http://localhost:8080/employee/delete/${id}`, {
      method: "DELETE",
      //   headers: { "Content-Type": "application/json" },
    }).then(() => {
      fetchEmployee();
    });
  }
  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div>
      <div className="emp-form">
        <h1>Add Employee </h1>
        <form onSubmit={handleSubmit}>
          <label>Name :</label>{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <br />
          <label>Address :</label>{" "}
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />{" "}
          <br />
          <br />
          <label>Department :</label>{" "}
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />{" "}
          <br />
          <br />
          <label>Salary :</label>{" "}
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />{" "}
          <br />
          <br />
          <input type="submit" value="ADD EMPLOYEE" />
        </form>
      </div>
      <br />
      <br />
        <h1 className="emp-head">Employee Details</h1>
      <div className="show-emp">
        {employee.map((emp) => (
          <div className="emp-block" key={emp.emp_id}>
            {console.log(emp.name)}
            <p>Name : {emp.name} </p>
            <br />
            <p>Adderess : {emp.address} </p>
            <br />
            <p>Department : {emp.department} </p>
            <br />
            <p>Salary : {emp.salary} </p>
            <br />
            <button onClick={() => onDelete(emp.emp_id)}>
              <i className="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
