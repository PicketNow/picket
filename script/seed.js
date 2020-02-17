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
  const interest7 = await Interest.create({name: 'Animal Rights'})
  const interest8 = await Interest.create({name: 'Voting Rights'})
  const interest9 = await Interest.create({name: 'Judicial Activism'})
  const interest10 = await Interest.create({name: 'Criminal Justice'})
  const interest11 = await Interest.create({name: "Women's"})
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
    date: 'Fri Jan 20 2017 00:00:00 GMT-0500 (Eastern Standard Time)'
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
    date: 'Fri Jan 20 2017',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event3 = await Event.create({
    title: 'Human Rights Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '8 Jane Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10014',
    organizerId: 2,
    date: 'Thu Feb 20 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event4 = await Event.create({
    title: 'LGBTQIA Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '431 6th Ave',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11215',
    organizerId: 1,
    date: 'Wed Feb 19 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event5 = await Event.create({
    title: 'Anti-war Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eu odio tincidunt mattis quis eu neque. Nam nec enim suscipit, aliquam arcu et, semper turpis.',
    stAddress: '205 E 7th Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10009',
    organizerId: 6,
    date: 'Tues Feb 18 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event6 = await Event.create({
    title: 'No Business with ICE - Midtown',
    description:
      'We call on the diverse groups of immigrant people in the United States to join together for a collective struggle. We have to help each other free ourselves of the chains of fear. Because although there are laws that limit us, it is fear that keeps us quiet and weakens us as a community.',
    stAddress: '459 5th Ave',
    city: 'New York',
    state: 'NY',
    zipcode: '10016',
    organizerId: 5,
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/58ba36fcc534a5c4ae3226de/1500338158331-ZSIA5AW8T9RQLYK1SWH6/ke17ZwdGBToddI8pDm48kD33KhhWEodMJvcytjXFyvFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIXZi3p8TzzCd5LBww9rBU5Je7LlmHzK_8BCOYYXjEaPwKMshLAGzx4R3EDFOm1kBS/22.jpg?format=750w',
    date: 'Mon Mar 02 2020',
    time: '17:30:00 GMT-0500 (Eastern Standard Time)'
  })
  const event7 = await Event.create({
    title: '2020 International Drug Policy Reform Conference',
    description:
      'The International Drug Policy Reform Conference is a biennial event that brings together people from around the world who believe that the war on drugs must end. More than 1,200 attendees representing over 50 countries joined us in St. Louis, MO in 2019. ',
    stAddress: '131 West 33rd Street, 15th Floor',
    city: 'New York',
    state: 'NY',
    zipcode: '10001',
    organizerId: 4,
    imageUrl:
      'http://www.reformconference.org/sites/reformconference.org/files/styles/drugpolicy_banner_retina_large/public/2018-07/abouthero-3.jpg?itok=6tuf8wAw',
    date: 'Sat Nov 14 2020',
    time: '10:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event8 = await Event.create({
    title: 'The Fight for Fair Elections: Expanding the Vote in 2020',
    description:
      'Given the especially high stakes of the 2020 election, the need for broad and unobstructed voter participation could not be greater. Yet the past decade has seen a plethora of legal curtailments on voting rights.',
    stAddress: '25 W 43rd Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10036',
    imageUrl:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/19/10/dark-web-voting-records-elections.jpg?w968h681',
    organizerId: 3,
    date: 'Fri Feb 21 2020',
    time: '09:00:00 GMT-0500 (Eastern Standard Time)'
  })
  const event9 = await Event.create({
    title: 'Repeal Judge Jeanne Martin',
    description:
      "Please join us at our judicial activism event to protest Judge Jeanne Martin's ruling in favor of putting pitbulls in cages. Help us gather signatures so we can get vote to repeal this dog-hating lady come election day.",
    stAddress: '1 First St NE',
    city: 'Washington',
    state: 'DC',
    zipcode: '20543',
    organizerId: 2,
    date: 'Fri Feb 21 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://abovethelaw.com/uploads/2015/08/Judge-Maryanne-Trump-Barry-sister-of-Donald-Trump.png'
  })
  const event10 = await Event.create({
    title: 'Bail Reform',
    description:
      "Poverty is not a crime. No one should be sitting in jail just because they don't have the resources to post bail before they can prove their innocence. Join us to show your support for ending this inhumane practice.",
    stAddress: '315 Hudson Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10013',
    organizerId: 1,
    date: 'Thu Feb 27 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/Me4lHjJrjGy5jaU4On-EYLhF0tg=/0x0:1800x1013/1200x675/filters:focal(756x363:1044x651)/cdn.vox-cdn.com/uploads/chorus_image/image/61778115/bail_reform_art_3.0.jpg'
  })
  const event11 = await Event.create({
    title: 'Raise the Federal Minimum Wage',
    description:
      "Who can survive on a wage of $7.25 an hour? Even though New York has adopted a $15 an hour minimum wage, there are millions of Americans in other states who are still struggling to get by. Work with us to ensure that all Americans get a fair wage for an honest day's work.",
    stAddress: '1 New York Plaza',
    city: 'New York',
    state: 'NY',
    zipcode: '10004',
    organizerId: 6,
    date: 'Wed Feb 19 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://getpayroll.com/wp-content/uploads/2019/05/minimum-wage-750x464.png'
  })
  const event12 = await Event.create({
    title: 'Fix Our Homeless Shelters',
    description:
      "The homeless shelters in New York City are in a sad state. These buildings, which shelter our most vulnerable brothers and sisters, are unsafe and desperately in need of reform. Please help us raise awareness about this crucial issue affecting our city's most overlooked citizens.",
    stAddress: "St. Patrick's Cathedral",
    city: 'New York',
    state: 'NY',
    zipcode: '10022',
    organizerId: 5,
    date: 'Tue Feb 25 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://media.graytvinc.com/images/690*388/springs-rescue-mission-shelter-beds.JPG'
  })
  const event13 = await Event.create({
    title: 'Early Childhood Education',
    description:
      "Early childhood education shouldn't be a privilege reserved only for the sons and daughters of the wealthy. Access to education in the early years of development is essential for children's future success. Access to early childhood education must be universal.",
    stAddress: '65 Court St',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11201',
    organizerId: 4,
    date: 'Mon Feb 24 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://cdn-blob-prd.azureedge.net/prd-pws/images/default-source/default-album/3-k-student-1220px.jpg?sfvrsn=bd299c99_4'
  })
  const event14 = await Event.create({
    title: 'We Need A Public Option',
    description:
      "Whatever your vision may be for America's healthcare system, we can all agree that healthcare costs need to go down. A robust public option will force companies to price healthcare more competively and will help all Americans. Join us to protest!",
    stAddress: '26 Federal Plaza',
    city: 'New York',
    state: 'NY',
    zipcode: '10278',
    organizerId: 3,
    date: 'Sun Feb 23 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://static.politico.com/dims4/default/011e9e5/2147483647/resize/403x%3E/quality/90/?url=http%3A%2F%2Fs3-origin-images.politico.com%2Fnews%2F090928_public_option_ap_223.jpg'
  })
  const event15 = await Event.create({
    title: 'Free Community College',
    description:
      'Student debt is outrageous. It is strangling our economy and suffocating a generation of Americans. Help us save the next generation from suffering. Free Community College for All.',
    stAddress: '1605 Amsterdam Ave',
    city: 'New York',
    state: 'NY',
    zipcode: '10031',
    organizerId: 2,
    date: 'Sat Feb 22 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://static01.nyt.com/images/2017/08/11/opinion/11salgado/01salgado-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
  })
  const event16 = await Event.create({
    title: 'Save The Oysters',
    description:
      'Who will think of the oysters? They have a right to a clean home, so that they can be maximally delicious once farmed for our nightly happy hours. Save the oysters!',
    stAddress: 'Zuccotti Park',
    city: 'New York',
    state: 'NY',
    zipcode: '10006',
    organizerId: 1,
    date: 'Fri Feb 28 2020',
    time: '00:00:00 GMT-0500 (Eastern Standard Time)',
    imageUrl:
      'https://bloximages.newyork1.vip.townnews.com/fredericknewspost.com/content/tncms/assets/v3/editorial/1/23/12377876-39c3-5120-a36b-7af8024a6226/5c7dcd3a1285c.image.jpg?resize=1200%2C800'
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
