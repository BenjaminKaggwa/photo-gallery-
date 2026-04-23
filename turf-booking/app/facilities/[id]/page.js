import Navbar from '@/components/Navbar'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'

async function getFacility(id) {
  const facility = await prisma.facility.findUnique({
    where: { id },
  })

  if (!facility) notFound()
  return facility
}
const sportEmoji = {
  FOOTBALL: '⚽',
  FUTSAL: '🏃',
  BASKETBALL: '🏀',
  TENNIS: '🎾',
}
export default async function FacilityPage({ params }) {
  const facility = await getFacility(params.id)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Back button */}
        <a href="/" className="text-green-600 hover:underline text-sm mb-6 inline-block">
          ← Back to facilities
        </a>

        {/* Facility Image */}
        <div className="w-full h-72 rounded-2xl overflow-hidden mb-6">
          <img
            src={facility.imageUrl || '/placeholder.jpg'}
            alt={facility.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Facility Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">{facility.name}</h1>
            <span className="text-4xl">{sportEmoji[facility.type]}</span>
          </div>

          <p className="text-gray-500 mt-2">📍 {facility.location}</p>
          <p className="text-green-700 font-bold text-2xl mt-3">
            KSH {facility.pricePerHour.toLocaleString()}/hr
          </p>

          <div className="mt-4 border-t pt-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">About</h2>
            <p className="text-gray-600">{facility.description}</p>
          </div>
        </div>

        {/* Booking section - coming soon */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <p className="text-gray-400 text-lg">🗓️ Time slot booking coming soon...</p>
        </div>

      </div>
    </main>
  )
}