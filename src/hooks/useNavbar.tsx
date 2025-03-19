import { useState } from "react";

const useNavbar = () => {
  const [navStatus, setNavStatus] = useState(false);

  const usingNavbar = (status: boolean) => {
    if (status == true) {
      setNavStatus(true);
    } else {
      setNavStatus(false);
    }
  };

  return {
    usingNavbar,
    navStatus,
  };
};

export default useNavbar;
