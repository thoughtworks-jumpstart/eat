#!/usr/bin/env node

const sample = require("lodash.sample");
const cli = require("commander");

const restaurants = [
  {
    name: "Hong Lim Food Centre and Market",
    address: "Blk 531A Upper Cross Street"
  },
  { name: "Chinatown Complex Market", address: "Blk 335 Smith Street" },
  { name: "People's Park Food Centre", address: "Blk 32 New Market Road" },
  {
    name: "Market Street Interim Hawker Centre",
    address: "5 Cross Street Market Street "
  }
];

cli
  .action(function() {
    const restaurant = sample(restaurants);
    console.log(`Let's go to ${restaurant.name} at ${restaurant.address}`);
  })
  .parse(process.argv);
