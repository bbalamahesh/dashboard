import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";

export default function ExpandedRows(props) {
  let applicants = props.applicants;

  return (
    <>
      {/* tableRow for Header */}
      <TableRow>
        <TableCell colSpan={2} align="center">
          Name
        </TableCell>
        <TableCell align="center">Status</TableCell>
        <TableCell align="center">License ID</TableCell>
        <TableCell align="center">Experience</TableCell>
        <TableCell align="center">Certification</TableCell>
        <TableCell colSpan={2} align="center">
          Education
        </TableCell>
      </TableRow>

      {applicants.map((applicantsRow) => (
        <TableRow key={applicantsRow.id}>
          <TableCell component="th" scope="row" colSpan={2} align="center">
            {applicantsRow.name}
          </TableCell>
          <TableCell align="center">{applicantsRow.status}</TableCell>
          <TableCell align="center">{applicantsRow.license_id}</TableCell>
          <TableCell align="center">{applicantsRow.experience}</TableCell>
          <TableCell align="center">{applicantsRow.certification}</TableCell>
          <TableCell align="center" colSpan={2}>
            {applicantsRow.education}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
