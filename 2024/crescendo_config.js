var config_data = `
{
  "dataFormat": "tsv",
  "enable_google_sheets": "true",
  "title": "Scouting PASS 2024",
  "page_title": "ScoutingPASS",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "gsCol": "s",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "e",
      "code": "e",
      "type": "event",
      "defaultValue": "2023tnkn",
      "required": "true"
    },
    { "name": "Match Level",
      "gsCol": "l",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "m",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "r",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "gsCol": "t",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "as",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "gsCol": "al",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "gsCol": "aas",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "gsCol": "ass",
      "code": "ass",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "gsCol": "tas",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "gsCol": "tss",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Shots Missed",
      "gsCol": "tsm",
      "code": "tsm",
      "type": "counter"
    },
    { "name": "Pickup From",
      "gsCol": "tpu",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Neither"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Stage Timer",
      "gsCol": "dt",
      "code": "dt",
      "type": "timer",
      "required": "true"
    },
    { "name": "Final Status",
      "gsCol": "fs",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "s": "Onstage (Spotlit)<br>",
        "h": "Harmony<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x",
      "required": "true"
    },
    { "name": "Note in Trap",
      "gsCol": "nit",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "gsCol": "ds",
      "code": "ds",
      "type": "radio",
      "choices": {
        "1": "Not Effective<br>",
        "2": "Average<br>",
        "3": "Very Effective<br>",
        "0": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "gsCol": "dr",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "Below Average<br>",
        "2": "Average<br>",
        "3": "Good<br>",
        "4": "Excellent<br>",
        "0": "Did not play defense"
      },
      "defaultValue": "0"
    },
    { "name": "Speed Rating",
      "gsCol": "sr",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "gsCol": "die",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "gsCol": "tip",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Got Note Stuck",
      "gsCol": "ns",
      "code": "ns",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "gsCol": "part",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "cm",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
