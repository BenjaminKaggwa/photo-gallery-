export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🏟️</span>
        <span className="text-xl font-bold">TurfBooking</span>
      </div>
      <div className="flex gap-4 text-sm">
        <a href="/" className="hover:text-green-200">Home</a>
        <a href="/bookings" className="hover:text-green-200">My Bookings</a>
        <a href="/login" className="hover:text-green-200 font-semibold">Login</a>
      </div>
    </nav>
  )
}