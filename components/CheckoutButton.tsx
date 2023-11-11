"use client";

import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    setLoading(true);

    // Push a document into firestore db
    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1OB5QrFb8iFftUZU95uHKMyx",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    // ... stripe extension on firebase will create a checkout session
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert(`An error occurred: ${error.message}`);
        setLoading(false);
      }
      if (url) {
        window.location.assign(url);
        setLoading(false);
      }
    });

    // redirect user to checkout page
  };

  return (
    <div>
      {/* If user is subscribed show me the user is subscribed */}
      <button
        onClick={() => createCheckoutSession()}
        className="w-full max-w-md mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus:visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
      >
        {loading ? "loading..." : "Sign Up"}
      </button>
    </div>
  );
}

export default CheckoutButton;