#!/usr/bin/env node

import prime from '../src/games/prime.js';
import conclusions from '../src/index.js';

const getInstructionsGames = 'Answer "yes" if given number is prime. Otherwise answer "no"';
prime();
conclusions(prime, getInstructionsGames);
