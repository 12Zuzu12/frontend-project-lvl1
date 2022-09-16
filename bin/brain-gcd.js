#!/usr/bin/env node
import gcd from '../src/games/gcd.js'
import { conclusions } from '../src/index.js';

const getInstructionsGames = 'Find the greatest common divisor of given numbers.';
gcd();
conclusions(gcd,getInstructionsGames);
