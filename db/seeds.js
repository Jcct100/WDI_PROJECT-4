


const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, { useMongoClient: true });

const Petition  = require('../models/petition');
const Goal      = require('../models/goal');
const User      = require('../models/user');

User.collection.remove();
Petition.collection.remove();
Goal.collection.remove();

let globalUsers;

User
  .create([
    {
      username: 'Jamestang',
      firstName: 'James',
      lastName: 'Tang',
      email: 'james@james.com',
      password: 'password',
      passwordConfirmation: 'password',
      telephone_number: '09494842989',
      avatar: 'http://www.fillmurray.com/300/300',
      address: 'London'
    },
    {
      username: 'Johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@john.com',
      password: 'password',
      passwordConfirmation: 'password',
      telephone_number: '0747429821347',
      avatar: 'http://www.fillmurray.com/300/300',
      address: 'London'
    }
  ])
  .then(users => {
    globalUsers = users;
    console.log(`${users.length} users were created!`);

    return Goal.create([
      {name: 'No Poverty'},
      {name: 'Zero Hunger'},
      {name: 'Good Health and Well-being'},
      {name: 'Quality Education'},
      {name: 'Gender Equality'},
      {name: 'Clean Water and Sanitation'},
      {name: 'Affordable and Clean Energy'},
      {name: 'Decent Work and Economic Growth'},
      {name: 'Industry, Innovation and Infrastructure'},
      {name: 'Reduced Inequality'},
      {name: 'Sustainable Cities and Communities'},
      {name: 'Responsible Consumption and Production'},
      {name: 'Climate Action'},
      {name: 'Life Below Water'},
      {name: 'Life on Land'},
      {name: 'Peace and Justice Strong Institutions'},
      {name: 'Partnerships to achieve the Goal'}
    ]);
  })
  .then(goals => {
    console.log(`${goals.length} goals were created!`);

    return Petition.create([{
      title: 'No Poverty',
      image: 'https://i2.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-01.png?fit=1536%2C1536',
      abstract: 'Goal 1: End poverty in all its forms everywhere',
      description: 'Extreme poverty rates have been cut by more than half since 1990. While this is a remarkable achievement, one in five people in developing regions still live on less than $1.90 a day, and there are millions more who make little more than this daily amount, plus many people risk slipping back into poverty. Poverty is more than the lack of income and resources to ensure a sustainable livelihood. Its manifestations include hunger and malnutrition, limited access to education and other basic services, social discrimination and exclusion as well as the lack of participation in decision-making. Economic growth must be inclusive to provide sustainable jobs and promote equality.',
      website: 'http://www.un.org/sustainabledevelopment/poverty/',
      createdBy: globalUsers[0].id,
      goals: [goals[0].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,29)
    }, {
      title: 'Zero Hunger',
      image: 'https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-02.png?fit=1536%2C1536',
      abstract: 'Goal 2: End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
      description: 'It is time to rethink how we grow, share and consume our food. If done right, agriculture, forestry and fisheries can provide nutritious food for all and generate decent incomes, while supporting people-centred rural development and protecting the environment. Right now, our soils, freshwater, oceans, forests and biodiversity are being rapidly degraded. Climate change is putting even more pressure on the resources we depend on, increasing risks associated with disasters such as droughts and floods. Many rural women and men can no longer make ends meet on their land, forcing them to migrate to cities in search of opportunities. A profound change of the global food and agriculture system is needed if we are to nourish today’s 795 million hungry and the additional 2 billion people expected by 2050. The food and agriculture sector offers key solutions for development, and is central for hunger and poverty eradication.',
      website: 'http://www.un.org/sustainabledevelopment/hunger/',
      createdBy: globalUsers[0].id,
      goals: [goals[1].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Good Health and Well-being',
      image: 'https://i2.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-03.png?fit=1536%2C1536',
      abstract: 'Goal 3: Ensure healthy lives and promote well-being for all at all ages',
      description: 'Ensuring healthy lives and promoting the well-being for all at all ages is essential to sustainable development. Significant strides have been made in increasing life expectancy and reducing some of the common killers associated with child and maternal mortality. Major progress has been made on increasing access to clean water and sanitation, reducing malaria, tuberculosis, polio and the spread of HIV/AIDS. However, many more efforts are needed to fully eradicate a wide range of diseases and address many different persistent and emerging health issues.',
      website: 'http://www.un.org/sustainabledevelopment/health/',
      createdBy: globalUsers[0].id,
      goals: [goals[2].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Quality Education',
      image: 'https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-04.png?resize=1160%2C1160',
      abstract: 'Goal 4: Ensure inclusive and quality education for all and promote lifelong learning',
      description: 'Obtaining a quality education is the foundation to improving people’s lives and sustainable development. Major progress has been made towards increasing access to education at all levels and increasing enrolment rates in schools particularly for women and girls. Basic literacy skills have improved tremendously, yet bolder efforts are needed to make even greater strides for achieving universal education goals. For example, the world has achieved equality in primary education between girls and boys, but few countries have achieved that target at all levels of education.',
      website: 'http://www.un.org/sustainabledevelopment/education/',
      createdBy: globalUsers[0].id,
      goals: [goals[3].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Gender Equality',
      image: 'https://i2.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-05.png?fit=1536%2C1536',
      abstract: 'Goal 5: Achieve gender equality and empower all women and girls',
      description: 'While the world has achieved progress towards gender equality and women’s empowerment under the Millennium Development Goals (including equal access to primary education between girls and boys), women and girls continue to suffer discrimination and violence in every part of the world. Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world. Providing women and girls with equal access to education, health care, decent work, and representation in political and economic decision-making processes will fuel sustainable economies and benefit societies and humanity at large.',
      website: 'http://www.un.org/sustainabledevelopment/gender-equality/',
      createdBy: globalUsers[0].id,
      goals: [goals[4].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Clean Water and Sanitation',
      image: 'https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-06.png?fit=1536%2C1536',
      abstract: 'Goal 6: Ensure access to water and sanitation for all',
      description: 'Clean, accessible water for all is an essential part of the world we want to live in. There is sufficient fresh water on the planet to achieve this. But due to bad economics or poor infrastructure, every year millions of people, most of them children, die from diseases associated with inadequate water supply, sanitation and hygiene. Water scarcity, poor water quality and inadequate sanitation negatively impact food security, livelihood choices and educational opportunities for poor families across the world. Drought afflicts some of the world’s poorest countries, worsening hunger and malnutrition. By 2050, at least one in four people is likely to live in a country affected by chronic or recurring shortages of fresh water.',
      website: 'http://www.un.org/sustainabledevelopment/water-and-sanitation/',
      createdBy: globalUsers[0].id,
      goals: [goals[5].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Affordable and Clean Energy',
      image: 'https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-07.png?fit=1536%2C1536',
      abstract: 'Goal 7: Ensure access to affordable, reliable, sustainable and modern energy for all',
      description: 'Energy is central to nearly every major challenge and opportunity the world faces today. Be it for jobs, security, climate change, food production or increasing incomes, access to energy for all is essential. Sustainable energy is opportunity – it transforms lives, economies and the planet. UN Secretary-General Ban Ki-moon is leading a Sustainable Energy for All initiative to ensure universal access to modern energy services, improve efficiency and increase use of renewable sources.',
      website: 'http://www.un.org/sustainabledevelopment/energy/',
      createdBy: globalUsers[0].id,
      goals: [goals[6].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Decent Work and Economic Growth',
      image: 'https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-08.png?fit=1536%2C1536',
      abstract: 'Goal 8: Promote inclusive and sustainable economic growth, employment and decent work for all',
      description: 'Roughly half the world’s population still lives on the equivalent of about US$2 a day. And in too many places, having a job doesn’t guarantee the ability to escape from poverty. This slow and uneven progress requires us to rethink and retool our economic and social policies aimed at eradicating poverty. A continued lack of decent work opportunities, insufficient investments and under-consumption lead to an erosion of the basic social contract underlying democratic societies: that all must share in progress. . The creation of quality jobs will remain a major challenge for almost all economies well beyond 2015. Sustainable economic growth will require societies to create the conditions that allow people to have quality jobs that stimulate the economy while not harming the environment. Job opportunities and decent working conditions are also required for the whole working age population.',
      website: 'http://www.un.org/sustainabledevelopment/economic-growth/',
      createdBy: globalUsers[0].id,
      goals: [goals[7].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Industry, Innovation and Infrastructure',
      image: 'https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-09.png?fit=1536%2C1536',
      abstract: 'Goal 9: Build resilient infrastructure, promote sustainable industrialization and foster innovation',
      description: 'Investments in infrastructure – transport, irrigation, energy and information and communication technology – are crucial to achieving sustainable development and empowering communities in many countries. It has long been recognized that growth in productivity and incomes, and improvements in health and education outcomes require investment in infrastructure. Inclusive and sustainable industrial development is the primary source of income generation, allows for rapid and sustained increases in living standards for all people, and provides the technological solutions to environmentally sound industrialization. Technological progress is the foundation of efforts to achieve environmental objectives, such as increased resource and energy-efficiency. Without technology and innovation, industrialization will not happen, and without industrialization, development will not happen.',
      website: 'http://www.un.org/sustainabledevelopment/infrastructure-industrialization/',
      createdBy: globalUsers[0].id,
      goals: [goals[8].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Reduced Inequality',
      image: 'https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/01/SDG10NewIcon-1.jpg?fit=541%2C541',
      abstract: 'Goal 10: Reduce inequality within and among countries',
      description: 'The international community has made significant strides towards lifting people out of poverty.  The most vulnerable nations – the least developed countries, the landlocked developing countries and the small island developing states – continue to make inroads into poverty reduction.  However, inequality still persists and large disparities remain in access to health and education services and other assets. Additionally, while income inequality between countries may have been reduced, inequality within countries has risen. There is growing consensus that economic growth is not sufﬁcient to reduce poverty if it is not inclusive and if it does not involve the three dimensions of sustainable development – economic, social and environmental. To reduce inequality, policies should be universal in principle paying attention to the needs of disadvantaged and marginalized populations.',
      website: 'http://www.un.org/sustainabledevelopment/inequality/',
      createdBy: globalUsers[1].id,
      goals: [goals[9].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Sustainable Cities and Communities',
      image: 'https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/05/E_SDG_Icons-11.jpg?fit=466%2C466',
      abstract: 'Goal 11: Make cities inclusive, safe, resilient and sustainable',
      description: 'Cities are hubs for ideas, commerce, culture, science, productivity, social development and much more. At their best, cities have enabled people to advance socially and economically. However, many challenges exist to maintaining cities in a way that continues to create jobs and prosperity while not straining land and resources. Common urban challenges include congestion, lack of funds to provide basic services, a shortage of adequate housing and declining infrastructure. The challenges cities face can be overcome in ways that allow them to continue to thrive and grow, while improving resource use and reducing pollution and poverty. The future we want includes cities of opportunities for all, with access to basic services, energy, housing, transportation and more.',
      website: 'http://www.un.org/sustainabledevelopment/cities/',
      createdBy: globalUsers[1].id,
      goals: [goals[10].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Responsible Consumption and Production',
      image: 'https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/05/E_SDG_Icons-12.jpg?fit=466%2C466',
      abstract: 'Goal 12: Ensure sustainable consumption and production patterns',
      description: 'Sustainable consumption and production is about promoting resource and energy efficiency, sustainable infrastructure, and providing access to basic services, green and decent jobs and a better quality of life for all. Its implementation helps to achieve overall development plans, reduce future economic, environmental and social costs, strengthen economic competitiveness and reduce poverty. Sustainable consumption and production  aims at “doing more and better with less,” increasing net welfare gains from economic activities by reducing resource use, degradation and pollution along the whole lifecycle, while increasing quality of life. It involves different stakeholders, including business, consumers, policy makers, researchers, scientists, retailers, media, and development cooperation agencies, among others. It also requires a systemic approach and cooperation among actors operating in the supply chain, from producer to final consumer. It involves engaging consumers through awareness-raising and education on sustainable consumption and lifestyles, providing consumers with adequate information through standards and labels and engaging in sustainable public procurement, among others.',
      website: 'http://www.un.org/sustainabledevelopment/sustainable-consumption-production/',
      createdBy: globalUsers[1].id,
      goals: [goals[11].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Climate Action',
      image: 'https://i2.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/05/E_SDG_Icons-13.jpg?fit=466%2C466',
      abstract: 'Goal 13: Take urgent action to combat climate change and its impacts',
      description: 'Climate change is now affecting every country on every continent. It is disrupting national economies and affecting lives, costing people, communities and countries dearly today and even more tomorrow. People are experiencing the significant impacts of climate change, which include changing weather patterns, rising sea level, and more extreme weather events. The greenhouse gas emissions from human activities are driving climate change and continue to rise. They are now at their highest levels in history. Without action, the world’s average surface temperature is projected to rise over the 21st century and is likely to surpass 3 degrees Celsius this century—with some areas of the world expected to warm even more. The poorest and most vulnerable people are being affected the most. Affordable, scalable solutions are now available to enable countries to leapfrog to cleaner, more resilient economies. The pace of change is quickening as more people are turning to renewable energy and a range of other measures that will reduce emissions and increase adaptation efforts. But climate change is a global challenge that does not respect national borders. Emissions anywhere affect people everywhere. It is an issue that requires solutions that need to be coordinated at the international level and it requires international cooperation to help developing countries move toward a low-carbon economy. To address climate change, countries adopted the Paris Agreement at the COP21 in Paris on 12 December 2015. The Agreement entered into force shortly thereafter, on 4 November 2016. In the agreement, all countries agreed to work to limit global temperature rise to well below 2 degrees Celsius, and given the grave risks, to strive for 1.5 degrees Celsius. You can learn more about the agreement here. Implementation of the Paris Agreement is essential for the achievement of the Sustainable Development Goals, and provides a roadmap for climate actions that will reduce emissions and build climate resilience.',
      website: 'http://www.un.org/sustainabledevelopment/climate-change-2/',
      createdBy: globalUsers[1].id,
      goals: [goals[12].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Life Below Water',
      image: 'https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/05/E_SDG_Icons-14.jpg?fit=466%2C466',
      abstract: 'Goal 14: Conserve and sustainably use the oceans, seas and marine resources',
      description: 'The world’s oceans – their temperature, chemistry, currents and life – drive global systems that make the Earth habitable for humankind. Our rainwater, drinking water, weather, climate, coastlines, much of our food, and even the oxygen in the air we breathe, are all ultimately provided and regulated by the sea. Throughout history, oceans and seas have been vital conduits for trade and transportation. Careful management of this essential global resource is a key feature of a sustainable future.',
      website: 'http://www.un.org/sustainabledevelopment/oceans/',
      createdBy: globalUsers[1].id,
      goals: [goals[13].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Life on Land',
      image: 'https://i2.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/05/E_SDG_Icons-15.jpg?fit=466%2C466',
      abstract: 'Goal 15: Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss',
      description: 'Forests cover 30 per cent of the Earth’s surface and in addition to providing food security and shelter, forests are key to combating climate change, protecting biodiversity and the homes of the indigenous population.  Thirteen million hectares of forests are being lost every year while the persistent degradation of drylands has led to the desertification of 3.6 billion hectares. Deforestation and desertification – caused by human activities and climate change – pose major challenges to sustainable development and have affected the lives and livelihoods of millions of people in the fight against poverty. Efforts are being made to manage forests and combat desertification.',
      website: 'http://www.un.org/sustainabledevelopment/biodiversity/',
      createdBy: globalUsers[1].id,
      goals: [goals[14].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Peace and Justice Strong Institutions',
      image: 'https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/05/E_SDG_Icons-16.jpg?fit=466%2C466',
      abstract: 'Goal 15: Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss',
      description: 'Forests cover 30 per cent of the Earth’s surface and in addition to providing food security and shelter, forests are key to combating climate change, protecting biodiversity and the homes of the indigenous population.  Thirteen million hectares of forests are being lost every year while the persistent degradation of drylands has led to the desertification of 3.6 billion hectares. Deforestation and desertification – caused by human activities and climate change – pose major challenges to sustainable development and have affected the lives and livelihoods of millions of people in the fight against poverty. Efforts are being made to manage forests and combat desertification.',
      website: 'http://www.un.org/sustainabledevelopment/biodiversity/',
      createdBy: globalUsers[1].id,
      goals: [goals[15].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }, {
      title: 'Partnerships to achieve the Goal',
      image: 'https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/05/E_SDG_Icons-17.jpg?fit=466%2C466',
      abstract: 'Goal 17: Revitalize the global partnership for sustainable development',
      description: 'A successful sustainable development agenda requires partnerships between governments, the private sector and civil society. These inclusive partnerships built upon principles and values, a shared vision, and shared goals that place people and the planet at the centre, are needed at the global, regional, national and local level. Urgent action is needed to mobilize, redirect and unlock the transformative power of trillions of dollars of private resources to deliver on sustainable development objectives. Long-term investments, including foreign direct investment, are needed in critical sectors, especially in developing countries. These include sustainable energy, infrastructure and transport, as well as information and communications technologies. The public sector will need to set a clear direction. Review and monitoring frameworks, regulations and incentive structures that enable such investments must be retooled to attract investments and reinforce sustainable development. National oversight mechanisms such as supreme audit institutions and oversight functions by legislatures should be strengthened.',
      website: 'http://www.un.org/sustainabledevelopment/globalpartnerships/',
      createdBy: globalUsers[1].id,
      goals: [goals[16].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }]);
  })
  .then(petitions => {
    console.log(`${petitions.length} petitions were created!`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());


// ___________________________________________________________________
//
// const mongoose   = require('mongoose');
// mongoose.Promise = require('bluebird');
// const { dbURI } = require('../config/environment');
//
// mongoose.connect(dbURI, { useMongoClient: true });
//
// const Petition  = require('../models/petition');
// const Goal      = require('../models/goal');
// const User      = require('../models/user');
//
// User.collection.remove();
// Petition.collection.remove();
// Goal.collection.remove();
//
// let globalUsers;
//
// User
//   .create([
//     {
//       username: 'james',
//       firstName: 'james',
//       lastName: 'tang',
//       email: 'james@james.com',
//       password: 'password',
//       passwordConfirmation: 'password',
//       telephone_number: '09494842989',
//       avatar: 'http://www.fillmurray.com/300/300',
//       address: 'London'
//     },
//     {
//       username: 'johndoe',
//       firstName: 'john',
//       lastName: 'doe',
//       email: 'john@john.com',
//       password: 'password',
//       passwordConfirmation: 'password',
//       telephone_number: '0747429821347',
//       avatar: 'http://www.fillmurray.com/300/300',
//       address: 'London'
//     }
//   ])
//   .then(users => {
//     globalUsers = users;
//     console.log(`${users.length} users were created!`);
//
//     return Goal.create([
//       {name: 'No Poverty'},
//       {name: 'Zero Hunger'},
//       {name: 'Good Health and Well-being'},
//       {name: 'Quality Education'},
//       {name: 'Gender Equality'},
//       {name: 'Clean Water and Sanitation'},
//       {name: 'Affordable and Clean Energy'},
//       {name: 'Decent Work and Economic Growth'},
//       {name: 'Industry, Innovation and Infrastructure'},
//       {name: 'Reduced Inequality'},
//       {name: 'Sustainable Cities and Communities'},
//       {name: 'Responsible Consumption and Production'},
//       {name: 'Climate Action'},
//       {name: 'Life Below Water'},
//       {name: 'Life on Land'},
//       {name: 'Peace and Justice Strong Institutions'},
//       {name: 'Partnerships to achieve the Goal'}
//     ]);
//   })
//   .then(goals => {
//     console.log(`${goals.length} goals were created!`);
//
//     return Petition.create([{
//       title: 'Scrap smart motorways and bring back permanent hard shoulders',
//       image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/12DC7/production/_90155277_016785858-1.jpg',
//       abstract: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway',
//       description: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway. If there was no hard shoulder to stop on, what happens next? The answer, after pounding the smart tarmac, is ... it isn\'t smart enough. It isn\'t quick enough to put lane restrictions/closures in place. It is in fact....a death trap! Emergency services take longer to reach an incident due to no empty lane. It doesn\'t work!',
//       website: 'https://petition.parliament.uk/petitions/206799',
//       createdBy: globalUsers[0].id,
//       goals: [goals[0].id, goals[1].id],
//       signees: [globalUsers[1].id],
//       number_of_signatures: 1,
//       endDate: new Date(2017,12,29)
//     }, {
//       title: 'Call on PM to take action to build public trust in the Grenfell Tower Inquiry',
//       image: 'http://www.telegraph.co.uk/content/dam/news/2017/07/08/TELEMMGLPICT000131886332-xlarge_trans_NvBQzQNjv4BqC9PogZUtSpqAqO-tnweStQt3tN9Ddv3cHZNIEmYP14g.jpeg',
//       abstract: 'To secure trust in an establishment we feel has been distant & unresponsive',
//       description: 'To secure trust in an establishment we feel has been distant & unresponsive, & to avoid a collapse of confidence in the Inquiry\'s ability to discover the truth, it is fundamental that; 1. The Inquiry is not led by a judge alone. Panel members must be appointed with relevant background, expertise, experience, & a real understanding of the issues facing those affected 2. Legal representatives of bereaved families see all evidence from the start & are allowed to question witnesses at the hearings',
//       website: 'https://petition.parliament.uk/petitions/206722',
//       createdBy: globalUsers[1].id,
//       goals: [goals[4].id, goals[6].id],
//       signees: [globalUsers[0].id],
//       number_of_signatures: 1,
//       endDate: new Date(2017,12,30)
//     }]);
//   })
//   .then(petitions => {
//     console.log(`${petitions.length} petitions were created!`);
//   })
//   .catch(err => console.log(err))
//   .finally(() => mongoose.connection.close());





// Goal.create([
//   {name: 'No Poverty'},
//   {name: 'Zero Hunger '},
//   {name: 'Good Health and Well-being'},
//   {name: 'Quality Education '},
//   {name: 'Gender Equality '},
//   {name: 'Clean Water and Sanitation'},
//   {name: 'Affordable and Clean Energy '},
//   {name: 'Decent Work and Economic Growth '},
//   {name: 'Industry, Innovation and Infrastructure '},
//   {name: 'Reduced Inequality '},
//   {name: 'Sustainable Cities and Communities '},
//   {name: 'Responsible Consumption and Production '},
//   {name: 'Climate Action '},
//   {name: 'Life Below Water '},
//   {name: 'Life on Land '},
//   {name: 'Peace and Justice Strong Institutions'},
//   {name: 'Partnerships to achieve the Goal '}
// ])
// .then(goals => {
//   console.log(`${goals.length} goals created!`);
//   return Petition
//   .create([{
//     title: 'Scrap smart motorways and bring back permanent hard shoulders',
//     image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/12DC7/production/_90155277_016785858-1.jpg',
//     abstract: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway',
//     description: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway. If there was no hard shoulder to stop on, what happens next? The answer, after pounding the smart tarmac, is ... it isn\'t smart enough. It isn\'t quick enough to put lane restrictions/closures in place. It is in fact....a death trap! Emergency services take longer to reach an incident due to no empty lane. It doesn\'t work!',
//     website: 'https://petition.parliament.uk/petitions/206799',
//     // createdBy: users[0].id,
//     number_of_signatures: 0,
//     endDate: new Date(2017-12-29)
//     // timestamps:
//   }, {
//     title: 'Call on PM to take action to build public trust in the Grenfell Tower Inquiry',
//     image: 'http://www.telegraph.co.uk/content/dam/news/2017/07/08/TELEMMGLPICT000131886332-xlarge_trans_NvBQzQNjv4BqC9PogZUtSpqAqO-tnweStQt3tN9Ddv3cHZNIEmYP14g.jpeg',
//     abstract: 'To secure trust in an establishment we feel has been distant & unresponsive',
//     description: 'To secure trust in an establishment we feel has been distant & unresponsive, & to avoid a collapse of confidence in the Inquiry\'s ability to discover the truth, it is fundamental that; 1. The Inquiry is not led by a judge alone. Panel members must be appointed with relevant background, expertise, experience, & a real understanding of the issues facing those affected 2. Legal representatives of bereaved families see all evidence from the start & are allowed to question witnesses at the hearings',
//     website: 'https://petition.parliament.uk/petitions/206722',
//     // createdBy:
//     number_of_signatures: 0,
//     endDate: new Date(2017-12-30)
//     // timestamps:
//   }]);
// })
// .then(petition => {
//   console.log(`${petition.length} petitions created!`);
// })
// .catch(err => console.log(err))
// .finally(() => mongoose.connection.close());
//
// mongoose
// .connect(dbURI, { useMongoClient: true })
// .then(db => db.dropDatabase())
// //when remove dropdatabase you will not lose your data when node db/seeds? but you will get a duplicate
// // .then(() => Petition.create(petitionData))
// // .then(petitions => console.log(`${petitions.length} petitions created!`))
// .catch(err => console.log(err))
// .finally(() => mongoose.connection.close());
