import NavBar from "components/NavBar";

import { useState } from "react";
import Discipleship1 from "components/Discipleship1";

const Home = () => {
  const [linguaScelta, setLinguaScelta] = useState<string>("italiano");

  return <div>
    <NavBar />
    <Discipleship1 />
  </div>
}

export default Home;