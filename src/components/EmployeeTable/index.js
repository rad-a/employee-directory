import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
import moment from "moment";

const EmployeeTable = () => {
  const [rows, setRows] = useState([]);
  const [columns] = useState([
    {
      label: "Photo",
      field: "photo",
      sort: "disabled",
      width: 150
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150
    },
    {
      label: "Phone",
      field: "phone",
      sort: "disabled",
      width: 150
    },
    {
      label: "Email",
      field: "email",
      sort: "asc",
      width: 150
    },
    {
      label: "Location",
      field: "location",
      sort: "asc",
      width: 150
    },
    {
      label: "DOB",
      field: "dob",
      sort: "asc",
      width: 150
    },
  ]);

  useEffect(() => {
    async function loadEmployees() {
      const employeeList = await axios.get(
        "https://randomuser.me/api/?results=100&nat=us"
      );

      let employees = employeeList.data.results.map((employee, i) => {
        return {
          name: `${employee.name.first} ${employee.name.last}`,
          photo: <img src={employee.picture.medium} alt="" />,
          phone: employee.phone,
          email: employee.email,
          location: `${employee.location.city}, ${employee.location.state}`,
          dob: moment(employee.dob.date).format("MM/DD/YYYY")
        }
      });
      
      setRows(employees);
    }

    loadEmployees();
  }, []);

  return (
    <MDBDataTable
      hover
      responsive
      small
      entriesOptions={[10, 25, 50, 100]}
      sorting="true"
      entries={10}
      pagesAmount={4}
      order={["name", "asc"]}
      data={{ rows, columns }}
    />
  );
};

export default EmployeeTable;
