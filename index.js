#!/usr/bin/env node

const chalk = require("chalk");
const cli = require("commander");
const sample = require("lodash.sample");
const restaurants = require("./restaurants.json");

cli
  .action(() => {
    const restaurant = sample(restaurants);
    const { name, address } = restaurant;
    console.log(`🏃‍♀️  Let's go to: \n🍽   ${chalk.yellow(name)} \n📍  at ${chalk.magenta(address)}`);
  })
  .parse(process.argv);
