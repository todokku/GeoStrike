const DEFAULT_RED_PLAYERS_LOCATION = [
    // { "x": 1353344.952433592, "y": -4654221.773484461, "z": 4131857.9765254767 }, //JFK Air port
    {  "x": 1321401.2582556354, "y": -4658791.375161841, "z": 4137009.5198578103  }    //newark Air port
  // {'x': 1334835.2740264672, 'y': -4650313.671862999, 'z': 4142196.788770844},
  // {'x': 1334834.4816037307, 'y': -4650316.138359212, 'z': 4142194.291900026},
  // {'x': 1334834.085234359, 'y': -4650318.491170774, 'z': 4142191.7950271457},
  // {'x': 1334830.0629525336, 'y': -4650318.666144483, 'z': 4142192.8874177057},
  // {'x': 1334831.0534023098, 'y': -4650316.142808431, 'z': 4142195.384289451},
  // {'x': 1334831.1033030932, 'y': -4650313.329685247, 'z': 4142198.5053795143},
  // {'x': 1334826.3260237859, 'y': -4650313.861310141, 'z': 4142199.441715043},
  // {'x': 1334825.7316281735, 'y': -4650316.27096483, 'z': 4142196.944843863},
  // {'x': 1334824.9887911638, 'y': -4650318.163466611, 'z': 4142195.0721902447},
];

const DEFAULT_BULE_PLAYERS_LOCATION = [

  // {'x': 1334704.8240537788, 'y': -4650473.99787801, 'z': 4142059.749838493},
  // {'x': 1334703.456823169, 'y': -4650477.926682375, 'z': 4142055.8059373545},
  // {'x': 1334707.9410915608, 'y': -4650478.361410317, 'z': 4142053.8858105997},
  // {'x': 1334710.0145478025, 'y': -4650474.7093603015, 'z': 4142057.295021929},
  // {'x': 1334713.0482733473, 'y': -4650471.02766568, 'z': 4142060.42992677},
  // {'x': 1334716.3077490276, 'y': -4650473.57078664, 'z': 4142056.55048194},
  // {'x': 1334714.1222865707, 'y': -4650477.957733333, 'z': 4142052.357545288},
  // {'x': 1334715.2685987365, 'y': -4650480.26404036, 'z': 4142049.4185688836},
];

const TERRAIN_PLAYERS_LOCATION = [
  {x: -1371108.6511167218, y: -5508684.080096612, z: 2901825.449865087},
  {x: -1371208.6511167218, y: -5508750.080096612, z: 2901890.449865087},
];

export const config = {
  serverClientDistanceThreshold: 10,
  clientsUpdateRate: 200,
  gameTimeoutSec: 3600,
  backgroundCharacters: {
    numberOfBgCharacters: 10,
    updateIntervalMs: 100,
  },
  PLAYERS_SPAWN_POSITIONS: {
    RED: process.env.TERRAIN ? TERRAIN_PLAYERS_LOCATION : DEFAULT_RED_PLAYERS_LOCATION,
    BLUE: process.env.TERRAIN ? TERRAIN_PLAYERS_LOCATION : DEFAULT_BULE_PLAYERS_LOCATION,
  },
};
