const game = {
    // display variables
    wins: 0,
    losses: 0,
    guesses: 6,
    letters: [],
    // game variables
    animal: "",
    animals: ["Aardvark", "Aardwolf", "African buffalo", "African elephant", "African leopard", "Albatross", "Alligator", "Alpaca", "American buffalo", "American robin", "Amphibian", "Anaconda", "Angelfish", "Anglerfish", "Ant", "Anteater", "Antelope", "Antlion", "Ape", "Aphid", "Arabian leopard", "Arctic Fox", "Arctic Wolf", "Armadillo", "Arrow crab", "Asp", "Baboon", "Badger", "Bald eagle", "Bali cattle", "Bandicoot", "Barnacle", "Barracuda", "Basilisk", "Bass", "Bat", "Beaked whale", "Bear", "Beaver", "Bedbug", "Bee", "Beetle", "Bird", "Bison", "Black panther", "Black widow spider", "Blackbird", "Blue bird", "Blue jay", "Blue whale", "Boa", "Boar", "Bobcat", "Bobolink", "Bonobo", "Booby", "Bovid", "Box jellyfish", "Buffalo", "Bug", "Butterfly", "Buzzard", "Camel", "Canid", "Cape buffalo", "Capybara", "Cardinal", "Caribou", "Carp", "Cat", "Caterpillar", "Catfish", "Catshark", "Cattle", "Centipede", "Cephalopod", "Chameleon", "Cheetah", "Chickadee", "Chicken", "Chimpanzee", "Chinchilla", "Chipmunk", "Cicada", "Clam", "Clownfish", "Cobra", "Cockroach", "Cod", "Condor", "Constrictor", "Coral", "Cougar", "Cow", "Coyote", "Crab", "Crane", "Crane fly", "Crawdad", "Crayfish", "Cricket", "Crocodile", "Crow", "Cuckoo", "Damselfly", "Deer", "Dingo", "Dinosaur", "Dog", "Dolphin", "Donkey", "Dormouse", "Dove", "Dragon", "Dragonfly", "Duck", "Dung beetle", "Eagle", "Earthworm", "Earwig", "Echidna", "Eel", "Egret", "Elephant", "Elephant seal", "Elk", "Emu", "English pointer", "Ermine", "Falcon", "Fancy mouse", "Fancy rat", "Ferret", "Finch", "Firefly", "Fish", "Flamingo", "Flea", "Fly", "Flyingfish", "Fowl", "Fox", "Frog", "Fruit bat", "Galliform", "Gamefowl", "Gayal", "Gazelle", "Gecko", "Gerbil", "Giant panda", "Giant squid", "Gibbon", "Gila monster", "Giraffe", "Goat", "Goldfish", "Goose", "Gopher", "Gorilla", "Grasshopper", "Great white shark", "Grizzly bear", "Ground shark", "Ground sloth", "Grouse", "Guan", "Guanaco", "Guinea pig", "Guineafowl", "Gull", "Guppy", "Haddock", "Halibut", "Hammerhead shark", "Hamster", "Hare", "Harrier", "Hawk", "Hedgehog", "Hermit crab", "Heron", "Herring", "Hippopotamus", "Hookworm", "Hornet", "Horse", "Hoverfly", "Hummingbird", "Humpback whale", "Hyena", "Iguana", "Impala", "Jackal", "Jaguar", "Jay", "Jellyfish", "Junglefowl", "Kangaroo", "Kangaroo mouse", "Kangaroo rat", "Kingfisher", "Kite", "Kiwi", "Koala", "Koi", "Komodo dragon", "Krill", "Lab rat", "Ladybug", "Lamprey", "Land snail", "Landfowl", "Lark", "Leech", "Lemming", "Lemur", "Leopard", "Leopon", "Limpet", "Lion", "Lizard", "Llama", "Lobster", "Locust", "Loon", "Louse", "Lungfish", "Lynx", "Macaw", "Mackerel", "Magpie", "Mammal", "Manatee", "Mandrill", "Manta ray", "Marlin", "Marmoset", "Marmot", "Marsupial", "Marten", "Mastodon", "Meadowlark", "Meerkat", "Mink", "Minnow", "Mite", "Mockingbird", "Mole", "Mollusk", "Mongoose", "Monitor lizard", "Monkey", "Moose", "Mosquito", "Moth", "Mountain goat", "Mouse", "Mule", "Muskox", "Narwhal", "Newt", "Nightingale", "Ocelot", "Octopus", "Opossum", "Orangutan", "Orca", "Ostrich", "Otter", "Owl", "Ox", "Panda", "Panther", "Panthera hybrid", "Parakeet", "Parrot", "Parrotfish", "Partridge", "Peacock", "Peafowl", "Pelican", "Penguin", "Perch", "Peregrine falcon", "Pheasant", "Pig", "Pigeon", "Pike", "Pilot whale", "Pinniped", "Piranha", "Planarian", "Platypus", "Polar bear", "Pony", "Porcupine", "Porpoise", "Portuguese man o' war", "Possum", "Prairie dog", "Prawn", "Praying mantis", "Primate", "Ptarmigan", "Puffin", "Puma", "Python", "Quail", "Quelea", "Quokka", "Rabbit", "Raccoon", "Rainbow trout", "Rat", "Rattlesnake", "Raven", "Ray", "Red panda", "Reindeer", "Reptile", "Rhinoceros", "Right whale", "Ringneck dove", "Roadrunner", "Rodent", "Rook", "Rooster", "Roundworm", "Saber-toothed cat", "Sailfish", "Salamander", "Salmon", "Sawfish", "Scale insect", "Scallop", "Scorpion", "Sea lion", "Sea slug", "Sea snail", "Seahorse", "Shark", "Sheep", "Shrew", "Shrimp", "Siamese fighting fish", "Silkworm", "Silverfish", "Skink", "Skunk", "Sloth", "Slug", "Smelt", "Snail", "Snake", "Snipe", "Snow leopard", "Society finch", "Sockeye salmon", "Sole", "Sparrow", "Sperm whale", "Spider", "Spider monkey", "Spoonbill", "Squid", "Squirrel", "Star-nosed mole", "Starfish", "Steelhead trout", "Stingray", "Stoat", "Stork", "Sturgeon", "Sugar glider", "Swallow", "Swan", "Swift", "Swordfish", "Swordtail", "Tahr", "Takin", "Tapir", "Tarantula", "Tarsier", "Tasmanian devil", "Termite", "Tern", "Thrush", "Tick", "Tiger", "Tiger shark", "Tiglon", "Toad", "Tortoise", "Toucan", "Trapdoor spider", "Tree frog", "Trout", "Tuna", "Turkey", "Turtle", "Tyrannosaurus", "Urial", "Vampire bat", "Vampire squid", "Vicuna", "Viper", "Vole", "Vulture", "Wallaby", "Walrus", "Warbler", "Wasp", "Water Boa", "Water buffalo", "Weasel", "Whale", "Whippet", "Whitefish", "Whooping crane", "Wildcat", "Wildebeest", "Wildfowl", "Wolf", "Wolverine", "Wombat", "Woodpecker", "Worm", "Wren", "X-ray fish", "Xerinae", "Yak", "Yellow perch", "Zebra", "Zebra finch"],
    lastCleared: null,
    // cached element lookups
    wordDiv: null,
    winsDiv: null,
    guessesDiv: null,
    lettersDiv: null,
    messageDiv: null,
    postImg: null,
    rightSound: null,
    wrongSound: null,
    winSound: null,
    loseSound: null,
    // helper functions
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getSubstringLocations: function(substr, str) {
        let locations = [], i = -1;
        while ((i = str.indexOf(substr, i+1)) >= 0) {
            locations.push(i);
        }
        return locations;
    },
    replaceCharacterAt: function(str, index, char) {
        return str.substr(0,index) + char + str.substr(index+1);
    },
    replaceWithUnderscores: function(str) {
        return str.replace(/[a-zA-Z]/g , "_");
    },
    // game functions
    checkLetter: function(char) {
        if (!this.paused && /[a-zA-Z]/.test(char)) {
            if (this.letters.indexOf(char) !== -1) {
                this.displayMessage("You've already guessed this letter.");
            } else {
                if (this.animal.includes(char)) {
                    this.messageDiv.innerHTML = "&nbsp;";
                    this.rightSound.play();
                } else {
                    this.displayMessage("Sorry, the word doesn't contain the letter " + char + "!");
                    this.wrongSound.play();
                    this.updateGuesses();
                }
                this.updateLetters(char);
            }
        }
    },
    displayMessage: function(message) {
        this.messageDiv.innerHTML = message;
        this.lastCleared = Date.now();
        setTimeout(function() {
            if (!game.paused && Date.now() - game.lastCleared > 2500) {
                game.messageDiv.innerHTML = "&nbsp;";
            }
        }, 3000);
    },
    getNewWord: function() {
        const random = this.getRandomInt(0, this.animals.length - 1);
        this.animal = this.animals[random].toLowerCase();
        this.underscores = this.replaceWithUnderscores(this.animal);
        this.updateWord();
    },
    init: function() {
        this.wordDiv = document.getElementById("word");
        this.winsDiv = document.getElementById("wins");
        this.guessesDiv = document.getElementById("guesses");
        this.lettersDiv = document.getElementById("letters");
        this.messageDiv = document.getElementById("message");
        this.postImg = document.getElementById("post");
        this.lossesDiv = document.getElementById("losses");
        this.rightSound = new Audio("assets/sounds/jeopardyrightanswer.mp3");
        this.wrongSound = new Audio("assets/sounds/trumpwrong.mp3");
        this.winSound = new Audio("assets/sounds/win31.mp3");
        this.loseSound = new Audio("assets/sounds/the-price-is-right-losing-horn.mp3");
        this.setupGame();
    },
    setupGame: function() {
        this.guesses = 6;
        this.letters = [];
        this.winsDiv.innerHTML = this.wins;
        this.guessesDiv.innerHTML = this.guesses;
        this.lettersDiv.innerHTML = this.letters.join(", ");
        this.lossesDiv.innerHTML = this.losses;
        this.messageDiv.innerHTML = "&nbsp;";
        this.paused = false;
        this.updatePost();
        this.getNewWord();
    },
    updateGuesses: function() {
        this.guessesDiv.innerHTML = --this.guesses;
        this.updatePost();
        if (this.guesses === 0) {
            this.messageDiv.innerHTML = "Sorry, you lost! The word was: " + this.animal;
            this.loseSound.play();
            this.paused = true;
            this.lossesDiv.innerHTML = ++this.losses;
            setTimeout(function() {
                game.setupGame();
            }, 3000);
        }
    },
    updateLetters: function(char) {
        this.letters.push(char);
        this.lettersDiv.innerHTML = this.letters.join(", ");
        this.updateUnderscores(char);
    },
    updatePost: function() {
        this.postImg.src = "assets/images/post-" + (6 - this.guesses) + ".png";
    },
    updateUnderscores: function(char) {
        const locations = this.getSubstringLocations(char, this.animal);
        for (let i = 0; i < locations.length; i++) {
            this.underscores = this.replaceCharacterAt(this.underscores, locations[i], char);
        }
        this.updateWord();
        if (this.underscores.indexOf("_") === -1) {
            this.updateWins();
        }
    },
    updateWins: function() {
        this.paused = true;
        this.winsDiv.innerHTML = ++this.wins;
        this.messageDiv.innerHTML = "You won!";
        this.winSound.play();
        setTimeout(function() {
            game.setupGame();
        }, 3000);
    },
    updateWord: function() {
        this.wordDiv.innerHTML = this.underscores.replace(/ /g, " ").split("").join(" ");
    }
}

// listeners
document.addEventListener("keypress", function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var char = String.fromCharCode(charCode).toLowerCase();
    game.checkLetter(char);
}, false);
document.addEventListener("DOMContentLoaded", function() {
    game.init();
}, false);