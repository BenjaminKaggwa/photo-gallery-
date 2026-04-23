import Navbar from '@/components/Navbar'
import FacilityCard from '@/components/FacilityCard'
import prisma from '@/lib/prisma'

async function getFacilities() {
  const facilities = await prisma.facility.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'asc' },
  })
  return facilities
}

export default async function HomePage() {
  const facilities = await getFacilities()

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Book Your Sports Facility
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Premium courts and turfs across Nairobi — book online in seconds
          </p>
        </div>

        {facilities.length === 0 ? (
          <p className="text-center text-gray-400">No facilities available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}