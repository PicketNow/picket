'use strict'

const db = require('../server/db')
const {User, Event, Interest} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Dog',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Cat',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  const interests = await Promise.all([
    Interest.create({
      name: 'Human Rights'
    }),
    Interest.create({
      name: 'LGBTQIA'
    }),
    Interest.create({
      name: 'Environmental'
    }),
    Interest.create({
      name: 'Anti-war'
    }),
    Interest.create({
      name: 'Immigration'
    }),
    Interest.create({
      name: 'Drug Reform'
    }),
    Interest.create({
      name: 'Policing Reform'
    }),
    Interest.create({
      name: 'Voting Rights'
    }),
    Interest.create({
      name: 'Judicial Activism'
    }),
    Interest.create({
      name: 'Criminal Justice'
    }),
    Interest.create({
      name: 'Women'
    }),
    Interest.create({
      name: 'Economic'
    }),
    Interest.create({
      name: 'Anti-poverty'
    }),
    Interest.create({
      name: 'Childrens Rights'
    }),
    Interest.create({
      name: 'Healthcare Access'
    }),
    Interest.create({
      name: 'Education'
    })
  ])

  const events = await Promise.all([
    Event.create({
      title: "Women's March",
      description:
        "Don't let women's right roll back a hundred years. Show up with your friends and your best signs.",
      stAddress: 'Washington Square Park',
      city: 'New York',
      zipcode: '10001',
      organizerId: 1,
      date: 'Fri Jan 20 2017 00:00:00 GMT-0500 (Eastern Standard Time)',
      interestId: 10
    }),
    Event.create({
      title: 'Climate March',
      description:
        "Don't disappoint Greta Thunberg. Skip school, bring a (recycled) protest sign, march for our species continued existence on a habitable planet.",
      stAddress: 'Lafayette Park',
      city: 'Washington',
      zipcode: '20057',
      organizerId: 2,
      date: 'Fri Jan 20 2017 00:00:00 GMT-0500 (Eastern Standard Time)',
      interestId: 3
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${events.length} events`)
  console.log(`seeded ${interests.length} interests`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
