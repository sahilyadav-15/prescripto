import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";
import doctorModel from "../models/doctor.model.js";

export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
      available,
    } = req.body;
    const imageFile = req.file;

    // checking
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      fees === undefined ||
      fees === null ||
      fees === "" ||
      !address ||
      !imageFile
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // validating email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // validating password
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    const parsedFees = Number(String(fees).trim().replace(/,+$/, ""));
    if (Number.isNaN(parsedFees)) {
      return res.status(400).json({
        success: false,
        message: "Fees must be a valid number",
      });
    }

    let parsedAddress;
    try {
      parsedAddress =
        typeof address === "string" ? JSON.parse(address) : address;
    } catch {
      return res.status(400).json({
        success: false,
        message: "Address must be valid JSON",
      });
    }

    const parsedAvailable =
      available === undefined
        ? true
        : String(available).toLowerCase() === "true";

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees: parsedFees,
      available: parsedAvailable,
      image: imageUrl,
      address: parsedAddress,
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);

    await newDoctor.save();
    res.json({ success: true, message: "Doctor added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message || "Error" });
  }
};

// API for admin login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.status(200).json({ success: true, token });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message || "Error" });
  }
};
