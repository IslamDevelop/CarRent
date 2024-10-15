import React from "react";
import { get, ref, set } from "firebase/database";
import { auth, db } from "../../firebase";

export default async function addProfile(profile) {
  profile.userUID = auth.currentUser.uid;


  const profileRef = ref(db, `/UsersProfile/${profile.userUID}`);

  try {
    const snapshot = await get(profileRef);

    await set(profileRef, profile);

    console.log("asdasas");
  } catch (error) {}
}
