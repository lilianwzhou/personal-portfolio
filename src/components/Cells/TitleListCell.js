import React from "react";

export default function TitleListCell({ title, listElements, className }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>
        {listElements?.map((elem) => {
          return (
            <>
              {"- " + elem}
              <br></br>
            </>
          );
        })}
      </p>
    </div>
  );
}
