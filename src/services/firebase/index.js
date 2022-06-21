import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNCi4gvHt9RFGyh3gDqkTBAJ5ic3Nok3s",
  authDomain: "redstore-ecommerce-ae3a6.firebaseapp.com",
  projectId: "redstore-ecommerce-ae3a6",
  storageBucket: "redstore-ecommerce-ae3a6.appspot.com",
  messagingSenderId: "1098822035756",
  appId: "1:1098822035756:web:b09e7c11436fcbcb87e489"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const collectionsName = {
  products: 'products',
  orders: 'orders'
}