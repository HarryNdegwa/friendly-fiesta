import React from "react";

export default function ChatProfileCard({ data }) {
  return (
    <div className="py-3 cursor-pointer card mt-2">
      <h3>{data.username}</h3>
    </div>
  );
}
