#!/usr/bin/env node

import calc from '../src/games/calc.js';
import { conclusions } from '../src/index.js';

const getInstructionsGames = 'What is the result of the expression?';
calc();
conclusions(calc, getInstructionsGames);
