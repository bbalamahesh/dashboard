import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";

export default function ExpandedRows(props) {
  let applicants = props.applicants;

  return (
    <>
      {/* tableRow for Header */}
      <TableRow>
        <TableCell colSpan={2} align="center">
        02:24:55	179.86
        </TableCell>
        <TableCell align="center">C:7.71	P:1.14	T:8.85 E:0.85	E:1.14	T:1.99</TableCell>
        <TableCell align="center">C:6.93	P:1.35	T:8.28
E:1.07	E:1.35	T:2.42</TableCell>
        <TableCell align="center">C:6.15	P:1.58	T:7.73
E:1.29	E:1.58	T:2.87</TableCell>
        <TableCell align="center">C:5.41	P:1.85	T:7.26
E:1.55	E:1.85	T:3.4</TableCell>
        <TableCell colSpan={2} align="center">
        C:4.72	P:2.17	T:6.89
E:1.86	E:2.17	T:4.03
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
