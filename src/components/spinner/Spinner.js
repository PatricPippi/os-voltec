/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// eslint-disable-next-line linebreak-style
import React, { useEffect, useState } from 'react';
import RiseLoader from 'react-spinners/RiseLoader';

export default function Spinner({ delay }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { setLoad(true); }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    load
    && (
    <div className="sweet-loading">
      <RiseLoader
        size={20}
        color="#123abc"
        loading={load}
      />
    </div>
    )
  );
}
