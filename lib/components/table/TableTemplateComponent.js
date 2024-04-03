"use client";

import React, { forwardRef } from "react";
import EmptyComponent from "../emptyComponent";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Button, CircularProgress, IconButton, Table } from "@mui/joy";
import StyledButton from "../styledButton";

const TableTemplateComponent = ({
  columns = [],
  data = [],
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  hasCrudActions = false,
}) => {
  if (columns.length && data.length) {
    return (
      <div
        className="overflow-auto border border-solid border-grey-900 my-4"
        style={{ borderRadius: "15px" }}
      >
        <div>
          <Table size="md">
            <thead>
              <tr>
                {columns?.map((head) => (
                  <th style={head.headerStyle}>{head.header}</th>
                ))}

                {hasCrudActions && (
                  <th style={{ width: "100px", alignContent: "end" }}>
                    <IconButton
                      sx={{ margin: "2px" }}
                      size="sm"
                      onClick={onAdd}
                    >
                      <AddIcon />
                    </IconButton>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((row) => (
                  <tr>
                    {columns.map((head, index) => {
                      if (!head.cell) return <td>{row[head.key]}</td>;
                      else return <td>{head.cell(row, index)}</td>;
                    })}
                    {hasCrudActions && (
                      <td className="flex flex-1">
                        <IconButton sx={{ margin: "2px" }} size="sm">
                          <EditIcon />
                        </IconButton>
                        <IconButton color="danger" size="sm">
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <div style={{ width: "100% !important" }}>
                  <EmptyComponent />
                </div>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  } else {
    <CircularProgress />;
  }
};

export default TableTemplateComponent;
