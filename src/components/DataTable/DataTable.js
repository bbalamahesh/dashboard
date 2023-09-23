import React from "react";
import MUIDataTable from "mui-datatables";

function DataTable() {
    const columns = [
      {
        name: "Name",
        options: {
          filter: true
        }
      },
      {
        name: "City"
      },
      {
        name: "Email Address"
      },
      {
        name: "Joining Date"
      },
      {
        name: "Role"
      }
    ];
    const data = [
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
      ["Prerna Jha", "Mumbai", "prernajha@gmail.com", "12/02/2018", "UI Designer"],
    ];
    const options = {
      filter: true,
      filterType: "dropdown",
      download: false,
      print: false,
    //   selectableRows: false,
    };
    return (
      <div className="App">
        <MUIDataTable
          title={"Dashboard table...."}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
  export default DataTable;