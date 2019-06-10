
/* DESCRIPTIONS AND ANALYSIS */

const FB_DESCS = [
  {
    text: ```The Forgotten Beast Bikdá  Julosmbaktur has come!  A huge three-eyed tick.
              It has four long, spiral horns and it is ravening.  Its black exoskeleton
              is leathery.  Beware its poisonous vapors!```,
    breakdown: {
      name: "Bikdá Julosmbaktur / The Y of Z / Secret Crab-Jackal / The Secret-Crab of Jackals",
      body: "Tick",
      quirk: "Three-eyed (requires non-three number of eyes)",
      description: "it has [four] [long] [spiral] horns",
      demeanor: "Ravening",
      bodymod: "Its [black] exoskeleton is [leathery]",
      weapon: "Poisonous Vapors"
    }
  },

  {
    text: ```The Forgotten Beast Arel Gom֫themthir Idgagurnût Teling has come!  A
              great feathered click beetle.It has wings and it appears to be
              emaciated.Its golden yellow feathers are long and sparse.Beware its
              deadly spittle!```,
    breakdown: {
      name: "Arel Gom֫themthir Idgagurnût Teling",
      body: "Click Beetle",
      quirk: "Feathered(requires no feathers)",
      description: "It has[wings]",
      demeanor: "appears to be emaciated",
      bodymod: "Its [golden yellow] feathers are [long] and [sparce]",
      weapon: "Deadly Spittle"
    }
  }
];

/* EPITHETS */

/* GENERATED NAMES */

const FB_NAMES = [
  {
    original: "Ariyilithémeseye Vera",
    quote_name: "The Royal Night Mole of Clams",
    name_format: "The Y of Z",
    words_translated: ["royal", "night", "mole", "clam"],
    language: "elf",
    x: [],
    y: ["royal", "night", "mole"],
    z: ["clam"],
    legends_desc: "The Royal Night-Mole of Clams was a forgotten beast. It was the only one of its kind. A towering three-eyed flycatcher. It has a short trunk and it squirms and fidgets. Its light brown feathers are long and broad. Beware its fire! The Royal Night-Mole was associated with water, thralldom, and caverns.  In a time before time, The Royal Night-Mole began wandering the depths of the world.",
    ingame_desc: "The Forgotten Beast Ariyilithémeseye Vera has come!  A towering three-eyed flycatcher. It has a short trunk and it squirms and fidgets.  Its light brown feathers are long and broad.  Beware its fire!"
  },
  {
    original: "Asngek Dakotu Spos ûrer",
    quote_name: "Asngek Paddledfishes the Abyss of Moistening",
    name_format: "Xx + the Y of Z",
    words_translated: ["coast", "paddle", "fish", "abyss", "moist"],
    language: "goblin",
    x: ["coast", "paddle", "fish"],
    y: ["abyss"],
    z: ["moist"]
  },
  {
    original: "Geb Rashgur Eb", 
    quote_name: "Geb the Attack of Sucking",
    name_format: "X + the Y of Z",
    words_translated: [],
    language: "",
    x: [""], //TODO: finish this
    y: ["attack"],
    z: ["suck"],
    legends_desc: "Geb the Attack of Sucking was a forgotten beast.  It was the only one of its kind.  A towering humanoid composed of water.  It has four long, spiral horns and it has a bloated body.  Beware its poisonous vapors!  Geb was associated with nightmares and caverns.  In a time before time, Geb began wandering the depths of the world."
  },
  {
    original: "Vesh Sárekmessog",
    quote_name: "Vesh Echoedtumor",
    name_format: "Xx",
    words_translated: "Dust Echo - Tumor",
    y: null
  },
  {
    original: "Uthimi Oquarí Nidela",
    quote_name: "Uthimi the Nightmares of Dusk",
    name_format: "X the Y of Z",
    words_translated: "Poison Nightmare Dusk",
    y: "nightmare"
  },
  {
    original: "Osman Slekiquob Sedast",
    quote_name: "Osman the Lustful Bloat of Moistening",
    name_format: "X the Y of Z",
    words_translated: "Shadow Lust - Bloat Moist",
    y: "lust - bloat"
  },
  {
    original: "Meli",
    quote_name: "Meli",
    name_format: "X",
    words_translated: "Murk",
    y: null
  },
  {
    original: "Ezuk Inrus",
    quote_name: "The Raunch of Poisoning",
    name_format: "The Y of Z",
    words_translated: "Raunch Poison",
    y: "raunch"
  },
  {
    original: "Ulspa Ngerxungätkust",
    quote_name: "Ulspa Wickedmirrors",
    name_format: "Xx",
    words_translated: "Dagger Wicked - Mirror",
    y: null
  },
  {
    original: "Oggez Rashas",
    quote_name: "Oggez Deathcaves",
    name_format: "Xx",
    words_translated: "Hole Death-Cave",
    y: null
  },
];

//TODO: Go through all of this and break it down to its component parts

const unformatted = 
[```Ofo, "Ofo"
 Ofo was a forgotten beast.  It was the only one of its kind.  A huge hadrosaurid composed of salt.  It has a pair of long antennae and it squirms and fidgets.  Ofo was associated with water, thralldom and caverns.  In a time before time, Ofo began wandering the depths of the world.```,
```Tob, "Tob"
 Tob was a forgotten beast.  It was the only one of its kind.  A huge quadruped composed of grime and filth.  It has a pair of spindly antennae and it has a bloated body.  Beware its webs!  Tob was associated with water, deformity and caverns.  In a time before time, Tob began wandering the depths of the world.```,
```Lòmifo Vaficericote, "Lòmifo Drinkseals"
 Lòmifo Drinkseals was a forgotten beast.  It was the only one of its kind.  A towering three-eyed iguanodont.  It has a square shell and it has a bloated body.  Its turquoise scales are large and set far apart.  Beware its poisonous bite!  Lòmifo was associated with water, suicide and caverns.  In a time before time, Lòmifo began wandering the depths of the world.```,
```Engo, "Engo"
 Engo was a forgotten beast.  It was the only one of its kind.  A huge feathered silverfish.  It has an enormous shell and it squirms and fidgets.  Its eyes glow aqua.  Its lemon feathers are long and sparse.  Beware its webs!  Engo was associated with water, disease and caverns.  In a time before time, Engo began wandering the depths of the world.```,
```Setnek, "Setnek"
 Setnek was a forgotten beast.  It was the only one of its kind.  An enormous fly composed of water.  It has a pair of knobby antennae and it has a gaunt appearance.  Beware its poisonous gas!  Setnek was associated with water, nightmares and caverns.  In a time before time, Setnek began wandering the depths of the world.```,
```Aquiya, "Aquiya"
 Aquiya was a forgotten beast.  It was the only one of its kind.  A gigantic scaly scorpionfly.  It has large mandibles and it appears to be emaciated.  Beware its deadly spittle!  Aquiya was associated with murder and caverns.  In a time before time, Aquiya began wandering the depths of the world.```,
```Ufalo, "Ufalo"
 Ufalo was a forgotten beast.  It was the only one of its kind.  A great scaly tarantula.  It has a round shell and it undulates rhythmically.  Its azure scales are round and overlapping.  Beware its poisonous bite!  Ufalo was associated with suicide and caverns.  In a time before time, Ufalo began wandering the depths of the world.```,
```Nokzam, "Nokzam"
 Nokzam was a forgotten beast.  It was the only one of its kind.  A great three-eyed caddisfly.  It has a long, straight horn and it belches and croaks.  Its sandy taupe exoskeleton is waxy.  Beware its webs!  Nokzam was associated with chaos and caverns.  In a time before time, Nokzam began wandering the depths of the world.```,
```Ozorfeb, "The Subtle Arrow"
 The Subtle Arrow was a forgotten beast.  It was the only one of its kind.  A towering scaly assassin bug.  It has three stubby horns and it has a bloated body.  Its brown scales are round and overlapping.  Beware its poisonous sting!  The Subtle Arrow was associated with nightmares and caverns.  In a time before time, The Subtle Arrow began wandering the depths of the world.```,
```Snanspex Utes Gened, "Snanspex the Spider of Depth"
 Snanspex the Spider of Depth was a forgotten beast.  It was the only one of its kind.  A gigantic humanoid composed of water.  It has a long, hanging tail and it undulates rhythmically.  Beware its poisonous vapors!  Snanspex was associated with water, jealousy and caverns.  In a time before time, Snanspex began wandering the depths of the world.```,
```Stongun Mutku Oson, "Stongun the Martyr of Suckers"
 Stongun the Martyr of Suckers was a forgotten beast.  It was the only one of its kind.  A gigantic three-eyed hedgehog.  It has a square shell and it has a bloated body.  Its dark taupe hair is long and straight.  Beware its deadly spittle!  Stongun was associated with water, nightmares and caverns.  In a time before time, Stongun began wandering the depths of the world.```,
```Mut, "Mut"
 Mut was a forgotten beast.  It was the only one of its kind.  A great humanoid composed of water.  It has two long, straight horns and it squirms and fidgets.  Beware its poisonous gas!  Mut was associated with water, depravity and caverns.  In a time before time, Mut began wandering the depths of the world.```,
```Omsos, "Omsos"
 Omsos was a forgotten beast.  It was the only one of its kind.  A great one-eyed buffalo.  It has a pair of squat antennae and it squirms and fidgets.  Its cerulean hair is very curly.  Beware its webs!  Omsos was associated with water, chaos and caverns.  In a time before time, Omsos began wandering the depths of the world.```,
```Conibo, "Conibo"
 Conibo was a forgotten beast.  It was the only one of its kind.  A huge iguana with external ribs.  It has two stubby tails and it squirms and fidgets.  Its eyes glow amber.  Its cerulean scales are oval-shaped and close-set.  Beware its poisonous vapors!  Conibo was associated with water, deformity and caverns.  In a time before time, Conibo began wandering the depths of the world.```,
```Urist Munsogerong, "Urist the Vile Bile"
 Urist the Vile Bile was a forgotten beast.  It was the only one of its kind. An enormous hairy toad.  It has two broad horns and it appears to be emaciated.  Its red-purple hair is patchy.  Beware its poisonous vapors!  Urist was associated with water, nightmares and caverns.  In a time before time, Urist began wandering the depths of the world.```,
```Lurtholdamèl Gomòk, "The Hateful Deep Loyalty of Moles"
 The Hateful Deep Loyalty of Moles was a forgotten beast.  It was the only one of its kind.  A huge quadruped composed of native platinum.  It has wings and it has a bloated body.  Beware its webs!  The Hateful Deep Loyalty was associated with jealousy and caverns.  In a time before time, The Hateful Deep Loyalty began wandering the depths of the world.```,
```Baru Stranak Nguzo Stuxul, "Baru Bileoozes the Boil of Froth"
 Baru Bileoozes the Boil of Froth was a forgotten beast.  It was the only one of its kind.  A towering hairy crocodile.  It has a short trunk and it squirms and fidgets.  Its light brown hair is long and wavy.  Beware its deadly dust!  Baru was associated with water, caverns and blight.  In a time before time, Baru began wandering the depths of the world.```,
```Tharumi, "Tharumi"
 Tharumi was a forgotten beast.  It was the only one of its kind.  A towering quadruped composed of ash.  It has a curling trunk and it appears to be emaciated.  Tharumi was associated with water, jealousy and caverns.  In a time before time, Tharumi began wandering the depths of the world.```,
```Agun Tospaskure, "Agun the Strifeful Maze"
 Agun the Strifeful Maze was a forgotten beast.  It was the only one of its kind.  A gigantic three-eyed gecko.  It has three short horns and it undulates rhythmically.  Beware its poisonous bite!  Agun was associated with nightmares and caverns.  In a time before time, Agun began wandering the depths of the world.```,
```Sanene Gilafi, "The Echo of Rumors"
 The Echo of Rumors was a forgotten beast.  It was the only one of its kind.  A huge beakless kingfisher.  It has three long, curly tails and it undulates rhythmically.  Its dark violet feathers are fluffed-out.  Beware its deadly spittle!  The Echo was associated with water, lies and caverns.  In a time before time, The Echo began wandering the depths of the world.```,
```Kashi, "Kashi"
 Kashi was a forgotten beast.  It was the only one of its kind.  A towering tick composed of moonstone.  It has a long, straight horn and it has a bloated body.  Beware its webs!  Kashi was associated with lies and caverns. In a time before time, Kashi began wandering the depths of the world.```,
```Ayanumathe Laceci, "The Abyssal Mange of Froths"
 The Abyssal Mange of Froths was a forgotten beast.  It was the only one of its kind.  A towering humanoid composed of ash.  It has a pair of long antennae and it undulates rhythmically.  The Abyssal Mange was associated with deformity and caverns.  In a time before time, The Abyssal Mange began wandering the depths of the world.In the midwinter of 2, The Abyssal Mange became an enemy of The Fresh Tomes.In the midwinter of 2, The Abyssal Mange became an enemy of The Swift Sabres.In the midwinter of 2, The Abyssal Mange devoured a donkey of The Fresh Tomes in Anguishinked.In the midwinter of 2, The Abyssal Mange devoured a duck of The Fresh Tomes in Anguishinked.In the midwinter of 2, The Abyssal Mange devoured a gander of The Fresh Tomes in Anguishinked.In the midwinter of 2, The Abyssal Mange devoured a turkey gobbler of The Fresh Tomes in Anguishinked.Related EntitiesThe Fresh Tomes (enemy```,
```Uthimi, "Uthimi"
 Uthimi was a forgotten beast.  It was the only one of its kind.  A huge feathered serpent.  It has wings and it is ravening.  Beware its poisonous vapors!  Uthimi was associated with treachery and caverns.  In a time before time, Uthimi began wandering the depths of the world.```,
```Guslo Stestraksmunstu, "Guslo Confuselies"
 Guslo Confuselies was a forgotten beast.  It was the only one of its kind.  A great eyeless rove beetle.  It has a round shell and it squirms and fidgets.  Its mahogany exoskeleton is leathery.  Beware its deadly blood!  Guslo was associated with water, treachery and caverns.  In a time before time, Guslo began wandering the depths of the world.```,
```Thomo, "Thomo"
 Thomo was a forgotten beast.  It was the only one of its kind.  A huge quadruped composed of kaolinite.  It has wings and it squirms and fidgets.  Beware its poisonous gas!  Thomo was associated with water, murder and caverns.  In a time before time, Thomo began wandering the depths of the world.```,
```Itêg, "Itêg"
 Itêg was a forgotten beast.  It was the only one of its kind.  A gigantic three-eyed spider.  It has lacy wings and it squirms and fidgets.  Its green-yellow exoskeleton is rough and cracked.  Beware its poisonous bite!  Itêg was associated with caverns and blight.  In a time before time, Itêg began wandering the depths of the world.```,
```Bugsud Legonnalthish, "Bugsud Wandermenaced"
 Bugsud Wandermenaced was a forgotten beast.  It was the only one of its kind.  A gigantic hairy tiger beetle.  It has an enormous shell and it squirms and fidgets.  Its pale blue hair is patchy.  Beware its deadly blood!  Bugsud was associated with water, depravity and caverns.  In a time before time, Bugsud began wandering the depths of the world.```,
```Ngokang Stospdab Dêsmo, "Ngokang the Spittle of Wasting"
 Ngokang the Spittle of Wasting was a forgotten beast.  It was the only one of its kind.  A towering eyeless stegosaurid.  It has a fat, bulging trunk and it is slavering.  Its pale blue scales are jagged and close-set.  Beware its poisonous sting!  Ngokang was associated with water, depravity and caverns.  In a time before time, Ngokang began wandering the depths of the world.```,
```Yatha Pacataefaÿi Yatha Timeba, "Yatha Thirstbewitched the Shame of Sloth"
 Yatha Thirstbewitched the Shame of Sloth was a forgotten beast.  It was the only one of its kind.  An enormous scaly ribbon worm.  It has thin wings of stretched skin and it squirms and fidgets.  Its gray scales are blocky and overlapping.  Beware its poisonous bite!  Yatha was associated with misery and caverns.  In a time before time, Yatha began wandering the depths of the world.```,
```Ratha, "Ratha"
 Ratha was a forgotten beast.  It was the only one of its kind.  A great one-eyed dimetrodon.  It has large mandibles and it appears to be emaciated. Its cream scales are round and set far apart.  Beware its poisonous vapors!  Ratha was associated with nightmares and caverns.  In a time before time, Ratha began wandering the depths of the world.```,
```Newo Nawara Enure, "Newo the Twilight of Mist"
 Newo the Twilight of Mist was a forgotten beast.  It was the only one of its kind.  A gigantic dimetrodon with external ribs.  It has two long, straight horns and it squirms and fidgets.  Its beige scales are jagged and overlapping.  Beware its deadly blood!  Newo was associated with treachery and caverns.  In a time before time, Newo began wandering the depths of the world.```,
```Aditha Rofaconibo Miyufa Pelese, "Aditha Beachedcoasts the Cyst of Sucking"
 Aditha Beachedcoasts the Cyst of Sucking was a forgotten beast.  It was the only one of its kind.  An enormous feathered ribbon worm.  It has an enormous shell and it undulates rhythmically.  Its ivory feathers are long and broad.  Beware its fire!  Aditha was associated with water, deformity and caverns.  In a time before time, Aditha began wandering the depths of the world.```,
```Amas, "Amas"
 Amas was a forgotten beast.  It was the only one of its kind.  A gigantic python composed of pig iron.  It has three broad horns and it squirms and fidgets.  Beware its deadly dust!  Amas was associated with water, thralldom and caverns.  In a time before time, Amas began wandering the depths of the world.```,
```Thoth Nokgol Lur, "Thoth the Riddle of Hate"
 Thoth the Riddle of Hate was a forgotten beast.  It was the only one of its kind.  An enormous feathered sauropod.  It has three long, straight horns and it undulates rhythmically.  Its cardinal feathers are long and narrow.  Beware its poisonous gas!  Thoth was associated with water, theft and caverns.  In a time before time, Thoth began wandering the depths of the world.```,
```Bazsa Ricwuvul, "Bazsa the Fragile Mongrel"
 Bazsa the Fragile Mongrel was a forgotten beast.  It was the only one of its kind.  A towering hairy leech.  It has a knobby shell and it is slavering.  Its yellow hair is long and shaggy.  Beware its webs!  Bazsa was associated with jealousy and caverns.  In a time before time, Bazsa began wandering the depths of the world.```,
```Baros Bâsenarak Reksastarem, "Baros Sprayshaft the Sinful Fate"
 Baros Sprayshaft the Sinful Fate was a forgotten beast.  It was the only one of its kind.  An enormous blob composed of mud.  It has wings and it appears to be emaciated.  Beware its poisonous gas!  Baros was associated with water, murder and caverns.  In a time before time, Baros began wandering the depths of the world.```,
```Nenpe, "Nenpe"
 Nenpe was a forgotten beast.  It was the only one of its kind.  An enormous feathered snail.  It has wings and it has a bloated body.  Its red feathers are long and broad.  Beware its poisonous gas!  Nenpe was associated with deformity and caverns.  In a time before time, Nenpe began wandering the depths of the world.```,
```Cèthutha Imeri, "The Mine of Ashes"
 The Mine of Ashes was a forgotten beast.  It was the only one of its kind.  A towering hairy earthworm.  It has thin wings of stretched skin and it is ravening.  Its clear hair is long and shaggy.  Beware its poisonous bite!  The Mine was associated with death and caverns.  In a time before time, The Mine began wandering the depths of the world.```,
```Mete Bora Siga, "Mete the Mine of Depth"
 Mete the Mine of Depth was a forgotten beast.  It was the only one of its kind.  A towering noseless goat.  It has three long, curly tails and it squirms and fidgets.  Its light brown hair is long and shaggy.  Beware its deadly spittle!  Mete was associated with treachery and caverns.  In a time before time, Mete began wandering the depths of the world.```,
```ûsbu, "ûsbu"
 ûsbu was a forgotten beast.  It was the only one of its kind.  A great eyeless scorpion.  It has a long, swinging trunk and it undulates rhythmically.  Its cinnamon exoskeleton is sleek and smooth.  Beware its poisonous sting!  ûsbu was associated with torture and caverns.  In a time before time, ûsbu began wandering the depths of the world.```,
```Utes Ngobooge, "Utes Specklednewt"
 Utes Specklednewt was a forgotten beast.  It was the only one of its kind.  A towering scaly chinchilla.  It has a knobby shell and it is slavering.  Its cream scales are large and close-set.  Beware its webs!  Utes was associated with jealousy and caverns.  In a time before time, Utes began wandering the depths of the world.```,
```Snanspex Sasneazrösm, "Snanspex Archmorsel"
 Snanspex Archmorsel was a forgotten beast.  It was the only one of its kind. A huge feathered python.  It has wings and it is slavering.  Its mint green feathers are long and sparse.  Beware its deadly spittle!  Snanspex was associated with thralldom and caverns.  In a time before time, Snanspex began wandering the depths of the world.```,
```Tol Uluxöla Ebrå Omu, "Tol Brainlead the Murk of Slugs"
 Tol Brainlead the Murk of Slugs was a forgotten beast.  It was the only one of its kind.  An enormous eyeless fly.  It has large mandibles and it undulates rhythmically.  Its scarlet exoskeleton is warty.  Beware its fire! Tol was associated with thralldom and caverns.  In a time before time, Tol began wandering the depths of the world.```,
```Ngogngo, "Ngogngo"
 Ngogngo was a forgotten beast.  It was the only one of its kind.  An enormous blob composed of steam.  It has a round shell and it has a bloated body.  Ngogngo was associated with water, murder and caverns.  In a time before time, Ngogngo began wandering the depths of the world.```,
```Alu, "Alu"
 Alu was a forgotten beast.  It was the only one of its kind.  An enormous one-eyed pterosaur.  It has an enormous shell and it belches and croaks.  Its mauve scales are large and close-set.  Beware its noxious secretions!  Alu was associated with water, deformity and caverns.  In a time before time, Alu began wandering the depths of the world.```,
```Banik Idenakmam, "Banik Paddlesunk"
 Banik Paddlesunk was a forgotten beast.  It was the only one of its kind.  A towering scaly slug.  It has thin wings of stretched skin and it is ravening.  Its tan scales are large and overlapping.  Beware its fire!  Banik was associated with water, treachery and caverns.  In a time before time, Banik began wandering the depths of the world.```,
```Ezuk Titthal Idor, "Ezuk the Play of Howls"
 Ezuk the Play of Howls was a forgotten beast.  It was the only one of its kind.  A towering three-eyed skink.  It has large mandibles and it appears to be emaciated.  Its orange scales are jagged and set far apart.  Beware its noxious secretions!  Ezuk was associated with depravity and caverns.  In a time before time, Ezuk began wandering the depths of the world.```,
```Bothon Bothonmigrur, "Bothon the Murky Oceans"
 Bothon the Murky Oceans was a forgotten beast.  It was the only one of its kind.  A gigantic quadruped composed of snow.  It has large mandibles and it undulates rhythmically.  Bothon was associated with water, torture and caverns.  In a time before time, Bothon began wandering the depths of the world.```,
```Simo Budosaquo, "Simo Roaredfaint"
 Simo Roaredfaint was a forgotten beast.  It was the only one of its kind.  A huge gila monster with lidless eyes.  It has a broad shell and it is ravening.  Its lime scales are round and close-set.  Beware its poisonous bite!  Simo was associated with water, nightmares and caverns.  In a time before time, Simo began wandering the depths of the world.```,
```One Iquilarupola Imeritaritha, "One Umbraurn the Ashen Oblivion"
 One Umbraurn the Ashen Oblivion was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of sterling silver.  It has an enormous shell and it undulates rhythmically.  Beware its poisonous sting!  One was associated with suicide and caverns.  In a time before time, One began wandering the depths of the world.```,
```One Iquilarupola Imeritaritha, "One Umbraurn the Ashen Oblivion"
 One Umbraurn the Ashen Oblivion was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of sterling silver.  It has an enormous shell and it undulates rhythmically.  Beware its poisonous sting!  One was associated with suicide and caverns.  In a time before time, One began wandering the depths of the world.```,
```Oreme, "Oreme"
 Oreme was a forgotten beast.  It was the only one of its kind.  A towering blob composed of snow.  It has three long, hanging tails and it undulates rhythmically.  Oreme was associated with water, caverns and blight.  In a time before time, Oreme began wandering the depths of the world.```,
```Amsir Nohusuja, "Amsir the Submerged Urns"
 Amsir the Submerged Urns was a forgotten beast.  It was the only one of its kind.  A gigantic toad with lidless eyes.  It has an enormous shell and it squirms and fidgets.  Its vermilion skin is waxy.  Beware its fire!  Amsir was associated with water, suicide and caverns.  In a time before time, Amsir began wandering the depths of the world.```,
```Ozud, "Ozud"
 Ozud was a forgotten beast.  It was the only one of its kind.  A towering sauropod with lidless eyes.  It has three long, straight tails and it has a gaunt appearance.  Its green-yellow scales are blocky and overlapping.  Beware its deadly dust!  Ozud was associated with theft and caverns.  In a time before time, Ozud began wandering the depths of the world.```,
```Ipiz Banspoduslud Rushanhal, "Ipiz Stuntslobsters the Cavernous Noble"
 Ipiz Stuntslobsters the Cavernous Noble was a forgotten beast.  It was the only one of its kind.  A towering three-eyed waxwing.  It has a stubby horn and it has a bloated body.  Its sea green feathers are patchy.  Beware its deadly dust!  Ipiz was associated with water, thralldom and caverns.  In a time before time, Ipiz began wandering the depths of the world.```,
```Amas, "Amas"
 Amas was a forgotten beast.  It was the only one of its kind.  A great scaly grasshopper.  It has large mandibles and it undulates rhythmically.  Its eyes glow amber.  Its sky blue scales are round and overlapping.  Beware its fire!  Amas was associated with water, torture and caverns.  In a time before time, Amas began wandering the depths of the world.```,
```Weri, "Weri"
 Weri was a forgotten beast.  It was the only one of its kind.  A towering blob composed of snow.  It has an enormous shell and it has a bloated body.  Weri was associated with water, depravity and caverns.  In a time before time, Weri began wandering the depths of the world.```,
```On Ustruoströt, "On the Larval Pusses"
 On the Larval Pusses was a forgotten beast.  It was the only one of its kind.  A great feathered gopher.  It has a round shell and it has a gaunt appearance.  Its moss green feathers are long and sparse.  Beware its deadly spittle!  On was associated with caverns and blight.  In a time before time, On began wandering the depths of the world.```,
```Apufi Ilinewo, "Apufi the Perplexing Cloak"
 Apufi the Perplexing Cloak was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of steam.  It has large mandibles and it squirms and fidgets.  Apufi was associated with water, theft and caverns.  In a time before time, Apufi began wandering the depths of the world.```,
```Zágod Zanor Odgúb, "Zágod the Heart of Mobs"
 Zágod the Heart of Mobs was a forgotten beast.  It was the only one of its kind.  A gigantic one-eyed grasshopper.  It has four short horns and it squirms and fidgets.  Its fuchsia exoskeleton is waxy.  Beware its poisonous bite!  Zágod was associated with chaos and caverns.  In a time before time, Zágod began wandering the depths of the world.```,
```Imust, "Imust"
 Imust was a forgotten beast.  It was the only one of its kind.  A towering hairy serpent.  It has three broad horns and it appears to be emaciated.  Beware its deadly blood!  Imust was associated with water, depravity and caverns.  In a time before time, Imust began wandering the depths of the world.```,
```Ebrå Luloësru, "Ebrå the Washed Crevice"
 Ebrå the Washed Crevice was a forgotten beast.  It was the only one of its kind.  A gigantic eyeless spider.  It has lacy wings and it squirms and fidgets.  Its slate gray exoskeleton is sleek and smooth.  Beware its poisonous bite!  Ebrå was associated with water, death and caverns.  In a time before time, Ebrå began wandering the depths of the world.```,
```Cuthabe Omicirono, "Cuthabe Primesprayed"
 Cuthabe Primesprayed was a forgotten beast.  It was the only one of its kind.  An enormous feathered crab.  It has a long, spiral horn and it undulates rhythmically.  Its raw umber feathers are fluffed-out.  Beware its poisonous vapors!  Cuthabe was associated with water, thralldom and caverns. In a time before time, Cuthabe began wandering the depths of the world.```,
```Lomoth Simo, "The Tomb of Echoes"
 The Tomb of Echoes was a forgotten beast.  It was the only one of its kind.  A great humanoid composed of water.  It has a pair of squat antennae and it squirms and fidgets.  Beware its deadly spittle!  The Tomb was associated with caverns and blight.  In a time before time, The Tomb began wandering the depths of the world.```,
```Abímu Ulireliceÿi, "Abímu the God-forsaken Lie"
 Abímu the God-forsaken Lie was a forgotten beast.  It was the only one of its kind.  A gigantic one-eyed ass twisted into humanoid form.  It undulates rhythmically.  Its eye glows azure.  Its chartreuse hair is unkempt.  Beware its poisonous gas!  Abímu was associated with lies and caverns.  In a time before time, Abímu began wandering the depths of the world.```,
```Ner, "Ner"
 Ner was a forgotten beast.  It was the only one of its kind.  An enormous blob composed of flame.  It has a long, curly tail and it undulates rhythmically.  Ner was associated with water, suicide and caverns.  In a time before time, Ner began wandering the depths of the world.```,
```Aste, "Aste"
 Aste was a forgotten beast.  It was the only one of its kind.  An enormous three-eyed flea.  It has an enormous shell and it appears to be emaciated.  Its emerald exoskeleton is wrinkled.  Beware its deadly dust!  Aste was associated with water, lies and caverns.  In a time before time, Aste began wandering the depths of the world.```,
```Ricote, "Ricote"
 Ricote was a forgotten beast.  It was the only one of its kind.  A towering scaly leech.  It has thin wings of stretched skin and it undulates rhythmically.  Its scarlet scales are large and close-set.  Beware its poisonous bite!  Ricote was associated with water, murder and caverns.  In a time before time, Ricote began wandering the depths of the world.```,
```Nar, "Nar"
 Nar was a forgotten beast.  It was the only one of its kind.  A towering blob composed of salt.  It has three narrow tails and it undulates rhythmically.  Nar was associated with water, disease and caverns.  In a time before time, Nar began wandering the depths of the world.```,
```Nùmadunuwetha, "The Ugly Dungeon"
 The Ugly Dungeon was a forgotten beast.  It was the only one of its kind.  An enormous scaly nematode.  It has thin wings of stretched skin and it is slavering.  Its sea green scales are small and close-set.  Beware its noxious secretions!  The Ugly Dungeon was associated with depravity and caverns.  In a time before time, The Ugly Dungeon began wandering the depths of the world.```,
```Nomar, "Nomar"
 Nomar was a forgotten beast.  It was the only one of its kind.  A great hairy snail.  It has thin wings of stretched skin and it squirms and fidgets.  Its slate gray hair is short and even.  Beware its poisonous vapors!  Nomar was associated with death and caverns.  In a time before time, Nomar began wandering the depths of the world.```,
```Arani, "Arani"
 Arani was a forgotten beast.  It was the only one of its kind.  A towering blob composed of ash.  It has two stubby tails and it has a bloated body.  Arani was associated with suicide and caverns.  In a time before time, Arani began wandering the depths of the world.```,
```Ngom, "Ngom"
 Ngom was a forgotten beast.  It was the only one of its kind.  A gigantic eyeless mayfly.  It has large mandibles and it has a bloated body.  Its lavender blush exoskeleton is rough and cracked.  Beware its fire!  Ngom was associated with murder and caverns.  In a time before time, Ngom began wandering the depths of the world.```,
```Nunùr, "Nunùr"
 Nunùr was a forgotten beast.  It was the only one of its kind.  An enormous quadruped composed of water.  It has large mandibles and it has a gaunt appearance.  Beware its poisonous gas!  Nunùr was associated with depravity and caverns.  In a time before time, Nunùr began wandering the depths of the world.```,
```Stuzang Tostralulo, "Stuzang Spraywashed"
 Stuzang Spraywashed was a forgotten beast.  It was the only one of its kind. A gigantic quadruped composed of mud.  It has a round shell and it squirms and fidgets.  Beware its deadly dust!  Stuzang was associated with water, suicide and caverns.  In a time before time, Stuzang began wandering the depths of the world.```,
```Oggez, "Oggez"
 Oggez was a forgotten beast.  It was the only one of its kind.  A towering feathered dimetrodon.  It has wings and it appears to be emaciated.  Its lilac feathers are long and narrow.  Beware its deadly dust!  Oggez was associated with treachery and caverns.  In a time before time, Oggez began wandering the depths of the world.```,
```Usnar Stran Ustru, "Usnar the Bile of Larvae"
 Usnar the Bile of Larvae was a forgotten beast.  It was the only one of its kind.  A towering otter composed of kimberlite.  It has three broad horns and it squirms and fidgets.  Beware its poisonous gas!  Usnar was associated with water, depravity and caverns.  In a time before time, Usnar began wandering the depths of the world.```,
```Bothongedor, "The Murky Evils"
 The Murky Evils was a forgotten beast.  It was the only one of its kind.  A towering eyeless six-legged hyena.  It appears to be emaciated.  Its pale brown hair is long and straight.  Beware its deadly dust!  The Murky Evils was associated with jealousy and caverns.  In a time before time, The Murky Evils began wandering the depths of the world.```,
```Båx, "Båx"
 Båx was a forgotten beast.  It was the only one of its kind.  A towering blob composed of salt.  It has two long, curly tails and it has a bloated body.  Båx was associated with jealousy and caverns.  In a time before time, Båx began wandering the depths of the world.```,
```Kizest, "Kizest"
 Kizest was a forgotten beast.  It was the only one of its kind.  A great blob composed of vomit.  It has wings and it squirms and fidgets.  Beware its deadly spittle!  Kizest was associated with chaos and caverns.  In a time before time, Kizest began wandering the depths of the world.```,
```Arspun, "Arspun"
 Arspun was a forgotten beast.  It was the only one of its kind.  A gigantic three-eyed spider.  It has a knobby trunk and it appears to be emaciated.  Beware its poisonous bite!  Arspun was associated with chaos and caverns.  In a time before time, Arspun began wandering the depths of the world.```,
```Oquarí Coniboaquiya, "Oquarí Coastfated"
 Oquarí Coastfated was a forgotten beast.  It was the only one of its kind.  A great humanoid composed of charcoal.  It has a pair of fan-like antennae and it squirms and fidgets.  Beware its poisonous vapors!  Oquarí was associated with water, murder and caverns.  In a time before time, Oquarí began wandering the depths of the world.```,
```Ugosh, "Ugosh"
 Ugosh was a forgotten beast.  It was the only one of its kind.  A great scaly slug.  It has thin wings of stretched skin and it squirms and fidgets. Its slate gray scales are jagged and set far apart.  Beware its deadly blood!  Ugosh was associated with death and caverns.  In a time before time, Ugosh began wandering the depths of the world.```,
```Ilush Ovussined Mözirnokgol, "Ilush Moldsweat the Routed Riddles"
 Ilush Moldsweat the Routed Riddles was a forgotten beast.  It was the only one of its kind.  A huge blob composed of ash.  It has wings and it appears to be emaciated.  Ilush was associated with nightmares and caverns.  In a time before time, Ilush began wandering the depths of the world.```,
```Bâsenugosh, "The Sprayed Hollows"
 The Sprayed Hollows was a forgotten beast.  It was the only one of its kind. A gigantic scaly tarantula.  It has thin wings of stretched skin and it appears to be emaciated.  Its chestnut scales are jagged and set far apart.  Beware its poisonous bite!  The Sprayed Hollows was associated with water, jealousy and caverns.  In a time before time, The Sprayed Hollows began wandering the depths of the world.```,
```Xukong, "Xukong"
 Xukong was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of amber.  It has a long, curly tail and it appears to be emaciated.  Beware its deadly spittle!  Xukong was associated with deformity and caverns.  In a time before time, Xukong began wandering the depths of the world.```,
```Utesh, "Utesh"
 Utesh was a forgotten beast.  It was the only one of its kind.  A towering humanoid composed of salt.  It has an enormous shell and it appears to be emaciated.  Utesh was associated with deformity and caverns.  In a time before time, Utesh began wandering the depths of the world.```,
```Nunùr, "Nunùr"
 Nunùr was a forgotten beast.  It was the only one of its kind.  A huge one-eyed sauropod.  It has two stubby tails and it undulates rhythmically.  Its beige scales are oval-shaped and overlapping.  Beware its deadly blood!  Nunùr was associated with murder and caverns.  In a time before time, Nunùr began wandering the depths of the world.```,
```Shedim, "Shedim"
 Shedim was a forgotten beast.  It was the only one of its kind.  A gigantic blob composed of flame.  It has wings and it has a bloated body.  Shedim was associated with water, misery and caverns.  In a time before time, Shedim began wandering the depths of the world.```,
```Doto Atacradir, "Doto Hatedmystery"
 Doto Hatedmystery was a forgotten beast.  It was the only one of its kind.  A gigantic scaly leech.  It has thin wings of stretched skin and it squirms and fidgets.  Its ivory scales are jagged and overlapping.  Beware its poisonous sting!  Doto was associated with lies and caverns.  In a time before time, Doto began wandering the depths of the world.```,
```Quadte Usmenocul, "Quadte the Heroic Soils"
 Quadte the Heroic Soils was a forgotten beast.  It was the only one of its kind.  An enormous dimetrodon with lidless eyes.  It has thin wings of stretched skin and it is slavering.  Beware its deadly spittle!  Quadte was associated with thralldom and caverns.  In a time before time, Quadte began wandering the depths of the world.```,
```Apufi, "Apufi"
 Apufi was a forgotten beast.  It was the only one of its kind.  A towering three-eyed crocodile.  It has thin wings of stretched skin and it squirms and fidgets.  Its eyes glow orange.  Its russet scales are round and close-set.  Beware its deadly spittle!  Apufi was associated with water, murder and caverns.  In a time before time, Apufi began wandering the depths of the world.```,
```Póboró Corapemothida, "Póboró the Incinerated Dent"
 Póboró the Incinerated Dent was a forgotten beast.  It was the only one of its kind.  A towering three-eyed maggot.  It has three long, straight horns and it undulates rhythmically.  Its dark blue exoskeleton is sleek and smooth.  Beware its fire!  Póboró was associated with water, chaos and caverns.  In a time before time, Póboró began wandering the depths of the world.```,
```Omus, "Omus"
 Omus was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of flame.  It has a long, swinging trunk and it squirms and fidgets.  Omus was associated with water, depravity and caverns.  In a time before time, Omus began wandering the depths of the world.```,
```Xan Enrustu Usmdasuxu, "Xan Mitefates the Ashen Sweat"
 Xan Mitefates the Ashen Sweat was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of grime and filth.  It has three narrow tails and it has a bloated body.  Beware its poisonous sting!  Xan was associated with water, caverns and blight.  In a time before time, Xan began wandering the depths of the world.```,
```Menari, "Menari"
 Menari was a forgotten beast.  It was the only one of its kind.  A gigantic feathered stegosaurid.  It has a pair of fan-like antennae and it is ravening.  Its burnt umber feathers are long and sparse.  Beware its poisonous sting!  Menari was associated with theft and caverns.  In a time before time, Menari began wandering the depths of the world.```,
```Linì Necate, "The Cat of Hexes"
 The Cat of Hexes was a forgotten beast.  It was the only one of its kind.  A great blob composed of mud.  It has two narrow tails and it undulates rhythmically.  Beware its poisonous vapors!  The Cat was associated with water, lies and caverns.  In a time before time, The Cat began wandering the depths of the world.```,
```Osush, "Osush"
 Osush was a forgotten beast.  It was the only one of its kind.  A gigantic humanoid composed of mud.  It has a broad shell and it appears to be emaciated.  Beware its poisonous vapors!  Osush was associated with water, chaos and caverns.  In a time before time, Osush began wandering the depths of the world.```,
```Sedast Nomaramsir Dirlu, "Sedast the Abyssal Fish of Drinks"
 Sedast the Abyssal Fish of Drinks was a forgotten beast.  It was the only one of its kind.  A towering one-eyed viper.  It has thin wings of stretched skin and it undulates rhythmically.  Beware its poisonous bite!  Sedast was associated with water, treachery and caverns.  In a time before time, Sedast began wandering the depths of the world.```,
```Mukong Stuxul, "The Grease of Froths"
 The Grease of Froths was a forgotten beast.  It was the only one of its kind.  An enormous hairy antlion larva.  It has a pair of spindly antennae and it is ravening.  Its saffron hair is very curly.  Beware its noxious secretions!  The Grease was associated with water, disease and caverns.  In a time before time, The Grease began wandering the depths of the world.```,
```Zukthist êrgenlath Adag, "Zukthist the Infinite Seduction of Soaking"
 Zukthist the Infinite Seduction of Soaking was a forgotten beast.  It was the only one of its kind.  A huge humanoid composed of dendritic agate.  It has a knobby shell and it appears to be emaciated.  Beware its poisonous gas!  Zukthist was associated with water, lies and caverns.  In a time before time, Zukthist began wandering the depths of the world.```,
```Oda Opeyaiquila, "Oda Mirroredumbral"
 Oda Mirroredumbral was a forgotten beast.  It was the only one of its kind.  A great skinless frog.  It has a fat, bulging trunk and it squirms and fidgets.  Beware its webs!  Oda was associated with water, theft and caverns.  In a time before time, Oda began wandering the depths of the world.In the late spring of 4, Oda became an enemy of The Anvil of Clutches.In the late spring of 4, Oda became an enemy of The Hall of Quieting.In the late spring of 4, Oda attacked the dwarf Etur Graspsyrups.In the late spring of 4, Oda struck down the dwarf Etur Graspsyrups in Eldergranite.In the late spring of 4, Oda devoured the dwarf Etur Graspsyrups in Eldergranite.In the late spring of 4, Oda devoured a guineahen of The Anvil of Clutches in Eldergranite.In the late spring of 4, Oda devoured a dog of The Anvil of Clutches in Eldergranite.In the late spring of 4, Oda attacked the dwarf Sodel Craftpoints.In the late spring of 4, the dwarf Sodel Craftpoints's upper lip was smashed by Oda.In the late spring of 4, Oda struck down the dwarf Sodel Craftpoints in Eldergranite.In the late spring of 4, Oda devoured the dwarf Sodel Craftpoints in Eldergranite.In the late spring of 4, Oda devoured a guineahen of The Anvil of Clutches in Eldergranite.Related EntitiesThe Anvil of Clutches (enemy)```,
```Rine, "Rine"
 Rine was a forgotten beast.  It was the only one of its kind.  A towering beakless woodpecker.  It has a short horn and it has a bloated body.  Its eyes glow aqua.  Its black feathers are long and narrow.  Beware its deadly blood!  Rine was associated with misery and caverns.  In a time before time, Rine began wandering the depths of the world.```,
```Asno Ostrugrusmo, "Asno the Bewildering Echoes"
 Asno the Bewildering Echoes was a forgotten beast.  It was the only one of its kind.  A towering humanoid composed of flame.  It has two stubby horns and it undulates rhythmically.  Beware its poisonous sting!  Asno was associated with lies and caverns.  In a time before time, Asno began wandering the depths of the world.```,
```Menari, "Menari"
 Menari was a forgotten beast.  It was the only one of its kind.  A great one-eyed rat.  It has an enormous shell and it has a gaunt appearance.  Its dark brown hair is long and wavy.  Beware its fire!  Menari was associated with lies and caverns.  In a time before time, Menari began wandering the depths of the world.```,
```Ibruk, "Ibruk"
 Ibruk was a forgotten beast.  It was the only one of its kind.  A towering quadruped composed of green glass.  It has wings and it appears to be emaciated.  Beware its webs!  Ibruk was associated with death and caverns.  In a time before time, Ibruk began wandering the depths of the world.```,
```Snodub Dakugsnor, "Snodub Paddledwhisper"
 Snodub Paddledwhisper was a forgotten beast.  It was the only one of its kind.  A great one-eyed theropod.  It has four long, spiral horns and it appears to be emaciated.  Its dark brown feathers are long and broad.  Beware its poisonous gas!  Snodub was associated with water, treachery and caverns.  In a time before time, Snodub began wandering the depths of the world.```,
```Alasanene, "The First Echoes"
 The First Echoes was a forgotten beast.  It was the only one of its kind.  An enormous eyeless ceratopsid.  It has an enormous shell and it undulates rhythmically.  Beware its deadly blood!  The First Echoes was associated with thralldom and caverns.  In a time before time, The First Echoes began wandering the depths of the world.```,
```Niÿa Remarofa Apa Lebovo, "Niÿa Siltybeach the Paddle of Washing"
 Niÿa Siltybeach the Paddle of Washing was a forgotten beast.  It was the only one of its kind.  A great three-eyed sauropod.  It has a broad shell and it has a bloated body.  Its green-yellow scales are jagged and overlapping.  Beware its fire!  Niÿa was associated with water, jealousy and caverns.  In a time before time, Niÿa began wandering the depths of the world.```,
```Aspâd, "Aspâd"
 Aspâd was a forgotten beast.  It was the only one of its kind.  A huge scaly theropod.  It has large mandibles and it belches and croaks.  Its bronze scales are small and close-set.  Beware its webs!  Aspâd was associated with nightmares and caverns.  In a time before time, Aspâd began wandering the depths of the world.```,
```Ngethac, "Ngethac"
 Ngethac was a forgotten beast.  It was the only one of its kind.  A gigantic theropod with external ribs.  It has large mandibles and it undulates rhythmically.  Its azure feathers are long and broad.  Beware its poisonous vapors!  Ngethac was associated with murder and caverns.  In a time before time, Ngethac began wandering the depths of the world.```,
```Moÿira Wathadefiyi, "Moÿira the Singed Zephyr"
 Moÿira the Singed Zephyr was a forgotten beast.  It was the only one of its kind.  A great skinless dimetrodon.  It has a pair of branching antennae and it has a gaunt appearance.  Beware its poisonous bite!  Moÿira was associated with chaos and caverns.  In a time before time, Moÿira began wandering the depths of the world.```,
```Orgu, "Orgu"
 Orgu was a forgotten beast.  It was the only one of its kind.  A gigantic crocodile with external ribs.  It has thin wings of stretched skin and it belches and croaks.  Its gold scales are oval-shaped and close-set.  Beware its deadly blood!  Orgu was associated with water, suicide and caverns.  In a time before time, Orgu began wandering the depths of the world.```,
```Sanene Obi Nithami, "Sanene the Shadows of Stench"
 Sanene the Shadows of Stench was a forgotten beast.  It was the only one of its kind.  A great three-eyed quetzal.  It has three short horns and it squirms and fidgets.  Its purple taupe feathers are downy.  Beware its deadly blood!  Sanene was associated with depravity and caverns.  In a time before time, Sanene began wandering the depths of the world.```,
```Uzun Snospuusnarenggô, "Uzun the Lurid Juice-Gall"
 Uzun the Lurid Juice-Gall was a forgotten beast.  It was the only one of its kind.  A huge one-eyed mantis.  It has a knobby trunk and it has a bloated body.  Its pale pink exoskeleton is leathery.  Beware its fire!  Uzun was associated with caverns and blight.  In a time before time, Uzun began wandering the depths of the world.```,
```Shadmal, "Shadmal"
 Shadmal was a forgotten beast.  It was the only one of its kind.  A huge blob composed of ash.  It has a stubby tail and it appears to be emaciated.  Shadmal was associated with treachery and caverns.  In a time before time, Shadmal began wandering the depths of the world.```,
```Nunùr, "Nunùr"
 Nunùr was a forgotten beast.  It was the only one of its kind.  An enormous eyeless porcupine.  It has a curling trunk and it undulates rhythmically.  Its pale brown hair is long and wavy.  Beware its poisonous sting!  Nunùr was associated with torture and caverns.  In a time before time, Nunùr began wandering the depths of the world.```,
```Nunùr Bothon Arak, "Nunùr the Murk of Shafts"
 Nunùr the Murk of Shafts was a forgotten beast.  It was the only one of its kind.  A great theropod composed of ash.  It has three long, curly tails and it undulates rhythmically.  Nunùr was associated with murder and caverns.  In a time before time, Nunùr began wandering the depths of the world.```,
```Oce Sleponoce, "Oce the Gristly Dust"
 Oce the Gristly Dust was a forgotten beast.  It was the only one of its kind.  A huge pig with external ribs.  It has large mandibles and it squirms and fidgets.  Its eyes glow golden yellow.  Its purple hair is long and wavy.  Beware its hunger for warm blood!  Oce was associated with disease and caverns.  In a time before time, Oce began wandering the depths of the world.```,
```Spothrib Athrigomsos, "Spothrib Eelumbras"
 Spothrib Eelumbras was a forgotten beast.  It was the only one of its kind.  An enormous quadruped composed of water.  It has a long, straight horn and it has a bloated body.  Beware its poisonous vapors!  Spothrib was associated with deformity and caverns.  In a time before time, Spothrib began wandering the depths of the world.```,
```Iño Uquud, "The Seas of Spittle"
 The Seas of Spittle was a forgotten beast.  It was the only one of its kind. A gigantic skinless raccoon.  It has a square shell and it has a bloated body.  Beware its deadly spittle!  The Seas was associated with water, depravity and caverns.  In a time before time, The Seas began wandering the depths of the world.```,
```Debish, "Debish"
 Debish was a forgotten beast.  It was the only one of its kind.  A huge hairy earthworm.  It has thin wings of stretched skin and it undulates rhythmically.  Its gray hair is very curly.  Beware its noxious secretions!  Debish was associated with misery and caverns.  In a time before time, Debish began wandering the depths of the world.```,
```Sifina, "Sifina"
 Sifina was a forgotten beast.  It was the only one of its kind.  An enormous one-eyed armadillo.  It has a twisting, jointed trunk and it undulates rhythmically.  Its silver hair is long and shaggy.  Beware its fire!  Sifina was associated with thralldom and caverns.  In a time before time, Sifina began wandering the depths of the world.```,
```Nethitha, "Nethitha"
 Nethitha was a forgotten beast.  It was the only one of its kind.  A huge quadruped composed of mud.  It has a pair of knobby antennae and it has a bloated body.  Beware its poisonous sting!  Nethitha was associated with water, torture and caverns.  In a time before time, Nethitha began wandering the depths of the world.```,
```Nguslu Zesmstumsodor, "Nguslu Duskdeep"
 Nguslu Duskdeep was a forgotten beast.  It was the only one of its kind.  An enormous eyeless tick.  It has lacy wings and it undulates rhythmically.  Its sandy taupe exoskeleton is leathery.  Beware its noxious secretions!  Nguslu was associated with water, theft and caverns.  In a time before time, Nguslu began wandering the depths of the world.```,
```Rusmo Äbaspâd Ebråuno, "Rusmo Shaftcaverns the Murky Burial"
 Rusmo Shaftcaverns the Murky Burial was a forgotten beast.  It was the only one of its kind.  A huge eyeless nightjar.  It has a fat, bulging trunk and it is slavering.  Its crimson feathers are fluffed-out.  Beware its poisonous bite!  Rusmo was associated with suicide and caverns.  In a time before time, Rusmo began wandering the depths of the world.```,
```Tise, "Tise"
 Tise was a forgotten beast.  It was the only one of its kind.  An enormous hairy crocodile.  It has three long, curly tails and it undulates rhythmically.  Its dark brown hair is long and wavy.  Beware its fire!  Tise was associated with water, caverns and blight.  In a time before time, Tise began wandering the depths of the world.```,
```Wirethi, "Wirethi"
 Wirethi was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of vomit.  It has a fat, bulging trunk and it squirms and fidgets.  Beware its deadly spittle!  Wirethi was associated with water, misery and caverns.  In a time before time, Wirethi began wandering the depths of the world.```,
```Sapa Epogalka Aril Usan, "Sapa Sealdeep the Ships of Heart"
 Sapa Sealdeep the Ships of Heart was a forgotten beast.  It was the only one of its kind.  A great feathered lobster.  It has a broad shell and it is ravening.  Its eyes glow blue.  Its dark pink feathers are downy.  Beware its deadly spittle!  Sapa was associated with water, thralldom and caverns.  In a time before time, Sapa began wandering the depths of the world.```,
```Ruÿava Nona, "The Lobster of Quandaries"
 The Lobster of Quandaries was a forgotten beast.  It was the only one of its kind.  An enormous eyeless hadrosaurid.  It has a pair of branching antennae and it appears to be emaciated.  Beware its poisonous bite!  The Lobster was associated with water, theft and caverns.  In a time before time, The Lobster began wandering the depths of the world.```,
```Omus Usaspsnospu, "Omus Boatlurid"
 Omus Boatlurid was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of tiger iron.  It has two broad horns and it squirms and fidgets.  Beware its webs!  Omus was associated with water, deformity and caverns.  In a time before time, Omus began wandering the depths of the world.```,
```ïkor Stukónvudthar, "ïkor Squashedransacked"
 ïkor Squashedransacked was a forgotten beast.  It was the only one of its kind.  An enormous eyeless rat.  It has a pair of fan-like antennae and it squirms and fidgets.  Its fuchsia hair is long and wavy.  Beware its poisonous sting!  ïkor was associated with chaos and caverns.  In a time before time, ïkor began wandering the depths of the world.```,
```Idar, "Idar"
 Idar was a forgotten beast.  It was the only one of its kind.  A great one-eyed tarantula.  It has large mandibles and it undulates rhythmically.  Its green-yellow exoskeleton is sleek and smooth.  Beware its poisonous bite!  Idar was associated with jealousy and caverns.  In a time before time, Idar began wandering the depths of the world.```,
```Imi, "Imi"
 Imi was a forgotten beast.  It was the only one of its kind.  A towering hairy mite.  It has three short horns and it has a bloated body.  Its pale brown hair is unkempt.  Beware its deadly dust!  Imi was associated with treachery and caverns.  In a time before time, Imi began wandering the depths of the world.```,
```Rustu Ngoso Kutsmob, "Rustu the Vice of Menacing"
 Rustu the Vice of Menacing was a forgotten beast.  It was the only one of its kind.  A towering noseless horse.  It has four broad horns and it is slavering.  Its eggplant hair is short and even.  Beware its webs!  Rustu was associated with water, murder and caverns.  In a time before time, Rustu began wandering the depths of the world.```,
```Tofì Ayanu, "The Crevice of Abysses"
 The Crevice of Abysses was a forgotten beast.  It was the only one of its kind.  A gigantic three-eyed tick.  It has a broad shell and it has a bloated body.  Its slate gray exoskeleton is waxy.  Beware its poisonous bite!  The Crevice was associated with death and caverns.  In a time before time, The Crevice began wandering the depths of the world.```,
```Strildo Othronsetoc, "Strildo the Occult Razor"
 Strildo the Occult Razor was a forgotten beast.  It was the only one of its kind.  A great lizard with external ribs.  It has a fat, bulging trunk and it has a bloated body.  Beware its poisonous sting!  Strildo was associated with nightmares and caverns.  In a time before time, Strildo began wandering the depths of the world.```,
```Nomar Nirnomar, "Nomar Necroabyss"
 Nomar Necroabyss was a forgotten beast.  It was the only one of its kind.  An enormous scaly salamander.  It has large mandibles and it squirms and fidgets.  Beware its deadly spittle!  Nomar was associated with water, suicide and caverns.  In a time before time, Nomar began wandering the depths of the world.```,
```Gósmer Momuzlur, "Gósmer Crypthates"
 Gósmer Crypthates was a forgotten beast.  It was the only one of its kind.  A huge wolf with lidless eyes.  It has thin wings of stretched skin and it appears to be emaciated.  Its sepia hair is very curly.  Beware its poisonous sting!  Gósmer was associated with murder and caverns.  In a time before time, Gósmer began wandering the depths of the world.```,
```Zedot Telingmìshos Fenglel Elcur, "Zedot Coastalbeached the Fly of Plagues"
 Zedot Coastalbeached the Fly of Plagues was a forgotten beast.  It was the only one of its kind.  A gigantic humanoid composed of white chalcedony.  It has a square shell and it squirms and fidgets.  Beware its deadly spittle!  Zedot was associated with water, murder and caverns.  In a time before time, Zedot began wandering the depths of the world.```,
```Disuth Gakit, "The Nightmare of Thieves"
 The Nightmare of Thieves was a forgotten beast.  It was the only one of its kind.  A gigantic hairy serpent.  It has an enormous shell and it appears to be emaciated.  Its aqua hair is short and even.  Beware its poisonous gas!  The Nightmare was associated with water, torture and caverns.  In a time before time, The Nightmare began wandering the depths of the world.```,
```Rulush Godumozsit, "Rulush the Mucous Crab"
 Rulush the Mucous Crab was a forgotten beast.  It was the only one of its kind.  A gigantic eyeless spider.  It has large mandibles and it squirms and fidgets.  Its buff exoskeleton is waxy.  Beware its poisonous bite!  Rulush was associated with water, caverns and blight.  In a time before time, Rulush began wandering the depths of the world.```,
```Thol Zutshosh Avuz, "Thol the Bewilderment of Mining"
 Thol the Bewilderment of Mining was a forgotten beast.  It was the only one of its kind.  An enormous scaly moth.  It has large mandibles and it undulates rhythmically.  Its light blue scales are large and overlapping.  Beware its deadly spittle!  Thol was associated with water, lies and caverns.  In a time before time, Thol began wandering the depths of the world.```,
```Dungda, "Dungda"
 Dungda was a forgotten beast.  It was the only one of its kind.  A huge scaly leech.  It has a spiral shell and it is ravening.  Beware its poisonous bite!  Dungda was associated with disease and caverns.  In a time before time, Dungda began wandering the depths of the world.```,
```Ulirecuwiwe, "The God-forsaken Stunt"
 The God-forsaken Stunt was a forgotten beast.  It was the only one of its kind.  A gigantic feathered six-legged sauropod.  It has a gaunt appearance. Its taupe gray feathers are patchy.  Beware its deadly spittle!  The God-forsaken Stunt was associated with water, jealousy and caverns.  In a time before time, The God-forsaken Stunt began wandering the depths of the world.```,
```Cèthutha, "Cèthutha"
 Cèthutha was a forgotten beast.  It was the only one of its kind.  A huge gopher composed of crystal glass.  It has two long, hanging tails and it undulates rhythmically.  Beware its poisonous gas!  Cèthutha was associated with death and caverns.  In a time before time, Cèthutha began wandering the depths of the world.```,
```Äb, "Äb"
 Äb was a forgotten beast.  It was the only one of its kind.  A towering pterosaur with external ribs.  It has large mandibles and it has a bloated body.  Its rust scales are small and set far apart.  Beware its deadly dust! Äb was associated with water, torture and caverns.  In a time before time, Äb began wandering the depths of the world.```,
```Rine Iquilacèthutha, "Rine the Umbral Mines"
 Rine the Umbral Mines was a forgotten beast.  It was the only one of its kind.  An enormous three-eyed stegosaurid.  It has large mandibles and it is ravening.  Its clear scales are oval-shaped and close-set.  Beware its fire! Rine was associated with water, misery and caverns.  In a time before time, Rine began wandering the depths of the world.```,
```Víÿo Iminuùceÿi Leyaraata, "Víÿo Crownflinched the Messianic Pebble"
 Víÿo Crownflinched the Messianic Pebble was a forgotten beast.  It was the only one of its kind.  A huge one-eyed lizard.  It has three long, spiral horns and it squirms and fidgets.  Its fern green scales are large and set far apart.  Beware its noxious secretions!  Víÿo was associated with thralldom and caverns.  In a time before time, Víÿo began wandering the depths of the world.```,
```Obi Asithiweri Fíthacaanaÿa, "Obi Terrorplague the Profane Dead"
 Obi Terrorplague the Profane Dead was a forgotten beast.  It was the only one of its kind.  A towering hairy rove beetle.  It has thin wings of stretched skin and it is slavering.  Its chocolate hair is patchy.  Beware its noxious secretions!  Obi was associated with murder and caverns.  In a time before time, Obi began wandering the depths of the world.```,
```Esaga Cirikosanene, "Esaga Hagechoes"
 Esaga Hagechoes was a forgotten beast.  It was the only one of its kind.  A huge feathered monkey.  It has a long, swinging trunk and it has a bloated body.  Its lemon feathers are long and broad.  Beware its fire!  Esaga was associated with deformity and caverns.  In a time before time, Esaga began wandering the depths of the world.```,
```Lustot, "Lustot"
 Lustot was a forgotten beast.  It was the only one of its kind.  A great feathered pterosaur.  It has a knobby trunk and it undulates rhythmically.  Its slate gray feathers are downy.  Beware its noxious secretions!  Lustot was associated with water, misery and caverns.  In a time before time, Lustot began wandering the depths of the world.```,
```Ricote Otogavathi, "Ricote the Bad Sins"
 Ricote the Bad Sins was a forgotten beast.  It was the only one of its kind. A gigantic three-eyed toad.  It has large mandibles and it is ravening.  Its mahogany skin is sleek and smooth.  Beware its deadly dust!  Ricote was associated with water, murder and caverns.  In a time before time, Ricote began wandering the depths of the world.```,
```Strabo, "Strabo"
 Strabo was a forgotten beast.  It was the only one of its kind.  A gigantic quadruped composed of sunstone.  It has two stubby tails and it has a bloated body.  Beware its poisonous gas!  Strabo was associated with water, murder and caverns.  In a time before time, Strabo began wandering the depths of the world.```,
```Thol Urnût Sárek, "Thol the Servant of Echoes"
 Thol the Servant of Echoes was a forgotten beast.  It was the only one of its kind.  A gigantic scaly scorpion.  It has a knobby trunk and it has a gaunt appearance.  Its eyes glow blue.  Beware its poisonous sting!  Thol was associated with water, jealousy and caverns.  In a time before time, Thol began wandering the depths of the world.```,
```Ngethac, "Ngethac"
 Ngethac was a forgotten beast.  It was the only one of its kind.  An enormous fox with lidless eyes.  It has large mandibles and it has a gaunt appearance.  Its spring green hair is long and wavy.  Beware its poisonous bite!  Ngethac was associated with water, caverns and blight.  In a time before time, Ngethac began wandering the depths of the world.```,
```Cáccast Lomoth Lerdi, "Cáccast the Tombs of Seducing"
 Cáccast the Tombs of Seducing was a forgotten beast.  It was the only one of its kind.  A huge hairy theropod.  It has three long, curving horns and it squirms and fidgets.  Its peach hair is long and straight.  Beware its webs! Cáccast was associated with water, murder and caverns.  In a time before time, Cáccast began wandering the depths of the world.```,
```Conibo, "Conibo"
 Conibo was a forgotten beast.  It was the only one of its kind.  A towering three-eyed cavy.  It has large mandibles and it has a bloated body.  Its slate gray hair is patchy.  Beware its noxious secretions!  Conibo was associated with water, misery and caverns.  In a time before time, Conibo began wandering the depths of the world.```,
```Mete Usa Osman, "Mete the Cat of Shadows"
 Mete the Cat of Shadows was a forgotten beast.  It was the only one of its kind.  A great humanoid composed of ash.  It has two long, curving horns and it squirms and fidgets.  Mete was associated with water, treachery and caverns.  In a time before time, Mete began wandering the depths of the world.```,
```Eslul Tegalural, "Eslul Washwitches"
 Eslul Washwitches was a forgotten beast.  It was the only one of its kind.  A great humanoid composed of coral.  It has a knobby shell and it squirms and fidgets.  Beware its webs!  Eslul was associated with water, murder and caverns.  In a time before time, Eslul began wandering the depths of the world.```,
```Migrur Rúbalosod Telingvucar, "Migrur Gillbones the Coastal Urns"
 Migrur Gillbones the Coastal Urns was a forgotten beast.  It was the only one of its kind.  A great iguanodont with lidless eyes.  It has a knobby shell and it has a gaunt appearance.  Its gray scales are large and close-set.  Beware its deadly blood!  Migrur was associated with water, death and caverns.  In a time before time, Migrur began wandering the depths of the world.```,
```Nekut, "Nekut"
 Nekut was a forgotten beast.  It was the only one of its kind.  A gigantic skinless iguana.  It has a pair of spindly antennae and it undulates rhythmically.  Beware its fire!  Nekut was associated with lies and caverns. In a time before time, Nekut began wandering the depths of the world.```,
```Thomo Irumnecar Korukamca, "Thomo Wavepuzzled the Wicked Dreams"
 Thomo Wavepuzzled the Wicked Dreams was a forgotten beast.  It was the only one of its kind.  A gigantic skinless chinchilla.  It has a spiral shell and it squirms and fidgets.  Beware its webs!  Thomo was associated with water, treachery and caverns.  In a time before time, Thomo began wandering the depths of the world.```,
```Orrun Urmimigath, "Orrun Swamscrape"
 Orrun Swamscrape was a forgotten beast.  It was the only one of its kind.  An enormous hairy tarantula.  It has large mandibles and it belches and croaks.  Its lavender hair is very curly.  Beware its poisonous bite!  Orrun was associated with water, chaos and caverns.  In a time before time, Orrun began wandering the depths of the world.```,
```Ugot Nust Otstë, "Ugot the Thunder of Zeal"
 Ugot the Thunder of Zeal was a forgotten beast.  It was the only one of its kind.  An enormous feathered earthworm.  It has a broad shell and it belches and croaks.  Its bronze feathers are long and broad.  Beware its poisonous bite!  Ugot was associated with water, chaos and caverns.  In a time before time, Ugot began wandering the depths of the world.```,
```Cetha Raliraÿafa, "Cetha the Lurid Puke"
 Cetha the Lurid Puke was a forgotten beast.  It was the only one of its kind.  A huge alligator with lidless eyes.  It has thin wings of stretched skin and it appears to be emaciated.  Its maroon scales are small and overlapping.  Beware its hunger for warm blood!  Cetha was associated with water, disease and caverns.  In a time before time, Cetha began wandering the depths of the world.```,
```Iÿe Nawarapife, "Iÿe Twilightriddles"
 Iÿe Twilightriddles was a forgotten beast.  It was the only one of its kind. A towering eyeless ant.  It has lacy wings and it squirms and fidgets.  Its taupe exoskeleton is warty.  Beware its deadly blood!  Iÿe was associated with theft and caverns.  In a time before time, Iÿe began wandering the depths of the world.```,
```Ugosh Bothonvucar Osod Thol, "Ugosh Murkurns the Bone of Deeps"
 Ugosh Murkurns the Bone of Deeps was a forgotten beast.  It was the only one of its kind.  A gigantic eyeless koala.  It has a spiral shell and it undulates rhythmically.  Its emerald hair is short and even.  Beware its deadly spittle!  Ugosh was associated with suicide and caverns.  In a time before time, Ugosh began wandering the depths of the world.```,
```Ugosh Bothonvucar Osod Thol, "Ugosh Murkurns the Bone of Deeps"
 Ugosh Murkurns the Bone of Deeps was a forgotten beast.  It was the only one of its kind.  A gigantic eyeless koala.  It has a spiral shell and it undulates rhythmically.  Its emerald hair is short and even.  Beware its deadly spittle!  Ugosh was associated with suicide and caverns.  In a time before time, Ugosh began wandering the depths of the world.```,
```Ofo Luralshoneth Quazi Baktur, "Ofo Witchhells the Poison of Jackals"
 Ofo Witchhells the Poison of Jackals was a forgotten beast.  It was the only one of its kind.  A gigantic one-eyed crab.  It has large mandibles and it belches and croaks.  Its chartreuse exoskeleton is waxy.  Beware its fire!  Ofo was associated with water, torture and caverns.  In a time before time, Ofo began wandering the depths of the world.```,
```Oxut, "Oxut"
 Oxut was a forgotten beast.  It was the only one of its kind.  A great swift with external ribs.  It has a pair of spindly antennae and it has a bloated body.  Its raw umber feathers are patchy.  Beware its deadly blood!  Oxut was associated with deformity and caverns.  In a time before time, Oxut began wandering the depths of the world.```,
```Efacìabímu, "The Hateful Seer"
 The Hateful Seer was a forgotten beast.  It was the only one of its kind.  A huge eyeless pterosaur.  It has a knobby shell and it is slavering.  Beware its deadly spittle!  The Hateful Seer was associated with water, nightmares and caverns.  In a time before time, The Hateful Seer began wandering the depths of the world.```,
```Uthimi, "Uthimi"
 Uthimi was a forgotten beast.  It was the only one of its kind.  A huge eyeless alligator.  It has thin wings of stretched skin and it is slavering. Its russet scales are oval-shaped and set far apart.  Beware its fire!  Uthimi was associated with water, nightmares and caverns.  In a time before time, Uthimi began wandering the depths of the world.```,
```Shoneth, "Shoneth"
 Shoneth was a forgotten beast.  It was the only one of its kind.  A huge humanoid composed of grime and filth.  It has wings and it squirms and fidgets.  Beware its deadly spittle!  Shoneth was associated with torture and caverns.  In a time before time, Shoneth began wandering the depths of the world.```,
```Gamo Tegadirlu, "Gamo the Washed Drink"
 Gamo the Washed Drink was a forgotten beast.  It was the only one of its kind.  A great dimetrodon composed of water.  It has a long, spiral horn and it squirms and fidgets.  Beware its deadly dust!  Gamo was associated with water, murder and caverns.  In a time before time, Gamo began wandering the depths of the world.```,
```Camoÿe, "Camoÿe"
 Camoÿe was a forgotten beast.  It was the only one of its kind.  A gigantic one-eyed six-legged tortoise.  It undulates rhythmically.  Beware its fire!  Camoÿe was associated with water, nightmares and caverns.  In a time before time, Camoÿe began wandering the depths of the world.```,
```Gozru Dôrkustosbûb, "Gozru Drinkhate"
 Gozru Drinkhate was a forgotten beast.  It was the only one of its kind.  A towering eyeless lobster.  It has a broad shell and it undulates rhythmically.  Its amethyst exoskeleton is leathery.  Beware its deadly blood!  Gozru was associated with water, murder and caverns.  In a time before time, Gozru began wandering the depths of the world.```,
```Totâs Enggôlod Smaspest Tomsu, "Totâs Gallsoak the Gristle of Submerging"
 Totâs Gallsoak the Gristle of Submerging was a forgotten beast.  It was the only one of its kind.  A huge humanoid composed of rock crystal.  It has a curling trunk and it undulates rhythmically.  Beware its deadly spittle!  Totâs was associated with water, deformity and caverns.  In a time before time, Totâs began wandering the depths of the world.```,
```Ustxu, "Ustxu"
 Ustxu was a forgotten beast.  It was the only one of its kind.  A huge feathered gecko.  It has a long, swinging trunk and it undulates rhythmically.  Its gray feathers are long and narrow.  Beware its deadly spittle!  Ustxu was associated with water, death and caverns.  In a time before time, Ustxu began wandering the depths of the world.```,
```Sog ûthirkes Arros, "Sog the Searing Scratch of Throwers"
 Sog the Searing Scratch of Throwers was a forgotten beast.  It was the only one of its kind.  A huge three-eyed monkey.  It has a pair of long antennae and it belches and croaks.  Its dark brown hair is long and wavy.  Beware its poisonous sting!  Sog was associated with chaos and caverns.  In a time before time, Sog began wandering the depths of the world.```,
```Eleri Cironotheva, "Eleri the Sprayed Starvation"
 Eleri the Sprayed Starvation was a forgotten beast.  It was the only one of its kind.  A great turtle with external ribs.  It has two long, hanging tails and it has a bloated body.  Its green-yellow scales are oval-shaped and overlapping.  Beware its fire!  Eleri was associated with water, nightmares and caverns.  In a time before time, Eleri began wandering the depths of the world.```,
```Abesp Sodorospun, "Abesp Deeplobsters"
 Abesp Deeplobsters was a forgotten beast.  It was the only one of its kind.  An enormous humanoid composed of amber.  It has a broad shell and it undulates rhythmically.  Beware its deadly spittle!  Abesp was associated with water, depravity and caverns.  In a time before time, Abesp began wandering the depths of the world.```,
```Amas Reksasinrus, "Amas the Sinful Poison"
 Amas the Sinful Poison was a forgotten beast.  It was the only one of its kind.  A great noseless bull.  It has two long, spiral horns and it has a bloated body.  Beware its deadly blood!  Amas was associated with torture and caverns.  In a time before time, Amas began wandering the depths of the world.```,
```Sôd Lururmim, "Sôd Hateswims"
 Sôd Hateswims was a forgotten beast.  It was the only one of its kind.  An enormous hairy scarab beetle.  It has thin wings of stretched skin and it is ravening.  Its chocolate hair is long and wavy.  Beware its poisonous gas!  Sôd was associated with water, theft and caverns.  In a time before time, Sôd began wandering the depths of the world.```,
```Enggô ûsbuzolak, "Enggô the Evil Sin"
 Enggô the Evil Sin was a forgotten beast.  It was the only one of its kind.  A towering blob composed of grime and filth.  It has wings and it has a gaunt appearance.  Beware its deadly dust!  Enggô was associated with depravity and caverns.  In a time before time, Enggô began wandering the depths of the world.```,
```Rithesa Rafethe Isa, "Rithesa the Lowness of Shafts"
 Rithesa the Lowness of Shafts was a forgotten beast.  It was the only one of its kind.  A great quadruped composed of crystal glass.  It has a short tail and it squirms and fidgets.  Beware its deadly dust!  Rithesa was associated with jealousy and caverns.  In a time before time, Rithesa began wandering the depths of the world.```,
```Nelara Rethigaretho Melirupola, "Nelara Diecaves the Murky Urns"
 Nelara Diecaves the Murky Urns was a forgotten beast.  It was the only one of its kind.  A gigantic blob composed of ash.  It has a round shell and it has a gaunt appearance.  Nelara was associated with suicide and caverns.  In a time before time, Nelara began wandering the depths of the world.```,
```Simo, "Simo"
 Simo was a forgotten beast.  It was the only one of its kind.  An enormous scaly caddisfly.  It has a spiral shell and it has a bloated body.  Its eyes glow amber.  Its cream scales are blocky and overlapping.  Beware its fire!  Simo was associated with suicide and caverns.  In a time before time, Simo began wandering the depths of the world.```,
```Ushmal, "Ushmal"
 Ushmal was a forgotten beast.  It was the only one of its kind.  A towering cuckoo with lidless eyes.  It has a spiral shell and it has a bloated body.  Its eyes glow amber.  Beware its noxious secretions!  Ushmal was associated with deformity and caverns.  In a time before time, Ushmal began wandering the depths of the world.```,
```Nunòre, "Nunòre"
 Nunòre was a forgotten beast.  It was the only one of its kind.  An enormous eyeless toad.  It has a round shell and it is slavering.  Its gray skin is waxy.  Beware its deadly blood!  Nunòre was associated with water, death and caverns.  In a time before time, Nunòre began wandering the depths of the world.```,
```Thol, "Thol"
 Thol was a forgotten beast.  It was the only one of its kind.  A gigantic humanoid composed of steam.  It has large mandibles and it belches and croaks.  Beware its hunger for warm blood!  Thol was associated with water, deformity and caverns.  In a time before time, Thol began wandering the depths of the world.```,
```Sut Thretelmarat, "Sut Fatalgalls"
 Sut Fatalgalls was a forgotten beast.  It was the only one of its kind.  A towering scaly rove beetle.  It has a long, straight horn and it squirms and fidgets.  Its gold scales are jagged and close-set.  Beware its poisonous vapors!  Sut was associated with disease and caverns.  In a time before time, Sut began wandering the depths of the world.```,
```Iquila, "Iquila"
 Iquila was a forgotten beast.  It was the only one of its kind.  A gigantic skinless lizard.  It has a long, swinging trunk and it squirms and fidgets.  Beware its webs!  Iquila was associated with water, suicide and caverns.  In a time before time, Iquila began wandering the depths of the world.```,
```Ozob, "Ozob"
 Ozob was a forgotten beast.  It was the only one of its kind.  A great quadruped composed of bronze.  It has a long, swinging trunk and it has a bloated body.  Beware its deadly dust!  Ozob was associated with water, lies and caverns.  In a time before time, Ozob began wandering the depths of the world.```,
```Ana, "Ana"
 Ana was a forgotten beast.  It was the only one of its kind.  A gigantic skinless six-legged lizard.  It squirms and fidgets.  Beware its deadly blood!  Ana was associated with water, suicide and caverns.  In a time before time, Ana began wandering the depths of the world.```,
```Osman, "Osman"
 Osman was a forgotten beast.  It was the only one of its kind.  A huge eyeless alligator.  It has three short tails and it undulates rhythmically.  Its amber scales are round and overlapping.  Beware its deadly spittle!  Osman was associated with water, disease and caverns.  In a time before time, Osman began wandering the depths of the world.```,
```Irithe, "Irithe"
 Irithe was a forgotten beast.  It was the only one of its kind.  An enormous blob composed of steam.  It has an enormous shell and it appears to be emaciated.  Irithe was associated with chaos and caverns.  In a time before time, Irithe began wandering the depths of the world.```,
```Lur, "Lur"
 Lur was a forgotten beast.  It was the only one of its kind.  A towering eyeless turkey.  It has four broad horns and it squirms and fidgets.  Its heliotrope feathers are long and narrow.  Beware its fire!  Lur was associated with theft and caverns.  In a time before time, Lur began wandering the depths of the world.```,
```Ebrå Utes Dungo, "Ebrå the Spider of Saluting"
 Ebrå the Spider of Saluting was a forgotten beast.  It was the only one of its kind.  An enormous scaly nematode.  It has thin wings of stretched skin and it is ravening.  Its fuchsia scales are oval-shaped and set far apart.  Beware its poisonous vapors!  Ebrå was associated with jealousy and caverns. In a time before time, Ebrå began wandering the depths of the world.```,
```Maga Urbed Sedast, "Maga the Doom of Moistening"
 Maga the Doom of Moistening was a forgotten beast.  It was the only one of its kind.  A gigantic blob composed of vomit.  It has a long, curly tail and it undulates rhythmically.  Beware its webs!  Maga was associated with water, murder and caverns.  In a time before time, Maga began wandering the depths of the world.```,
```Nguk, "Nguk"
 Nguk was a forgotten beast.  It was the only one of its kind.  A towering eyeless albatross.  It has a long, swinging trunk and it undulates rhythmically.  Its light brown feathers are long and broad.  Beware its webs!  Nguk was associated with water, thralldom and caverns.  In a time before time, Nguk began wandering the depths of the world.```,
```Äb, "Äb"
 Äb was a forgotten beast.  It was the only one of its kind.  An enormous three-eyed mite.  It has a long, swinging trunk and it squirms and fidgets.  Its aqua exoskeleton is leathery.  Beware its poisonous vapors!  Äb was associated with water, caverns and blight.  In a time before time, Äb began wandering the depths of the world.```,
```Kulur, "Kulur"
 Kulur was a forgotten beast.  It was the only one of its kind.  A great blob composed of water.  It has a stubby tail and it squirms and fidgets.  Beware its poisonous sting!  Kulur was associated with water, lies and caverns.  In a time before time, Kulur began wandering the depths of the world.```,
```Mathúva, "Mathúva"
 Mathúva was a forgotten beast.  It was the only one of its kind.  A towering humanoid composed of onyx.  It has a twisting, jointed trunk and it squirms and fidgets.  Beware its webs!  Mathúva was associated with water, misery and caverns.  In a time before time, Mathúva began wandering the depths of the world.```,
```Garetho, "Garetho"
 Garetho was a forgotten beast.  It was the only one of its kind.  A huge hairy crab.  It has a round shell and it appears to be emaciated.  Its sky blue hair is long and wavy.  Beware its deadly blood!  Garetho was associated with water, thralldom and caverns.  In a time before time, Garetho began wandering the depths of the world.```,
```Lirlezvesh, "The Hideous Dust"
 The Hideous Dust was a forgotten beast.  It was the only one of its kind.  A great quadruped composed of amber.  It has two broad horns and it undulates rhythmically.  Beware its webs!  The Hideous Dust was associated with disease and caverns.  In a time before time, The Hideous Dust began wandering the depths of the world.```,
```Oxut Nohusbora, "Oxut Submergemines"
 Oxut Submergemines was a forgotten beast.  It was the only one of its kind.  A huge quadruped composed of ash.  It has a short trunk and it squirms and fidgets.  Oxut was associated with water, suicide and caverns.  In a time before time, Oxut began wandering the depths of the world.```,
```Cona Cèthuthaslevina, "Cona Minedemon"
 Cona Minedemon was a forgotten beast.  It was the only one of its kind.  A great blob composed of flame.  It has three short tails and it has a bloated body.  Beware its poisonous gas!  Cona was associated with torture and caverns.  In a time before time, Cona began wandering the depths of the world.```,
```Baru, "Baru"
 Baru was a forgotten beast.  It was the only one of its kind.  A towering eyeless sauropod.  It has a knobby trunk and it squirms and fidgets.  Its light blue scales are jagged and close-set.  Beware its noxious secretions!  Baru was associated with water, nightmares and caverns.  In a time before time, Baru began wandering the depths of the world.```,
```Ozor, "Ozor"
 Ozor was a forgotten beast.  It was the only one of its kind.  A gigantic one-eyed lobster.  It has a knobby shell and it has a gaunt appearance.  Its pale taupe exoskeleton is leathery.  Beware its poisonous bite!  Ozor was associated with water, treachery and caverns.  In a time before time, Ozor began wandering the depths of the world.```,
```Neca Wothananìthari, "Neca Phlegmlustful"
 Neca Phlegmlustful was a forgotten beast.  It was the only one of its kind.  A towering noseless warthog.  It has two narrow tails and it undulates rhythmically.  Beware its deadly spittle!  Neca was associated with disease and caverns.  In a time before time, Neca began wandering the depths of the world.```,
```Omu, "Omu"
 Omu was a forgotten beast.  It was the only one of its kind.  A great eyeless tarantula.  It has a pair of fan-like antennae and it squirms and fidgets.  Its taupe gray exoskeleton is warty.  Beware its poisonous bite!  Omu was associated with thralldom and caverns.  In a time before time, Omu began wandering the depths of the world.```,
```Ushmal Kaspsethbap, "Ushmal the Red Vomit"
 Ushmal the Red Vomit was a forgotten beast.  It was the only one of its kind.  A great eyeless tarantula.  It has a round shell and it has a bloated body.  Its rose exoskeleton is leathery.  Beware its poisonous bite!  Ushmal was associated with depravity and caverns.  In a time before time, Ushmal began wandering the depths of the world.```,
```Muthrolomoth, "The Dead Tombs"
 The Dead Tombs was a forgotten beast.  It was the only one of its kind.  A towering quadruped composed of pyrolusite.  It has large mandibles and it has a bloated body.  Beware its deadly dust!  The Dead Tombs was associated with suicide and caverns.  In a time before time, The Dead Tombs began wandering the depths of the world.```,
```Led, "Led"
 Led was a forgotten beast.  It was the only one of its kind.  A gigantic pterosaur with lidless eyes.  It has a square shell and it has a gaunt appearance.  Its sea green scales are round and set far apart.  Beware its deadly blood!  Led was associated with nightmares and caverns.  In a time before time, Led began wandering the depths of the world.```,
```Rushan Sutar, "The Cavern of Fate"
 The Cavern of Fate was a forgotten beast.  It was the only one of its kind.  A great eyeless lobster.  It has two short tails and it squirms and fidgets. Its purple taupe exoskeleton is waxy.  Beware its poisonous bite!  The Cavern was associated with water, suicide and caverns.  In a time before time, The Cavern began wandering the depths of the world.```,
```Mamica, "Mamica"
 Mamica was a forgotten beast.  It was the only one of its kind.  A towering three-eyed crab.  It has large mandibles and it squirms and fidgets.  Its gray exoskeleton is sleek and smooth.  Beware its deadly blood!  Mamica was associated with water, misery and caverns.  In a time before time, Mamica began wandering the depths of the world.```,
```Thefin Usñowsethbap, "Thefin the Lurid Vomit"
 Thefin the Lurid Vomit was a forgotten beast.  It was the only one of its kind.  An enormous hairy newt.  It has a pair of knobby antennae and it is ravening.  Its cardinal hair is very curly.  Beware its noxious secretions!  Thefin was associated with water, disease and caverns.  In a time before time, Thefin began wandering the depths of the world.```,
```Otira, "Otira"
 Otira was a forgotten beast.  It was the only one of its kind.  A great humanoid composed of green zircon.  It has three long, curving horns and it undulates rhythmically.  Beware its webs!  Otira was associated with water, caverns and blight.  In a time before time, Otira began wandering the depths of the world.```,
```Gamo Gopetdonu, "Gamo Spurtedburied"
 Gamo Spurtedburied was a forgotten beast.  It was the only one of its kind.  A huge eyeless lark.  It has large mandibles and it has a bloated body.  Its red feathers are patchy.  Beware its webs!  Gamo was associated with disease and caverns.  In a time before time, Gamo began wandering the depths of the world.```,
```Ngerxung Omubomu, "Ngerxung Siltslugs"
 Ngerxung Siltslugs was a forgotten beast.  It was the only one of its kind.  A great one-eyed serpent.  It has large mandibles and it has a bloated body. Its mauve taupe scales are blocky and overlapping.  Beware its deadly spittle!  Ngerxung was associated with jealousy and caverns.  In a time before time, Ngerxung began wandering the depths of the world.```,
```Asngek, "Asngek"
 Asngek was a forgotten beast.  It was the only one of its kind.  A huge eyeless crab.  It has two short horns and it undulates rhythmically.  Its cream exoskeleton is warty.  Beware its fire!  Asngek was associated with water, deformity and caverns.  In a time before time, Asngek began wandering the depths of the world.```,
```Ustxu, "Ustxu"
 Ustxu was a forgotten beast.  It was the only one of its kind.  A towering hairy alligator.  It has a curling trunk and it has a bloated body.  Its cream hair is patchy.  Beware its webs!  Ustxu was associated with water, thralldom and caverns.  In a time before time, Ustxu began wandering the depths of the world.```,
```Smesp Odmu, "The Tumor of Gales"
 The Tumor of Gales was a forgotten beast.  It was the only one of its kind.  A great feathered firefly.  It has three stubby horns and it has a bloated body.  Its violet feathers are long and broad.  Beware its poisonous bite!  The Tumor was associated with nightmares and caverns.  In a time before time, The Tumor began wandering the depths of the world.```,
```Dunem Atacmaga Ulash, "Dunem the Hateful Plague of Deceivers"
 Dunem the Hateful Plague of Deceivers was a forgotten beast.  It was the only one of its kind.  A gigantic humanoid composed of flame.  It has wings and it squirms and fidgets.  Beware its poisonous sting!  Dunem was associated with water, theft and caverns.  In a time before time, Dunem began wandering the depths of the world.```,
```Pelese Anaÿabulifo, "Pelese the Dead Belches"
 Pelese the Dead Belches was a forgotten beast.  It was the only one of its kind.  A huge hairy stonefly.  It has a round shell and it has a bloated body.  Its eyes glow azure.  Its dark green hair is long and wavy.  Beware its poisonous bite!  Pelese was associated with disease and caverns.  In a time before time, Pelese began wandering the depths of the world.```,
```Naco Nawirinaci, "Naco Strifeclobbered"
 Naco Strifeclobbered was a forgotten beast.  It was the only one of its kind.  A towering hairy ankylosaurid.  It has a long, swinging trunk and it has a bloated body.  Its dark chestnut hair is long and straight.  Beware its webs!  Naco was associated with chaos and caverns.  In a time before time, Naco began wandering the depths of the world.```,
```Thanethathepani, "The Ungodly Spiders"
 The Ungodly Spiders was a forgotten beast.  It was the only one of its kind. A gigantic blob composed of ash.  It has three narrow tails and it undulates rhythmically.  Beware its poisonous sting!  The Ungodly Spiders was associated with water, torture and caverns.  In a time before time, The Ungodly Spiders began wandering the depths of the world.```,
```Ngokang ûsbukutsmob, "Ngokang Evilmenaces"
 Ngokang Evilmenaces was a forgotten beast.  It was the only one of its kind. A gigantic hairy cockroach.  It has a fat, bulging trunk and it squirms and fidgets.  Its eyes glow mahogany.  Its chestnut hair is unkempt.  Beware its deadly blood!  Ngokang was associated with water, torture and caverns.  In a time before time, Ngokang began wandering the depths of the world.```,
```Opeya, "Opeya"
 Opeya was a forgotten beast.  It was the only one of its kind.  A huge humanoid composed of green glass.  It has a square shell and it has a bloated body.  Beware its webs!  Opeya was associated with water, nightmares and caverns.  In a time before time, Opeya began wandering the depths of the world.```
];


// Formats:
// X
// Xx
// The Y of Z
// X the Y of Z
// Where X is a NOUN
// Where Xx is a standard NOUN WORDWORD name
// Where Y is a number of words
// Normally 1 or 2, occasionally 3. Further stats needed
// If it is 1 word, it should be a noun
// If it is 2 or 3 words, the first one should have an ADJ form
// Pick a form for the FB's name and generate the pieces as needed

// Steps to create a FB:
// 1: Give it a Name
// Pick one of the four valid naming schemes(certain name might be more common.Don't worry about that yet)
//         If the result is Xx, just use the regular naming function and give it a random language
//   2: Pick a body type
//       Choose an animal or a form at random
//       This may be dictated by desired difficulty level
//   3: Pick a quirk
//       The body form is unusual in some drastic way.Maybe it's composed of a strange material or it has more or fewer body parts than normal