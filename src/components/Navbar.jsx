import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Navbar = () => {
  const [logo, setLogo] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDoc = doc(db, "users", "kaqaQaMZ8EnGaFj2GXVV"); // Replace "documentId" with the actual ID of the document you want to fetch
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          setLogo(userSnapshot.data().navLogo);
        } else {
          console.log("User not found!");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="text-white">
      <img src={logo} alt="logo" className="w-[50%] mx-auto  md:w-[20%]" />
    </div>
  );
};

export default Navbar;
