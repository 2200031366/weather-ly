import '../config'

import React, { useEffect } from 'react';

function Forecast() {
  useEffect(() => {
    window.open("https://manvithasankar.github.io/weatherly/");
  }, []);

  return (
    <div>
      <h1>Redirecting to Weather App...</h1>
    </div>
  );
}

export default Forecast;