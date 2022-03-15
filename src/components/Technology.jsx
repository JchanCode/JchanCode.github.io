import React from "react";


const Technology = ({stack}) => {
  console.log(stack);
  return (
    <>
      <ul className="social">
        {stack.map((val, i) => (
          <li key={i}>
              {/* add tech name into the src link  */}
            <img
                className="svg"
                src={`/assets/languages/${val}.svg`}
                alt={val}
            ></img>
          </li>
        ))}
      </ul>
      {/* END Technology */}
    </>
  );
};

export default Technology;
