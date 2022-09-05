import React, { useEffect, useState } from "react";

export const App = (props) => {
  const [count, setCount] = useState(0);

  console.log(props);
  return (
    <>
      <h1>Hello World!</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <span> {count} </span>
      <div>Data from server - {JSON.stringify(props)}</div>
      <PageName pageName={props.data.pageName} />
    </>
  );
};

const PageName = (props) => {
  return <p>{props.pageName}</p>
}
