import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="mx-auto max-w-xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mb-8 text-lg text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/" className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
          Return Home
        </Link>
      </div>
    </div>
  )
}

