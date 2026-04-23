import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  await prisma.facility.createMany({
    data: [
      {
        name: 'Westlands Football Turf',
        type: 'FOOTBALL',
        description: 'Premium artificial grass football turf with floodlights.',
        location: 'Westlands, Nairobi',
        pricePerHour: 1500,
        imageUrl: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800',
        isActive: true,
      },
      {
        name: 'Kilimani Futsal Court',
        type: 'FUTSAL',
        description: 'Indoor futsal court with professional markings.',
        location: 'Kilimani, Nairobi',
        pricePerHour: 1000,
        imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800',
        isActive: true,
      },
      {
        name: 'Karen Basketball Court',
        type: 'BASKETBALL',
        description: 'Outdoor basketball court with two hoops and seating.',
        location: 'Karen, Nairobi',
        pricePerHour: 800,
        imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
        isActive: true,
      },
      {
        name: 'Lavington Tennis Club',
        type: 'TENNIS',
        description: 'Well maintained clay tennis court with equipment hire.',
        location: 'Lavington, Nairobi',
        pricePerHour: 1200,
        imageUrl: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800',
        isActive: true,
      },
    ],
  })

  console.log('✅ Facilities seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })