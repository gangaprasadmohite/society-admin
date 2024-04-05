"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import EmptyComponent from "../emptyComponent";

import { CircularProgress, IconButton, Table } from "@mui/joy";

const TableTemplateComponent = ({
  columns = [],
  data = [],
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  hasCrudActions = false,
}) => {
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);

  const addAction = () => {
    return (
      <IconButton sx={{ margin: "2px" }} size="sm" onClick={onAdd}>
        <AddIcon />
      </IconButton>
    );
  };

  const editAction = () => {
    return (
      <IconButton sx={{ margin: "2px" }} size="sm">
        <EditIcon />
      </IconButton>
    );
  };

  const deleteAction = () => {
    return (
      <IconButton color="danger" size="sm">
        <DeleteIcon />
      </IconButton>
    );
  };

  useEffect(() => {
    //set headers
    let tempHeaders = [];

    if (columns.length) {
      tempHeaders = columns.map((column) => {
        return { header: column.header, headerStyle: column.headerStyle };
      });

      if (hasCrudActions) {
        tempHeaders.push({ header: addAction(), headerStyle: null });
      }
      setHeaders(tempHeaders);
    }
  }, [columns]);

  if (headers.length) {
    return (
      <div className="overflow-auto border border-solid border-grey-900 rounded-2xl my-4">
        <div>
          <Table size="md">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th style={header.headerStyle}>
                    <div
                      className={
                        hasCrudActions && index == headers.length - 1
                          ? `flex justify-end`
                          : ``
                      }
                    >
                      {header.header}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((row, index) => (
                  <tr>
                    {columns.map((head) => {
                      if (!head.cell) return <td>{row[head.key]}</td>;
                      else return <td>{head.cell(row, index)}</td>;
                    })}
                    {hasCrudActions && (
                      <td className="flex flex-1">
                        <div className="flex justify-end w-full">
                          <>{editAction()}</>
                          <>{deleteAction()}</>
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <div className="w-full">
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
