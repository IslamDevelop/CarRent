import React from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import addProfile from "./addProfile";

const addPhoto = async (profile) => {
  const profilePhoto = profile.profilePhoto[0];

  console.log(profilePhoto.name);

  const stoirageRef = ref(storage, `profilePhoto/${profilePhoto.name}`);

  const upload = uploadBytesResumable(stoirageRef, profilePhoto);

  await upload;

  const urlPhoto = await getDownloadURL(upload.snapshot.ref);

  profile.profilePhoto = urlPhoto;

  addProfile(profile);
  console.log(urlPhoto);
};

export default addPhoto;
