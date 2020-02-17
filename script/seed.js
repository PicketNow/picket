/* eslint-disable max-statements */
'use strict'

const db = require('../server/db')
const {User, Event, Interest} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  //users//
  const user1 = await User.create({
    firstName: 'Cody',
    lastName: 'Dog',
    email: 'cody@email.com',
    password: '123'
  })
  const user2 = await User.create({
    firstName: 'Murphy',
    lastName: 'Cat',
    email: 'murphy@email.com',
    password: '123'
  })
  const user3 = await User.create({
    firstName: 'Liz',
    lastName: 'Mitchell',
    email: 'lmitchell@email.com',
    password: '123',
    isAdmin: true
  })
  const user4 = await User.create({
    firstName: 'Emily',
    lastName: 'Fendler',
    email: 'efendler@email.com',
    password: '123',
    isAdmin: true
  })
  const user5 = await User.create({
    firstName: 'Chloe',
    lastName: 'Jandsten',
    email: 'cjandsten@email.com',
    password: '123',
    isAdmin: true
  })
  const user6 = await User.create({
    firstName: 'Mary',
    lastName: 'Paul',
    email: 'mpaul@email.com',
    password: '123',
    isAdmin: true
  })
  //interests//
  const interest1 = await Interest.create({name: 'Human Rights'})
  const interest2 = await Interest.create({name: 'LGBTQIA'})
  const interest3 = await Interest.create({name: 'Environmental'})
  const interest4 = await Interest.create({name: 'Anti-war'})
  const interest5 = await Interest.create({name: 'Immigration'})
  const interest6 = await Interest.create({name: 'Drug Reform'})
  const interest7 = await Interest.create({name: 'Policing Reform'})
  const interest8 = await Interest.create({name: 'Voting Rights'})
  const interest9 = await Interest.create({name: 'Judicial Activism'})
  const interest10 = await Interest.create({name: 'Criminal Justice'})
  const interest11 = await Interest.create({name: 'Women'})
  const interest12 = await Interest.create({name: 'Economic'})
  const interest13 = await Interest.create({name: 'Anti-poverty'})
  const interest14 = await Interest.create({name: 'Childrens Rights'})
  const interest15 = await Interest.create({name: 'Healthcare Access'})
  const interest16 = await Interest.create({name: 'Education'})

  //events//
  const event1 = await Event.create({
    title: "Women's March",
    description:
      "Don't let women's right roll back a hundred years. Show up with your friends and your best signs.",
    stAddress: 'Washington Square Park',
    city: 'New York',
    state: 'NY',
    zipcode: '10012',
    organizerId: 1,
    date: 'Wed Jan 20 2021 00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'data:image/jpeg;base64,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'
  })
  const event2 = await Event.create({
    title: 'Climate March',
    description:
      "Don't disappoint Greta Thunberg. Skip school, bring a (recycled) protest sign, march for our species continued existence on a habitable planet.",
    stAddress: 'Lafayette Park',
    city: 'Washington',
    state: 'DC',
    zipcode: '20001',
    organizerId: 2,
    date: 'Sun Jan 20 2021',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8L0nxMZh0Vo4m_r4nUrQU2yRhIgq1iCcDdk5p_MjKE5mMoQM5'
  })
  const event3 = await Event.create({
    title: 'Uyghur Human Rights Rally',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '8 Jane Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10014',
    organizerId: 2,
    date: 'Thu Feb 20 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://www.rfa.org/english/news/uyghur/indonesia-protest-12212018172630.html/indonesia-protest.jpg'
  })
  const event4 = await Event.create({
    title: 'Transgender Day of Rememberance',
    description:
      'Transgender Day of Remembrance (TDOR) is an annual observance on November 20 that honors the memory of the transgender people whose lives were lost in acts of anti-transgender violence.',
    stAddress: '431 6th Ave',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11215',
    organizerId: 1,
    date: 'Fri Nov 20 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDSv-smQF2g4Rp41rZgwnrcVFbEUwOIZ_zD2ofw09HWPrPJyZA'
  })
  const event5 = await Event.create({
    title: 'National Day of Action',
    description:
      'On Saturday, January 4 the ANSWER Coalition, CODEPINK, Muslim Peace Fellowship, Veterans for Peace, United AntiWar Coalition (UNAC), United for Peace & Justice (UFPJ), Feminist Foreign Policy, World Beyond War, Popular Resistance and Voices for Creative Nonviolence are calling on people from around the United States to organize local demonstrations to demand: NO MORE U.S. TROOPS TO IRAQ OR THE MIDDLE EAST! U.S. OUT OF IRAQ NOW! and NO WAR/NO SANCTIONS ON IRAN!',
    stAddress: '205 E 7th Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10009',
    organizerId: 6,
    date: 'Wed Feb 19 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://d3n8a8pro7vhmx.cloudfront.net/codepink/pages/12714/attachments/original/1577939677/z-TroopsOutofraq_2.jpg?1577939677'
  })
  const event6 = await Event.create({
    title: 'Immigration Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '185 Ave D',
    city: 'New York',
    state: 'NY',
    zipcode: '10009',
    organizerId: 5,
    date: 'Mon Feb 17 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event7 = await Event.create({
    title: 'Drug Reform Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '99 Gansevoort Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10014',
    organizerId: 4,
    date: 'Sun Feb 16 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event8 = await Event.create({
    title: 'Voting Rights Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '206 Washington St SW',
    city: 'Atlanta',
    state: 'GA',
    zipcode: '30334',
    organizerId: 3,
    date: 'Sat Feb 15 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event9 = await Event.create({
    title: 'Judicial Activism Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '1 First St NE',
    city: 'Washington',
    state: 'DC',
    zipcode: '20543',
    organizerId: 2,
    date: 'Fri Feb 14 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event10 = await Event.create({
    title: 'Criminal Justice Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '315 Hudson Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10013',
    organizerId: 1,
    date: 'Thu Feb 13 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event11 = await Event.create({
    title: 'Economic Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '1 New York Plaza',
    city: 'New York',
    state: 'NY',
    zipcode: '10004',
    organizerId: 6,
    date: 'Wed Feb 12 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event12 = await Event.create({
    title: 'Anti-Poverty Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: "St. Patrick's Cathedral",
    city: 'New York',
    state: 'NY',
    zipcode: '10022',
    organizerId: 5,
    date: 'Tue Feb 11 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event13 = await Event.create({
    title: 'Childrens Rights Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '65 Court St',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11201',
    organizerId: 4,
    date: 'Mon Feb 10 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event14 = await Event.create({
    title: 'Healthcare Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '26 Federal Plaza',
    city: 'New York',
    state: 'NY',
    zipcode: '10278',
    organizerId: 3,
    date: 'Sun Feb 09 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event15 = await Event.create({
    title: 'Education Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '1605 Amsterdam Ave',
    city: 'New York',
    state: 'NY',
    zipcode: '10031',
    organizerId: 2,
    date: 'Sat Feb 08 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event16 = await Event.create({
    title: 'Policing Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: 'Zuccotti Park',
    city: 'New York',
    state: 'NY',
    zipcode: '10006',
    organizerId: 1,
    date: 'Fri Feb 07 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })

  await event1.setInterest(interest11)
  await event2.setInterest(interest3)
  await event3.setInterest(interest1)
  await event4.setInterest(interest2)
  await event5.setInterest(interest4)
  await event6.setInterest(interest5)
  await event7.setInterest(interest6)
  await event8.setInterest(interest8)
  await event9.setInterest(interest9)
  await event10.setInterest(interest10)
  await event11.setInterest(interest12)
  await event12.setInterest(interest13)
  await event13.setInterest(interest14)
  await event14.setInterest(interest15)
  await event15.setInterest(interest16)
  await event16.setInterest(interest7)

  await user1.addInterest(interest7)
  await user1.addInterest(interest2)
  await user2.addInterest(interest16)
  await user2.addInterest(interest3)
  await user3.addInterest(interest15)
  await user3.addInterest(interest4)
  await user4.addInterest(interest14)
  await user4.addInterest(interest2)
  await user5.addInterest(interest13)
  await user5.addInterest(interest5)
  await user6.addInterest(interest6)
  await user6.addInterest(interest12)

  await user1.addRsvp(event16)
  await user1.addRsvp(event10)
  await user1.addRsvp(event4)
  await user2.addRsvp(event15)
  await user2.addRsvp(event9)
  await user2.addRsvp(event3)
  await user3.addRsvp(event14)
  await user3.addRsvp(event8)
  await user3.addRsvp(event2)
  await user4.addRsvp(event13)
  await user4.addRsvp(event7)
  await user4.addRsvp(event1)
  await user5.addRsvp(event12)
  await user5.addRsvp(event6)
  await user6.addRsvp(event11)
  await user6.addRsvp(event5)

  //associate//
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
