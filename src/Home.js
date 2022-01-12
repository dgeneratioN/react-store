import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2 style={{ textAlign: "left" }}>Welcome to our N64 Store</h2>
      <h4 style={{ textAlign: "left" }}>This train is inbound</h4>
      <section style={{ textAlign: "justify" }}>
        <p>
          Good morning, and welcome to the Black Mesa transit system. This
          automated train is provided for the security and convenience of the
          Black Mesa Research Facility personnel. The time is 8:47 A.M. Current
          topside temperature is 93 degrees with an estimated high of 105. The
          Black Mesa compound is maintained at a pleasant 68 degrees at all
          times. This train is inbound from level 3 dormitories to sector C test
          labs and control facilities. If your intended destination is a high
          security area beyond sector C, you will need to return to the central
          transit hub in area 9 and board a high security train. If you have not
          yet submitted your identity to the retinal clearance system, you must
          report to Black Mesa personnel for processing before you will be
          permitted into the high security branch of the transit system.
        </p>

        <p>
          Due to the high toxicity of material routinely handled in the Black
          Mesa compound, no smoking, eating, or drinking are permitted within
          the Black Mesa transit system. Please keep your limbs inside the train
          at all times. Do not attempt to open the doors until the train has
          come to a complete halt at the station platform. In the event of an
          emergency, passengers are to remain seated and await further
          instruction. If it is necessary to exit the train, disabled personnel
          should be evacuated first. Please, stay away from electrified rails
          and proceed to an emergency station until assistance arrives.
        </p>
      </section>
    </>
  );
};

export default Home;
