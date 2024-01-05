/* gameObject  description 
- Returns game object */

/*--- PLAYERS SKELETON OBJECT ---
            names:{
                number:,
                shoe:,
                points:,
                rebounds:,
                assists:,
                steals:,
                blocks:,
                slamDunks:
            }
*/
function gameObject() {

    const NBAGameObject = {
        home: {
            teamName: `Brooklyn Nets`,
            colors: `Black, White`,
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: `Charlotte Hornets`,
            colors: `Turquoise, Purple`,
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 4
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return NBAGameObject;
}


/*  # numPointsScored() description

Takes in an argument of a player's name and returns the number of points scored for that player.
gameObject ->home ->players ->playerName ->points
gameObject ->away ->players ->playerName ->points
*/

/*----- ## Algorithm for numPointsScored() & shoeSize() ------
i.Find where the player name is included.
i.e., 
home object? or away object ?
    a. Place the players keys in an array.
        -one for home object
        -other for away object
    b. search this array to using  include method
    c. if true specify path to property value
    d. return value as a string
        i.e.,
        nameOfPlayer: ...
        Points scored:...

*/


function numPointsScored(playerName) {
    // Get game Object 
    const NBAGameObject = gameObject();
    /*store all player keys in an  array 
    paths are 
    
    gameObject ->home ->players 
    gameObject ->away ->players 
    */
    const homePlayers = Object.keys(NBAGameObject.home.players);
    const awayPlayers = Object.keys(NBAGameObject.away.players);
    // See if player name is included in either array 
    // Return player points
    // home players check
    if (homePlayers.includes(playerName)) {
        const totalPlayerPoints = NBAGameObject.home.players[playerName].points;
        return totalPlayerPoints;
    }
    // away players check
    if (awayPlayers.includes(playerName)) {
        const totalPlayerPoints = NBAGameObject.away.players[playerName].points;
        return totalPlayerPoints;
    }
    // player doesn't exist
    if (!((homePlayers.includes(playerName)) && (awayPlayers.includes(playerName)))) {
        return `Sorry,\nPlayer ${playerName}  is not in the object`;
    }
}

/* ## numPointsScored () test;
console.log(numPointsScored("Jason Terry"));
console.log(numPointsScored("Brendan Haywood"));
console.log(numPointsScored("rrrrrr")); */


/* # shoeSize() description

Takes in an argument of a player's name and returns  shoe size for that player.
gameObject ->home ->players ->playerName ->shoe
gameObject ->away ->players ->playerName ->shoe
*/

function shoeSize(playerName) {
    // Get game Object 
    const NBAGameObject = gameObject();
    /*store all player keys in an  array 
    paths are 
    
    gameObject ->home ->players 
    gameObject ->away ->players 
    */
    const homePlayers = Object.keys(NBAGameObject.home.players);
    const awayPlayers = Object.keys(NBAGameObject.away.players);
    // See if player name is included in either array 
    // Return player shoe
    // home players check
    if (homePlayers.includes(playerName)) {
        const playerShoeSize = NBAGameObject.home.players[playerName].shoe;
        return playerShoeSize
    }
    // away players check
    if (awayPlayers.includes(playerName)) {
        const playerShoeSize = NBAGameObject.away.players[playerName].shoe;
        return playerShoeSize;
    }
    // player doesn't exist
    if (!((homePlayers.includes(playerName)) && (awayPlayers.includes(playerName)))) {
        return `Sorry,\nPlayer ${playerName}  is not in the object`;
    }
}

/* ## shoeSize() test;
console.log(shoeSize("Jason Terry"));
console.log(shoeSize("Brendan Haywood"));
console.log(shoeSize("rrrrrr")); */


/*  # teamColors() description 

Takes in an argument of a team name and returns  team colors.
paths:
gameObject ->home ->teamName
gameObject ->home ->colors

gameObject ->away ->teamName
gameObject ->away ->colors

*/

/* ----- ## Algorithm for teamColors() ------
i.Find where the team name is.
i.e., 
home object? or away object ?
    a.if found
    d. return colors value
        i.e.,
        nameOfPlayer: ...
        Points scored:...

*/

function teamColors(teamName) {
    // Get game Object 
    const NBAGameObject = gameObject();
    /*  Get teamName values.
        Paths are:    
        gameObject ->home -> teamName 
        gameObject ->away -> teamName 
    */
    const homeTeamName = NBAGameObject.home.teamName;
    const awayTeamName = NBAGameObject.away.teamName;
    // See if team name matches. 
    // Return team colors
    // home team name check
    if (homeTeamName === teamName) {
        const teamColors = NBAGameObject.home.colors;
        return `Team Name: ${teamName} \nTeam colors: ${teamColors}`
    }
    // away team name check
    if (awayTeamName === teamName) {
        const teamColors = NBAGameObject.away.colors;
        return `Team Name: ${teamName} \nTeam colors: ${teamColors}`
    }
    // player doesn't exist
    if (!((homeTeamName === teamName) && (awayTeamName === teamName))) {
        return `Sorry,\nTeam ${teamName}  is not in the object`;
    }
}

/* ## teamColors() test
console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));
console.log(teamColors("rrrrrr")); */


/* # teamNames() description 

Operates on the game object & return an array of the team names.
paths:
gameObject ->home ->teamName
gameObject ->away ->teamName

*/

/* ----- ## Algorithm teamNames() ------
i.Find team names.
ii.Store in arrays.
iii.Return team names

*/

function teamNames() {
    // Get game Object 
    const NBAGameObject = gameObject();
    /*  Get teamName values.
        Paths are:    
        gameObject ->home -> teamName 
        gameObject ->away -> teamName 
    */
    const homeTeamName = NBAGameObject.home.teamName;
    const awayTeamName = NBAGameObject.away.teamName;
    // Store team names in an array 
    const teamNames = [homeTeamName, awayTeamName];
    // Return team names array
    return teamNames;
}

/* ## teamName () test
 console.log(teamNames()); */


/* # playerNumbers() description
1.Takes in an argument of a team name 
2.Returns an array of the jersey number's for that team.

gameObject ->home ->teamName
gameObject ->away ->teamName


*/

/* ----- ## Algorithm for playerNumbers() ------
i.Get team names array.
ii.See if the team is in the game object
iii. if true
a.Store players jersey numbers in an array .
b.Return jersey numbers array
iv. else return error message*/

function playerNumbers(teamName) {
    // Get game Object 
    const NBAGameObject = gameObject();
    // Get homeTeamName
    const homeTeamName = NBAGameObject.home.teamName;
    // Get awayTeamName
    const awayTeamName = NBAGameObject.away.teamName;
    // Get team names array.
    const allTeamNames = teamNames();

    if (allTeamNames.includes(teamName)) {
        // Check if it's the home team name
        if (teamName === homeTeamName) {
            /* Get players jersey numbers and store them in a array        
            Path: 
            gameObject ->home ->players ->number        
            */
            // All home players array
            const playersObject = Object.keys(NBAGameObject.home.players);
            // Map all jersey numbers of the home team
            const jerseyNumbers = playersObject.map((playerName) => {
                return NBAGameObject.home.players[playerName].number;
            })
            return jerseyNumbers;
        }
        // Check if it's the away team name
        if (teamName === awayTeamName) {
            /* Get players jersey numbers and store them in a array
            
            Path: 
            gameObject ->away ->players ->number
            */
            // All away players array
            const playersObject = Object.keys(NBAGameObject.away.players);
            // Map all jersey numbers of the home team
            const jerseyNumbers = playersObject.map((playerName) => {
                return NBAGameObject.away.players[playerName].number;
            })
            return jerseyNumbers;
        }
    } // If team name not in the game object
    else {
        return `Sorry,\nTeam ${teamName} is not in the object`;
    }
}

/* ## playerNumbers() test
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerNumbers("zsdsdgdhbsdttf")); */


/*# playerStats () description 
1.Takes in an argument of a player's name. 
2.Returns an object of that player's stats. 
*/

/*## playerStats () Algorithm
    i.  Get game Object
    ii. See if the name is in the home or away team
    iii. return the object of the players stats
    
*/

function playerStats(playerName) {
    // Get game Object 
    const NBAGameObject = gameObject();
    // Get homePlayerNames
    const homePlayerNames = Object.keys( NBAGameObject.home.players);
    // Get awayPlayerNames
    const awayPlayerNames = Object.keys( NBAGameObject.away.players);
    // all player names
    const allPlayerNames = [...awayPlayerNames,...homePlayerNames];

    if (allPlayerNames.includes(playerName)) {
        // Check if it's a home player
        if (homePlayerNames.includes(playerName)) {
            /* Return players stats        
            Path: 
            gameObject ->home ->players ->playersName        
            */
            const playerStats = NBAGameObject.home.players[playerName];
            return playerStats;
        }
        // Check if it's the away team name
        if (awayPlayerNames.includes(playerName)) {
            /* Return players stats        
            Path: 
            gameObject ->away ->players ->playersName        
            */
            const playerStats = NBAGameObject.away.players[playerName];
            return playerStats;
        }
    } // If team name not in the game object
    else {
        return `Sorry,\nplayer ${playerName} is not in the object`;
    }
}

/*  ## playerStats() test 
console.log(playerStats("Jason Terry"));
console.log(playerStats("Jeff Adrien"));
console.log(playerStats("zsdsdgd")); */


/* # bigShoeRebounds() description
1.Returns the number of rebounds associated with the player that has the largest shoe size. 
hint:
Break this one down into steps:
First, find the player with the largest shoe size
Then, return that player's number of rebounds
Remember to think about return values here. 
Use debugger to drop into your function and understand what it is returning and why. */

/* bigShoeRebounds() Algorithm
1.get player with largest shoe size
    a. get game object
    b. get all players from home and away team
    c. reduce array to one with largest shoe size among them 
    d. get players stats
    e. return players rebound

*/


function bigShoeRebounds(){
    // Phase 1 Get all players
    // Get game object 
    const NBAGameObject = gameObject();
    // Get all players 
    // Players from home team
    const homeTeamPlayers = Object.keys(NBAGameObject.home.players);
    // Players from away team
    const awayTeamPlayers = Object.keys(NBAGameObject.away.players);
    // All players 
    const allPlayers = [...awayTeamPlayers,...homeTeamPlayers];

    // phase 2 Get player with largest shoe size
    // Compare from players array and reduce to largest shoe size
    const playerWithLargestShoeSize = allPlayers.reduce((acc,cur) =>{
        let result = acc;
        if(shoeSize(cur) > shoeSize(acc)){
                result = cur;
        }        
        return result;
    });
    /*  Phase three
    Get stats of the largest shoe sized player
    Return players rebounds
     return players */
    const playerWithLargestShoeSizeStats = playerStats(playerWithLargestShoeSize);
    return playerWithLargestShoeSizeStats.rebounds;
}

/*  ## bigShoeRebounds() test 
console.log(bigShoeRebounds()); */


