"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import EmptyComponent from "../emptyComponent";
import { v4 as uuid } from "uuid";
import { CircularProgress, IconButton, Table } from "@mui/joy";

const TableTemplateComponent = ({
  columns = [],
  data = [],
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  hasCrudActions = false,
  idProperty = "id",
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

  const editAction = (index) => {
    return (
      <IconButton sx={{ margin: "2px" }} size="sm" onClick={onEdit(index)}>
        <EditIcon />
      </IconButton>
    );
  };

  const deleteAction = (index) => {
    return (
      <IconButton color="danger" size="sm" onClick={onDelete(index)}>
        <DeleteIcon />
      </IconButton>
    );
  };

  useEffect(() => {
    //set headers
    let tempHeaders = [];

    if (columns.length) {
      tempHeaders = columns.map((column) => {
        return {
          headerId: uuid(),
          header: column.header,
          headerStyle: column.headerStyle,
          key: column.key,
          cell: column.cell,
        };
      });

      if (hasCrudActions) {
        tempHeaders.push({
          headerId: uuid(),
          header: addAction(),
          headerStyle: null,
          key: "actions",
        });
      }
      setHeaders(tempHeaders);
    }

    //add edit and delete button in roes in hascrudactions
    if (data.length) {
      let nextState = [...data];
      if (hasCrudActions) {
        nextState.forEach((row, index) => {
          row["actions"] = (
            <div className="flex justify-end w-full">
              <>{editAction(index)}</>
              <>{deleteAction(index)}</>
            </div>
          );
        });
      }

      setRows(nextState);
    }
  }, [columns, data]);

  if (headers.length) {
    return (
      <div className="overflow-auto border border-solid border-grey-900 rounded-2xl my-4">
        <div>
          <Table size="md">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th style={header.headerStyle} key={header.headerId}>
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
              {rows.length ? (
                rows.map((row, index) => (
                  <tr key={row[idProperty]}>
                    {headers.map((head) => (
                      <td key={uuid()}>
                        {!head.cell ? row[head.key] : head.cell(row, index)}
                      </td>
                    ))}
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
