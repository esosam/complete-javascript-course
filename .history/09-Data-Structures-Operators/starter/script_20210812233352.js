'use strict';

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  getGK: function (indexPlayers) {
    return this.players[indexPlayers];
  },
  printGoals: function (...Names) {
    console.log(Names);
    console.log(Names.length);
  },
};
*/
/*

const [players1, players2] = [...game.players];
console.log(players1, players2);

const [gk1, ...fieldplayers1] = players1;
console.log(gk1, fieldplayers1);

const [gk2, ...fieldplayers2] = players2;
console.log(gk2, fieldplayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

game.printGoals('Thiago', 'Coutinho', 'Perisic');
game.printGoals(...game.scored);

//7. The team with the lower odd is more likely to win.
//Print to the console which team is more likely to win,
//WITHOUT using an if/else statement or the ternary operator.

console.log(team1 < team2 && 'Bayern Munich Wins');
console.log(team2 < team1 && 'Bayern Munich');
*/

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
for (const [i, player] of game.scored.entries()) {
  //console.log(`Goal ${i + 1} : ${player}`);
}

const odds = Object.values(game.odds);
//console.log(odds);
let average = 0;
for (const odd of odds) average += odd;
//console.log(average);
average /= odds.length;
//console.log(average);

for (const [teamName, oddVal] of Object.entries(game.odds)) {
  const teamStr = teamName === 'x' ? 'draw' : `victory ${game[teamName]}`;
  console.log(`Odd of ${teamStr}: ${oddVal} `);
}

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};


*/

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a 
log of the events that happened during the game. The values are the events themselves, 
and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was 
unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, 
every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the 
first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, value] of gameEvents) {
  const halftime = min <= 45 ? 'FIRST' : 'SECOND';

  console.log(`[${halftime} HALF] minute: ${min} ${value}`);
  //[FIRST HALF] 17: ⚽️ GOAL
}
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const capitalize = function (name) {
  const names = name.split('_');
  const tmpname = [];
  for (const n of names) {
    tmpname.push(n.replace(n[0], n[0].toUpperCase()));
  }
};

document.querySelector('button').addEventListener('click', function (e) {
  const text = document.querySelector('textarea').value;
  //console.log(text);

  const data = text.split('\n');
  //console.log(data);

  for (const d of data) {
    //console.log(d.trim());
    const tempName = capitalize(d.toLowerCase());
    console.log(capitalize);
  }
});
