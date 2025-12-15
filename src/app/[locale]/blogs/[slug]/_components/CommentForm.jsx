// "use client";

// import { useState } from "react";
// import { db } from "../../../../../lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// export default function CommentForm({ id, service }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     content: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await addDoc(collection(db, "comments"), {
//         id,
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         content: form.content,
//         status: "pending",
//         createdAt: serverTimestamp(),
//       });
//       setTimeout(() => {
//         setMessage("");
//       }, 5000);
//       setForm({ name: "", email: "", phone: "", content: "" });
//       setMessage("تم إرسال التعليق للمراجعة ");
//     } catch (error) {
//       console.error("حدث خطأ أثناء الإرسال:", error);
//       setMessage("فشل الإرسال. حاول مرة أخرى.");
//     }
//   };

//   return (
//     <section className="bg-[#f4f6fa] py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-xl font-bold mb-4">
//           {service.content.commentTitle}
//         </h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <textarea
//             placeholder={service.content.commentPlaceholder}
//             value={form.content}
//             name="content"
//             onChange={(e) => setForm({ ...form, content: e.target.value })}
//             required
//             className="w-full p-3 border border-gray-300 rounded"
//             rows={5}
//           />
//           <input
//             type="text"
//             placeholder={service.content.namePlaceholder}
//             value={form.name}
//             required
//             name="name"
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder={service.content.emailPlaceholder}
//             value={form.email}
//             required
//             onChange={(e) => setForm({ ...form, email: e.target?.value })}
//             className="w-full p-3 border border-gray-300 rounded"
//           />
//           <input
//             type="text"
//             placeholder={service.content.phonePlaceholder}
//             value={form.phone}
//             name="phone"
//             required
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded"
//           />
//           <button
//             type="submit"
//             className="bg-[#1f3ff5] z-20  text-white py-3 px-8 rounded hover:bg-[#172fc4] transition"
//           >
//             {service.content.submitButton}
//           </button>
//           {message && (
//             <p className="mt-4 text-green-600 font-medium">{message}</p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }
import React from 'react'

function CommentForm() {
  return (
    <div>CommentForm</div>
  )
}

export default CommentForm