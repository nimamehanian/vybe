import React from 'react';
import styled from 'styled-components';

import yourOwnBedroom from 'images/amenities/your_own_bedroom.png';
import book from 'images/icons/book.png';

import fullyFurnished from 'images/amenities/fully_furnished.png';
import couch from 'images/icons/couch.svg';

import organicProduce from 'images/amenities/organic_produce.png';
import leaf from 'images/icons/leaf.svg';

import fortnightlyCleaning from 'images/amenities/fortnightly_cleaning.png';
import broom from 'images/icons/broom.svg';

import appliancesAndSupplies from 'images/amenities/appliances_and_supplies.png';
import rocket from 'images/icons/rocket.svg';

import onsiteLaundry from 'images/amenities/in_unit_laundry.png';
import washingMachine from 'images/icons/washing_machine.svg';

import techInfused from 'images/amenities/tech_infused.png';
import cloud from 'images/icons/cloud.svg';
import checkmark from 'images/icons/checkmark.svg';

import communityEvents from 'images/amenities/community_events.png';
import earth from 'images/icons/earth.svg';

const TechBullets = styled.div`
  margin: 0px 0px 2px;
  display: block;
  &:before {
    content: '';
    width: 17px;
    height: 17px;
    display: inline-block;
    margin-right: 4px;
    background: url(${checkmark}) no-repeat;
    position: relative;
    top: 4px;
  }
`;

const data = [
  {
    image: yourOwnBedroom,
    icon: book,
    title: 'Your Own Bedroom',
    desc: `
      Enjoy the serenity of retreating to your own space,
      adorned with a non-toxic mattress,
      nightstand, desk, lamp, and other essentials.
      Our members embrace sharing, but also require privacy.
    `,
    note: 'We seldom, depending on layout, offer shared rooms, upon request, at some properties.',
  },
  {
    image: fullyFurnished,
    icon: couch,
    title: 'Fully Furnished',
    desc: [
      `With intention, we grow into unique and quaint properties, decorating the common spaces with
      exceptionally designed furniture from places like `,
      <a href="http://www.dwr.com/home?lang=en_US" target="_blank" rel="noopener noreferrer">Design Within Reach</a>,
      ' and ',
      <a href="https://www.the-citizenry.com/" target="_blank" rel="noopener noreferrer">The Citizenry</a>,
      '.',
    ],
    note: `
      We're continually seeking beautiful pieces, so our sights are not set on only these two.
    `,
  },
  {
    image: organicProduce,
    icon: leaf,
    title: 'Organic Produce',
    desc: `
      Included in your membership is regular delivery of organic produce, pastured eggs,
      and other healthy snacks. We empower each home to pick what they like among themselves.
    `,
    note: 'Community managers, at each property, order through Good Eggs or Instacart. 🥚🥕',
  },
  {
    image: fortnightlyCleaning,
    icon: broom,
    title: 'Fortnightly Cleaning',
    desc: [
      'Using natural products, like those from ',
      <a href="https://www.nelliesclean.com/" target="_blank" rel="noopener noreferrer">Nellie&apos;s</a>,
      `, our cleaning team battles mess in shared spaces,
      including the kitchen, living room, and shared bathrooms to restore delightful order. ✨`,
    ],
    note: 'As an upgrade, you may opt in to have your bedroom included during cleanings.',
  },
  {
    image: appliancesAndSupplies,
    icon: rocket,
    title: 'Appliances & Supplies',
    desc: [
      'Kitchens come equipped with quality appliances, like a ',
      <a
        href="https://www.dyson.com/cordless-vacuums/cordless-stick-vacuums.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dyson
      </a>,
      ' and ',
      <a
        href="https://www.vitamix.com/us/en_us/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vitamix
      </a>,
      ', along with pots, pans, dinnerware, soap, paper towels, and spices—meeting your ',
      <a
        href="https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs"
        target="_blank"
        rel="noopener noreferrer"
      >
        hierarchy of needs
      </a>,
      ' so you may soar.',
    ],
    note: 'This may be a good time to mention that your utilities are covered too. 🔥💡💧♻️',
  },
  {
    image: onsiteLaundry,
    icon: washingMachine,
    title: 'In-unit Laundry',
    desc: `
      Our homes come with a washer & dryer, available at your leisure,
      along with all detergents and accessories you'll need for returning your sheets and clothes
      to being clean and fluffy. 🐻
    `,
    note: 'While this is almost always the case, a few properties do not have an in-unit washer and dryer.',
  },
  {
    image: techInfused,
    icon: cloud,
    title: 'Tech-infused',
    desc: [
      <TechBullets>Google Wifi @ 100 Mbps ↑ & ↓</TechBullets>,
      <TechBullets>58&quot; Samsung 4K + Apple TV</TechBullets>,
      <TechBullets>
        Communication via&nbsp;
        <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">Slack</a>
        &nbsp;&&nbsp;
        <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">Notion</a>
      </TechBullets>,
      <TechBullets>
        Rent acceptance via&nbsp;
        <a href="https://venmo.com/" target="_blank" rel="noopener noreferrer">
          Venmo
        </a>
      </TechBullets>,
      <TechBullets>
        <a href="https://august.com/" target="_blank" rel="noopener noreferrer">
          August
        </a>
        &nbsp;door locks
      </TechBullets>,
    ],
    note: 'This is not comprehensive. We adapt and grow as need be.',
  },
  {
    image: communityEvents,
    icon: earth,
    title: 'Community & Events',
    desc: `
      We celebrate together, surprise each other, and make each other's ambitions our own.
      We encourage each other to act in integrity, and hold space for establishing
      a sense of family.
    `,
    note: 'We are kindling the extraordinary, and are far from common.',
  },
];

export default data;
