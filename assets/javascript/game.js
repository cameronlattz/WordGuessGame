const game = function() {
    const animals = ["Aardvark", "Aardwolf", "African buffalo", "African elephant", "African leopard", "Albatross", "Alligator", "Alpaca", "American buffalo", "American robin", "Amphibian", "Anaconda", "Angelfish", "Anglerfish", "Ant", "Anteater", "Antelope", "Antlion", "Ape", "Aphid", "Arabian leopard", "Arctic Fox", "Arctic Wolf", "Armadillo", "Arrow crab", "Asp", "Baboon", "Badger", "Bald eagle", "Bali cattle", "Bandicoot", "Barnacle", "Barracuda", "Basilisk", "Bass", "Bat", "Beaked whale", "Bear", "Beaver", "Bedbug", "Bee", "Beetle", "Bird", "Bison", "Black panther", "Black widow spider", "Blackbird", "Blue bird", "Blue jay", "Blue whale", "Boa", "Boar", "Bobcat", "Bobolink", "Bonobo", "Booby", "Bovid", "Box jellyfish", "Buffalo", "Bug", "Butterfly", "Buzzard", "Camel", "Canid", "Cape buffalo", "Capybara", "Cardinal", "Caribou", "Carp", "Cat", "Caterpillar", "Catfish", "Catshark", "Cattle", "Centipede", "Cephalopod", "Chameleon", "Cheetah", "Chickadee", "Chicken", "Chimpanzee", "Chinchilla", "Chipmunk", "Cicada", "Clam", "Clownfish", "Cobra", "Cockroach", "Cod", "Condor", "Constrictor", "Coral", "Cougar", "Cow", "Coyote", "Crab", "Crane", "Crane fly", "Crawdad", "Crayfish", "Cricket", "Crocodile", "Crow", "Cuckoo", "Damselfly", "Deer", "Dingo", "Dinosaur", "Dog", "Dolphin", "Donkey", "Dormouse", "Dove", "Dragon", "Dragonfly", "Duck", "Dung beetle", "Eagle", "Earthworm", "Earwig", "Echidna", "Eel", "Egret", "Elephant", "Elephant seal", "Elk", "Emu", "English pointer", "Ermine", "Falcon", "Fancy mouse", "Fancy rat", "Ferret", "Finch", "Firefly", "Fish", "Flamingo", "Flea", "Fly", "Flyingfish", "Fowl", "Fox", "Frog", "Fruit bat", "Galliform", "Gamefowl", "Gayal", "Gazelle", "Gecko", "Gerbil", "Giant panda", "Giant squid", "Gibbon", "Gila monster", "Giraffe", "Goat", "Goldfish", "Goose", "Gopher", "Gorilla", "Grasshopper", "Great white shark", "Grizzly bear", "Ground shark", "Ground sloth", "Grouse", "Guan", "Guanaco", "Guinea pig", "Guineafowl", "Gull", "Guppy", "Haddock", "Halibut", "Hammerhead shark", "Hamster", "Hare", "Harrier", "Hawk", "Hedgehog", "Hermit crab", "Heron", "Herring", "Hippopotamus", "Hookworm", "Hornet", "Horse", "Hoverfly", "Hummingbird", "Humpback whale", "Hyena", "Iguana", "Impala", "Jackal", "Jaguar", "Jay", "Jellyfish", "Junglefowl", "Kangaroo", "Kangaroo mouse", "Kangaroo rat", "Kingfisher", "Kite", "Kiwi", "Koala", "Koi", "Komodo dragon", "Krill", "Lab rat", "Ladybug", "Lamprey", "Land snail", "Landfowl", "Lark", "Leech", "Lemming", "Lemur", "Leopard", "Leopon", "Limpet", "Lion", "Lizard", "Llama", "Lobster", "Locust", "Loon", "Louse", "Lungfish", "Lynx", "Macaw", "Mackerel", "Magpie", "Mammal", "Manatee", "Mandrill", "Manta ray", "Marlin", "Marmoset", "Marmot", "Marsupial", "Marten", "Mastodon", "Meadowlark", "Meerkat", "Mink", "Minnow", "Mite", "Mockingbird", "Mole", "Mollusk", "Mongoose", "Monitor lizard", "Monkey", "Moose", "Mosquito", "Moth", "Mountain goat", "Mouse", "Mule", "Muskox", "Narwhal", "Newt", "Nightingale", "Ocelot", "Octopus", "Opossum", "Orangutan", "Orca", "Ostrich", "Otter", "Owl", "Ox", "Panda", "Panther", "Panthera hybrid", "Parakeet", "Parrot", "Parrotfish", "Partridge", "Peacock", "Peafowl", "Pelican", "Penguin", "Perch", "Peregrine falcon", "Pheasant", "Pig", "Pigeon", "Pike", "Pilot whale", "Pinniped", "Piranha", "Planarian", "Platypus", "Polar bear", "Pony", "Porcupine", "Porpoise", "Portuguese man o' war", "Possum", "Prairie dog", "Prawn", "Praying mantis", "Primate", "Ptarmigan", "Puffin", "Puma", "Python", "Quail", "Quelea", "Quokka", "Rabbit", "Raccoon", "Rainbow trout", "Rat", "Rattlesnake", "Raven", "Ray", "Red panda", "Reindeer", "Reptile", "Rhinoceros", "Right whale", "Ringneck dove", "Roadrunner", "Rodent", "Rook", "Rooster", "Roundworm", "Saber-toothed cat", "Sailfish", "Salamander", "Salmon", "Sawfish", "Scale insect", "Scallop", "Scorpion", "Sea lion", "Sea slug", "Sea snail", "Seahorse", "Shark", "Sheep", "Shrew", "Shrimp", "Siamese fighting fish", "Silkworm", "Silverfish", "Skink", "Skunk", "Sloth", "Slug", "Smelt", "Snail", "Snake", "Snipe", "Snow leopard", "Society finch", "Sockeye salmon", "Sole", "Sparrow", "Sperm whale", "Spider", "Spider monkey", "Spoonbill", "Squid", "Squirrel", "Star-nosed mole", "Starfish", "Steelhead trout", "Stingray", "Stoat", "Stork", "Sturgeon", "Sugar glider", "Swallow", "Swan", "Swift", "Swordfish", "Swordtail", "Tahr", "Takin", "Tapir", "Tarantula", "Tarsier", "Tasmanian devil", "Termite", "Tern", "Thrush", "Tick", "Tiger", "Tiger shark", "Tiglon", "Toad", "Tortoise", "Toucan", "Trapdoor spider", "Tree frog", "Trout", "Tuna", "Turkey", "Turtle", "Tyrannosaurus", "Urial", "Vampire bat", "Vampire squid", "Vicuna", "Viper", "Vole", "Vulture", "Wallaby", "Walrus", "Warbler", "Wasp", "Water Boa", "Water buffalo", "Weasel", "Whale", "Whippet", "Whitefish", "Whooping crane", "Wildcat", "Wildebeest", "Wildfowl", "Wolf", "Wolverine", "Wombat", "Woodpecker", "Worm", "Wren", "X-ray fish", "Xerinae", "Yak", "Yellow perch", "Zebra", "Zebra finch"];
    let animal = "", underscores = "", paused = false;
    let wordDiv, winsDiv, guessesDiv, lettersDiv, messageDiv, postImg;
    let wins = 0, guesses, letters, losses = 0;
    let rightSound, wrongSound, winSound, loseSound;

    // helper functions
    const getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const getSubstringLocations = function(substring, string){
        let locations = [], i = -1;
        while ((i = string.indexOf(substring, i+1)) >= 0) {
            locations.push(i);
        }
        return locations;
      }
    const getUnderscores = function(animalName) {
        return animalName.replace(/[a-zA-Z]/g , "_");
    }
    const replaceCharacterAt = function(str, index, chr) {
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    // game functions
    const checkLetter = function(char) {
        if (letters.indexOf(char) !== -1) {
            displayMessage("You've already guessed this letter.");
        } else {
            if (animal.includes(char)) {
                messageDiv.innerHTML = "&nbsp;";
                rightSound.play();
            } else {
                displayMessage("Sorry, the word doesn't contain the letter " + char + "!");
                wrongSound.play();
                updateGuesses();
            }
            updateLetters(char);
        }
    }
    const displayMessage = function(message) {
        messageDiv.innerHTML = message;
        setTimeout(function() {
            if (!paused) {
                messageDiv.innerHTML = "&nbsp;";
            }
        }, 3000);
    }
    const getNewWord = function() {
        const random = getRandomInt(0, animals.length - 1);
        animal = animals[random].toLowerCase();
        underscores = getUnderscores(animal);
        updateWord();
    }
    const setupGame = function() {
        guesses = 6;
        letters = [];
        winsDiv.innerHTML = wins;
        guessesDiv.innerHTML = guesses;
        lettersDiv.innerHTML = letters.join(", ");
        lossesDiv.innerHTML = losses;
        messageDiv.innerHTML = "&nbsp;";
        paused = false;
        updatePost();
        getNewWord();
    }
    const updateGuesses = function() {
        guessesDiv.innerHTML = --guesses;
        updatePost();
        if (guesses === 0) {
            messageDiv.innerHTML = "Sorry, you lost! The word was: " + animal;
            loseSound.play();
            paused = true;
            lossesDiv.innerHTML = ++losses;
            setTimeout(function() {
                setupGame();
            }, 3000);
        }
    }
    const updateLetters = function(char) {
        letters.push(char);
        lettersDiv.innerHTML = letters.join(", ");
        updateUnderscores(char);
    }
    const updatePost = function() {
        postImg.src = "assets/images/post-" + (6 - guesses) + ".png";
    }
    const updateUnderscores = function(char) {
        const locations = getSubstringLocations(char, animal);
        for (let i = 0; i < locations.length; i++) {
            underscores = replaceCharacterAt(underscores, locations[i], char);
        }
        updateWord();
        if (underscores.indexOf("_") === -1) {
            updateWins();
        }
    }
    const updateWins = function() {
        paused = true;
        winsDiv.innerHTML = ++wins;
        messageDiv.innerHTML = "You won!";
        winSound.play();
        setTimeout(function() {
            setupGame();
        }, 3000);
    }
    const updateWord = function() {
        wordDiv.innerHTML = underscores.replace(/ /g, " &nbsp; ").replace(/_/g, "_ ");
    }

    // listeners
    document.onkeypress = function(evt) {
        if (!paused) {
            evt = evt || window.event;
            var charCode = evt.keyCode || evt.which;
            var char = String.fromCharCode(charCode);
            checkLetter(char);
        }
    };
    document.addEventListener('DOMContentLoaded', function() {
        wordDiv = document.getElementById("word");
        winsDiv = document.getElementById("wins");
        guessesDiv = document.getElementById("guesses");
        lettersDiv = document.getElementById("letters");
        messageDiv = document.getElementById("message");
        postImg = document.getElementById("post");
        lossesDiv = document.getElementById("losses");
        rightSound = new Audio("assets/sounds/jeopardyrightanswer.mp3");
        wrongSound = new Audio("assets/sounds/trumpwrong.mp3");
        winSound = new Audio("assets/sounds/win31.mp3");
        loseSound = new Audio("assets/sounds/the-price-is-right-losing-horn.mp3");
        setupGame();
    }, false);
}();