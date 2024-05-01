import React from "react";

const MeetingRoomOrderKeyValuePairs = () => {
  const pairs = [
    { "Name Surname": "John Doe" },
    { "First Meal": "Lorem" },
    { "Second Meal": "Ipsum" },
    { "Third Meal": "Dolor" },
  ];
  return (
    <div className="w-100">
      {pairs.map((pair, index) => (
        <div key={index}>
          {Object.entries(pair).map(([key, value]) => (
            <div className="d-flex justify-content-between mt-1 mb-2" key={key}>
              <span>
                <strong style={{ whiteSpace: "nowrap" }}>{key + ":"}</strong>
              </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MeetingRoomOrderKeyValuePairs;
