import React, { useState } from "react";

function Circle() {
  const [circle, setCircle] = useState([]);

  const [color, setColor] = useState([]);

  console.log(color);

  const addCircle = () => [
    setCircle((prev) => [...prev, { id: circle?.length }])
  ];

  const hanldeColorChange = (index) => {
    if (color.includes(index)) {
      setColor(color.filter((id) => id !== index));
    } else {
      setColor([...color, index]);
    }
  };

  return (
    <div>
      <button onClick={() => addCircle()}>Add Circle</button>
      <h1>
        {color?.length > 0 ? `selected circle count ${color?.length} ` : " "}
      </h1>
      <div>
        {circle &&
          circle?.map((each) => (
            <div
              onClick={() => hanldeColorChange(each?.id)}
              className={color?.includes(each?.id) ? "box" : "circle"}
              key={each?.id}></div>
          ))}
      </div>
    </div>
  );
}

export default Circle;
