import React from 'react';

const Info = () => {
  return (
    <div>
      {/* Introductory Section */}
      <section>
        <h1>Welcome to Waste Segregation Guide</h1>
        <p>
          Proper waste segregation is crucial for environmental sustainability. Learn how to separate different types of waste to contribute to a cleaner and greener planet.
        </p>
      </section>

      {/* Informational Section */}
      <section>
        <h2>Types of Waste</h2>

        {/* Recyclables */}
        <div>
          <h3>Recyclables</h3>
          <p>Examples: Paper, cardboard, glass, plastic bottles, metal cans</p>
          <p>
            Make sure to clean and dry recyclables before placing them in the recycling bin.
          </p>
        </div>

        {/* Organics */}
        <div>
          <h3>Organics</h3>
          <p>Examples: Food scraps, yard waste</p>
          <p>
            Use a compost bin for organic waste. This can be turned into nutrient-rich compost for gardens.
          </p>
        </div>

        {/* Hazardous Waste */}
        <div>
          <h3>Hazardous Waste</h3>
          <p>Examples: Batteries, paint, electronics, chemicals</p>
          <p>
            Dispose of hazardous waste at designated collection centers. Do not mix with regular trash.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Info;



