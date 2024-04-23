import React from "react";

const MeetingRoomOrderKeyValuePairs = () => {
  const pairs = [
    { "Office Name ": "GARDEN B1" },
    { "Office Quota ": "100 Person" },
    { "Package ": "Package Package" },
    { "Period ": "DAILY" },
  ];
  return (
    <div>
      {pairs.map((pair, index) => (
        <div key={index}>
          {Object.entries(pair).map(([key, value]) => (
            <div key={key}>
              <span>
                <strong>{key}</strong>:
              </span>
              <span> {value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MeetingRoomOrderKeyValuePairs;
