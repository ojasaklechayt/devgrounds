// import LocalSearch from "@/components/shared/search/LocalSearch";
// import { UserFilters } from "@/constants/filters";
// import Filter from "@/components/shared/Filter";
// import { getAllUsers } from "@/lib/actions/user.actions";
// import Link from "next/link";
// import UserCard from "@/components/cards/UserCard";
// import { SearchParamsProps } from "@/types";
// import Pagination from "@/components/shared/Pagination";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Community | DevOverFlow",
// };

// const Page = async ({ searchParams }: SearchParamsProps) => {
//   const results = await getAllUsers({
//     searchQuery: searchParams.q,
//     filter: searchParams.filter,
//     page: searchParams.page ? +searchParams.page : 1,
//   });

//   return (
//     <>
//       <h1 className="h1-bold text-dark100_light900">All Users</h1>
//       <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
//         <LocalSearch
//           route="/community"
//           iconPosition="left"
//           imgSrc="/assets/icons/search.svg"
//           placeholder="Search for amazing minds..."
//           otherClasses="flex-1"
//         />
//         <Filter
//           filters={UserFilters}
//           otherClasses="min-h-[56px] sm:min-w-[170px]"
//         />
//       </div>

//       <section className="mt-12 flex flex-wrap gap-4">
//         {results.users.length > 0 ? (
//           results.users.map((user) => <UserCard key={user.name} user={user} />)
//         ) : (
//           <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
//             <p>No Users yet</p>
//             <Link href="/sign-up" className="mt-1 font-bold text-accent-blue">
//               Join to be the first!
//             </Link>
//           </div>
//         )}
//       </section>
//       <div className="mt-10">
//         <Pagination
//           pageNumber={searchParams?.page ? +searchParams.page : 1}
//           isNext={results.isNext}
//         />
//       </div>
//     </>
//   );
// };

// export default Page;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dFtgzDxJxnc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Explore Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Course Image"
            width={400}
            height={225}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Introduction to React</h2>
            <a href="https://www.google.com" className="text-gray-500 mb-4">
              Learrrn the fundamentals of React, a popular JavaScript library for building user interfaces.
            </a>
            <Button size="sm" className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Course Image"
            width={400}
            height={225}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Introduction to React</h2>
            <a href="https://www.google.com" className="text-gray-500 mb-4">
              Learrrn the fundamentals of React, a popular JavaScript library for building user interfaces.
            </a>
            <Button size="sm" className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Course Image"
            width={400}
            height={225}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Introduction to React</h2>
            <a href="https://www.google.com" className="text-gray-500 mb-4">
              Learrrn the fundamentals of React, a popular JavaScript library for building user interfaces.
            </a>
            <Button size="sm" className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Course Image"
            width={400}
            height={225}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Introduction to React</h2>
            <a href="https://www.google.com" className="text-gray-500 mb-4">
              Learrrn the fundamentals of React, a popular JavaScript library for building user interfaces.
            </a>
            <Button size="sm" className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Course Image"
            width={400}
            height={225}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Introduction to React</h2>
            <a href="https://www.google.com" className="text-gray-500 mb-4">
              Learrrn the fundamentals of React, a popular JavaScript library for building user interfaces.
            </a>
            <Button size="sm" className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
