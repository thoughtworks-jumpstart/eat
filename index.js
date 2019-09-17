#!/usr/bin/env node

const cli = require("commander");
const sample = require("lodash.sample");
const restaurants = require("./restaurants.json");

cli
  .action(function() {
    const restaurant = sample(restaurants);
    console.log(`🍽 Let's go to ${restaurant.name} at ${restaurant.address}`);
  })
  .parse(process.argv);
