// "use server";

// import { authOptions } from "@/auth";
// import { adminDb } from "@/firebase-admin";
// import { getServerSession } from "next-auth";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-10-16",
// });

// export async function generatePortalLink() {
//   const session = await getServerSession(authOptions);
//   const host = headers().get("host");

//   console.log("session=", session);

// console.log("host=", host);
// if (!session?.user.id) return console.error("No user id found");

// console.log("have a user id");

// const {
//   user: { id },
// } = session;

// console.log("session=", session);

// // const returnUrl =
// //   process.env.NODE_ENV === "development"
// //     ? `http://${host}/register`
// //     : `https://${host}/register`;

// // const doc = await adminDb.collection("customers").doc(id).get();

// // console.log("doc=", doc.data);

// // if (!doc.data) {
// //   return console.error("No customer found with UserId:", id);
// // }

// // const stripeId = doc.data()!.stripeId;

// // const stripeSession = await stripe.billingPortal.sessions.create({
// //   customer: stripeId,
// //   return_url: returnUrl,
// // });

// // redirect(stripeSession.url);
// }
