
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CarFront, CheckCircle, XCircle, LayoutDashboard, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcALlKLT73mKyOta2h0lndA1MS_7HLUiw",
  authDomain: "al-wahadinah-ride.firebaseapp.com",
  projectId: "al-wahadinah-ride",
  storageBucket: "al-wahadinah-ride.appspot.com",
  messagingSenderId: "702739949316",
  appId: "1:702739949316:android:af6abea0f075a07cc89251"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function HomePage() { /* ... الكود كامل موجود بالفعل أعلاه ... */ }
