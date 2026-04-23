export default function FacilityCard({ facility }) {
  const sportEmoji = {
    FOOTBALL: '⚽',
    FUTSAL: '🏃',
    BASKETBALL: '🏀',
    TENNIS: '🎾',
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img
          src={facility.imageUrl || '/placeholder.jpg'}
          alt={facility.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {sportEmoji[facility.type]} {facility.type}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{facility.name}</h3>
        <p className="text-sm text-gray-500 mt-1">📍 {facility.location}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{facility.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-green-700 font-bold text-lg">
            KSH {facility.pricePerHour.toLocaleString()}/hr
          </span>
          <a>
            href={`/facilities/${facility.id}`}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
          
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}