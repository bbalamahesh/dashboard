
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// other mui-tables library
import MUIDataTable, { ExpandButton } from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import data from "./testData";

import ExpandedRows from "./expandedRows";

export default function TableData() {
  const [status, setStatus] = useState("all");

  const handleStatus = (event, newValue) => {
    setStatus(newValue);
  };
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return (
    <div className="container">
      <h1>{currDate} {currTime}</h1>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={status}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleStatus} aria-label="lab API tabs example">
              <Tab label="Tab One" value="all" />
              <Tab label="Tab Two" value="open" />
              <Tab label="tab Three" value="applicantApplied" />
            </TabList>
          </Box>
          <TabPanel value="all">
            <ThemeProvider theme={theme}>
              <MUIDataTable
                title={"Dashboard Data"}
                data={data}
                columns={columns}
                options={options}
              />
            </ThemeProvider>
          </TabPanel>
          <TabPanel value="open">Tab Two</TabPanel>
          <TabPanel value="close">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

const columns = [
  {
    name: "2023-09-22 Friday",
    options: {
      filter: true
    }
  },
  {
    name: "2023-09-22 Saturday",
    options: {
      filter: true
    }
  },
  {
    name: "2023-09-22 Sunday",
    options: {
      filter: false
    }
  },
  {
    name: "2023-09-22 Monday",
    options: {
      filter: true
    }
  },
  {
    name: "2023-09-22 Tuesday",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "2023-09-22 Wednesday",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "2023-09-2 Thursday",
    options: {
      filter: true,
      sort: true
    }
  }
];
const options = {
  filter: true,
  filterType: "dropdown",
  responsive: "standard",
  expandableRows: true,
  expandableRowsHeader: false,
  expandableRowsOnClick: true,
  renderExpandableRow: (rowData, rowMeta) => {
    const colSpan = rowData.length + 1;
    let index = rowMeta.dataIndex;
    return <ExpandedRows index={index} applicants={data[index].applicants} />;
  },
  selectableRows: false,
};

const theme = createTheme({
    overrides: {
      MUIDataTableSelectCell: {
        expandDisabled: {
          // Soft hide the button.
          visibility: "hidden"
        }
      }
    }
  });

const components = {
  ExpandButton: function(props) {
    if (props.dataIndex === 3 || props.dataIndex === 4) return <div style={{width:'24px'}} />;
    return <ExpandButton {...props} />;
  }
};

console.log(`applicants`, data);
