import React from "react";

export default function MessageCard({ data, me }) {
  return (
    <div
      className={`d-flex mb-2 w-100 ${
        data && data.senderId === me.id
          ? `justify-content-end`
          : `justify-content-start`
      }`}
    >
      <div className="chat-message-wrapper shadow p-2">
        <h6>{data && data.message}</h6>
      </div>
    </div>
  );
}
