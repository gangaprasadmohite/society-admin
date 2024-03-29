"use client";

import React from "react";
import EmptyComponent from "../emptyComponent";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Button, IconButton, Table } from "@mui/joy";

const TableTemplateComponent = ({
  columns = [],
  data = [],
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  hasCrudActions = false,
}) => {
  return (
    <div
      className="overflow-auto border-2 border-solid border-grey-500 my-4"
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
                <th style={{ width: "100px" }}>
                  <Button
                    size="sm"
                    variant="soft"
                    color="neutral"
                    onClick={onAdd}
                    sx={{ marginLeft: "15px" }}
                  >
                    <AddIcon />
                  </Button>
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
                    else return <td>{head.cell(row)}</td>;
                  })}
                  {hasCrudActions && (
                    <td className="text-center">
                      <IconButton onClick={onEdit}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={onDelete}>
                        <DeleteIcon color="error" />
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
};

export default TableTemplateComponent;
