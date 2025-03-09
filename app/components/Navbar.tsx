// import { auth, signIn, signOut } from '@/auth';
// import Link from 'next/link';
// import React from 'react';
// const Navbar = async () => {
//   const session = await auth();

//   return (
//     <header className="px-5 py-3 bg-white shadow-md font-work-sans rounded-md">
//       <nav className="flex justify-between items-center">
//         {/* Title with Home Link */}
//         <Link href="/" className="text-black font-bold text-lg">
//           IdeaNation
//         </Link>

//         {/* Navigation Links & Auth Buttons */}
//         <div className="flex items-center gap-5 text-black">
//           {session?.user ? (
//             <>
//               {/* If user is logged in */}
//               <Link href="/startup/create" className="hover:text-blue-500">
//                 Create
//               </Link>

//               <form
//                 action={async () => {
//                   'use server';
//                   await signOut({ redirectTo: '/' });
//                 }}
//               >
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
//                 >
//                   Logout
//                 </button>
//               </form>

//               <Link
//                 href={`/startup/${session.user.id}`}
//                 className="font-semibold hover:text-blue-500"
//               >
//                 {session.user.name}
//               </Link>
//             </>
//           ) : (
//             <>
//               {/* Login Button with Redirect Fix */}
//               <form
//                 action={async () => {
//                   'use server';
//                   await signIn('github', {
//                     callbackUrl: process.env.NEXTAUTH_URL,
//                   });
//                 }}
//               >
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 cursor-pointer"
//                 >
//                   MKC
//                 </button>
//               </form>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
'use client'; // Add this to make it a Client Component

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="px-5 py-3 bg-white shadow-md font-work-sans rounded-md">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-black font-bold text-lg">
          IdeaNation
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session ? (
            <>
              <Link href="/startup/create" className="hover:text-blue-500">
                Create
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
              <Link
                href={`/startup/${session.user?.id}`}
                className="font-semibold hover:text-blue-500"
              >
                {session.user?.name}
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => signIn('github', { callbackUrl: '/' })}
                className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
