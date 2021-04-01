import React from 'react';

export default function Cake(): JSX.Element {
  return (
    <div className="cake">
      <div className="velas">
        <div className="fuego" />
        <div className="fuego" />
        <div className="fuego" />
        <div className="fuego" />
        <div className="fuego" />
      </div>
      <div className="cobertura" />
      <div className="bizcocho" />
      <h1>生日快乐!</h1>
    </div>
  );
}
