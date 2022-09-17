#!/usr/bin/env node
import progression from '../src/games/progression.js';
import conclusions from '../src/index.js';

const getInstructionsGames = () => 'What number is missing in the progression?';
progression();
conclusions(progression, getInstructionsGames());
