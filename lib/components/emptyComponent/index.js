import React from "react";

export default function EmptyComponent() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <span style={{ color: "#ccc" }}>No Data</span>
    </div>
  );
}
