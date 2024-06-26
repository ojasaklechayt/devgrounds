/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dFtgzDxJxnc
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Cabin } from 'next/font/google'

cabin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"

export function coursecards() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Explore Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Course Image"
            className="w-full h-48 object-cover"
            height={225}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Introduction to React</h2>
            <p className="text-gray-500 mb-4">
              Learn the fundamentals of React, a popular JavaScript library for building user interfaces.
            </p>
            <Button className="w-full" size="sm">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Course Image"
            className="w-full h-48 object-cover"
            height={225}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Advanced CSS Techniques</h2>
            <p className="text-gray-500 mb-4">
              Dive deep into CSS and learn advanced techniques for creating stunning web designs.
            </p>
            <Button className="w-full" size="sm">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Course Image"
            className="w-full h-48 object-cover"
            height={225}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Mastering JavaScript</h2>
            <p className="text-gray-500 mb-4">Become a JavaScript expert and learn advanced concepts and techniques.</p>
            <Button className="w-full" size="sm">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            alt="Course Image"
            className="w-full h-48 object-cover"
            height={225}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Responsive Web Design</h2>
            <p className="text-gray-500 mb-4">
              Learn how to create websites that adapt seamlessly to different devices and screen sizes.
            </p>
            <Button className="w-full" size="sm">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
