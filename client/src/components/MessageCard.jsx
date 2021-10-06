import React from "react";

export default function MessageCard({ data }) {
  console.log(`data`, data);
  return (
    <div
      className={`d-flex mb-2 w-100 ${
        data.sender ? `justify-content-end` : `justify-content-start`
      }`}
    >
      <div className="chat-message-wrapper shadow p-2">
        <h6>Message</h6>
      </div>
    </div>
  );
}
