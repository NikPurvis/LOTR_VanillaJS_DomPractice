console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const section = document.createElement("section");
  section.id = "middle-earth";

  // 2. use a for loop to iterate over the lands array that does the following:
  for (let i = 0; i < lands.length; i++) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)
    const landArticle = document.createElement("article");
    //   2b. gives each land article an `id` tag of the corresponding land name
    landArticle.id = lands[i];
    //   2c. includes an h1 with the name of the land inside each land article
    const landName = document.createElement("h1");
    landName.textContent = lands[i];
    //   2d. appends each land to the middle-earth section
    landArticle.appendChild(landName);
    section.appendChild(landArticle);
  }
  // 3. append the section to the body of the DOM.
  document.body.appendChild(section);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  // how can I get "the shire"? how can I append a ul to it?
  // I can use querySelector, like this:
  // const theShire = document.querySelector("#The-Shire")
  // We can also use the more specific getElementById
  const theShire = document.getElementById("The-Shire");
  // give each hobbit a class of `hobbit`
  // hint: create a 'ul' outside the loop into which to append the 'li's
  const ulHobbits = document.createElement("ul");
  ulHobbits.id = "hobbits";
  for (let i = 0; i < hobbits.length; i++) {
    const liHobbits = document.createElement("li");
    liHobbits.className = "hobbit";
    liHobbits.textContent = hobbits[i];
    ulHobbits.appendChild(liHobbits);
  }

  // hint: get 'The-Shire' by using its id
  theShire.appendChild(ulHobbits);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const oneRingDiv = document.createElement("div");
  oneRingDiv.id = "the-ring";
  // give the div a class of `'magic-imbued-jewelry'`
  oneRingDiv.className = "magic-imbued-jewelry";

  // add the ring as a child of `Frodo`
  // first we'll need to find the ul where Frodo lives
  // ** we need to make the variable again because we previously made it within a function
  const ulHobbits = document.querySelector("#hobbits");
  // next we'll need to figure out which li is Frodo
  // console.log ("are these the hobbits?", ulHobbits.children)"
  const hobbitsArray = ulHobbits.children;
  // console.log("Is this Frodo?", hobbitsArray[0])
  const frodoLi = hobbitsArray[0];
  // then we can attach the ring to our frodo li
  frodoLi.appendChild(oneRingDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
  const mordor = document.getElementById("Mordor");
  const ulBaddies = document.createElement("ul");
  ulBaddies.id = "baddies";
  for (let i = 0; i < baddies.length; i++) {
    liBaddy = document.createElement("li");
    // give each of the baddies a class of "baddy"
    liBaddy.className = "baddy";
    liBaddy.textContent = baddies[i];
    ulBaddies.appendChild(liBaddy);
  }
  // remember to append them to Mordor
  mordor.appendChild(ulBaddies);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");
  
  // create an `aside` tag
  const asideRivendell = document.createElement("aside")
  asideRivendell.id = "aside-rivendell"
  
  // put an `unordered list` of the `'buddies'` in the aside
  const rivendell = document.getElementById("Rivendell")
  const ulBuddies = document.createElement("ul")
  ulBuddies.id = "buddies"
  for (let i = 0; i < buddies.length; i++) {
    const liBuddies = document.createElement("li")
    liBuddies.class = "liBuddies"
    liBuddies.textContent = buddies[i]
    ulBuddies.appendChild(liBuddies)
    asideRivendell.appendChild(ulBuddies)
  }
  // insert your aside as a child element of `rivendell`
  rivendell.appendChild(asideRivendell)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`
  // new function, so recreate variables previously used
  const theShire = document.getElementById("The-Shire")
  const ulHobbits = document.getElementById("hobbits")
  const rivendell = document.getElementById("Rivendell")
  // remove the hobbits from the shire
  theShire.removeChild(ulHobbits)
  // and put them in rivendell
  rivendell.appendChild(ulHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  // new function, recreate variables
  const ulBuddies = document.getElementById("buddies")
  // console.log("should be the buddies:", ulBuddies)
  const buddiesArray = ulBuddies.children
  // console.log("the buddies now in array form:", buddiesArray)
  // console.log ("Aragon perhaps?", buddiesArray[3])
  buddiesArray[3].textContent = "Aragorn"
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  // recreating variables
  const rivendell = document.getElementById("Rivendell")
  const ulBuddies = document.getElementById("buddies")
  const ulHobbits = document.getElementById("hobbits")
  // all new variables!
  const asideRivendell = document.getElementById("aside-rivendell")
  const theFellowship = document.createElement("div")
  theFellowship.id = "the-fellowship"

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`

  // This is inelegant and I feel there must be a better solution
  // but I couldn't seem to get the two uls to combine into one.
  // **much later: did I have a typo?? Was this all because of a typo??
  // initial testing looks promising, but I've already spent too long on
  // this part. It's working, so I'll call it good enough for now.
  const fellowshipArr1 = ulHobbits.children
  const fellowshipArr2 = ulBuddies.children

  for (let i = 0; i < fellowshipArr1.length; i++) {
    const liFellowship = document.createElement("li")
    liFellowship.class = "liFellowship"
    liFellowship.textContent = fellowshipArr1[i].textContent
    // after each character is added make an alert that they
    // have joined your party
    alert(`${fellowshipArr1[i].textContent} joined the Fellowship!`)
    theFellowship.appendChild(liFellowship)
}
  for (let i = 0; i < fellowshipArr2.length; i++) {
    const liFellowship = document.createElement("li")
    liFellowship.class = "liFellowship"
    liFellowship.textContent = fellowshipArr2[i].textContent
    // repeating the alert for the buddies
    alert(`${fellowshipArr2[i].textContent} joined the Fellowship!`)
    theFellowship.appendChild(liFellowship)
  }
  // add The Fellowship to Rivendell
  rivendell.appendChild(theFellowship)
  // move The Ring to Frodo in The Fellowship
  theOneRing = document.getElementById("the-ring")
  const fellowshipArray = theFellowship.children
  // console.log("mr frodo?", fellowshipArray[0])
  const frodoLi = fellowshipArray[0];
  frodoLi.appendChild(theOneRing)
  // Clear elements now that everyone's in The Fellowship
  asideRivendell.remove()
  ulHobbits.remove()

  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // apply the following style to the element, make the
  // background 'white', add a grey border

  const theFellowship = document.getElementById("the-fellowship")
  fellowshipArray = theFellowship.children
  // console.log("only Gandalf shall pass", fellowshipArray[4])
  // variable to refer to Gandalf, add class in case we need to find him
  // later and the color formatting
  const liGandalf = fellowshipArray[4]
  liGandalf.textContent = "Gandalf the White"
  liGandalf.className = "wizard"
  liGandalf.style.cssText = "background-color: white;border: 4px solid grey"
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown! It's probably fine though.")
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  const theFellowship = document.getElementById("the-fellowship")
  fellowshipArray = theFellowship.children
  // console.log("sorry for your everything Boromir", fellowshipArray[8])
  fellowshipArray[8].remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move
  // them to `Mordor`

  const theFellowship = document.getElementById("the-fellowship")
  fellowshipArray = theFellowship.children
  // console.log("here's frodo", fellowshipArray[0])
  const liFrodo = fellowshipArray[0]
  // console.log("and here's sam", fellowshipArray[1])
  const liSam = fellowshipArray[1]
  // remove them from The Fellowship
  // remove 1 first because when 0 is removed, 1 becomes 0
  fellowshipArray[1].remove()
  fellowshipArray[0].remove()
  // put them in Mordor
  const walkIntoMordor = document.getElementById("Mordor")
  walkIntoMordor.appendChild(liFrodo)
  walkIntoMordor.appendChild(liSam)

  // add a div with an id of `'mount-doom'` to `Mordor`
  const mtDoom = document.createElement("div")
  mtDoom.id = "mount-doom"
  walkIntoMordor.appendChild(mtDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom

  // set up Gollum
  const gollumIsHere = document.createElement("div")
  gollumIsHere.id = "gollum"
  // recreate variables needed for the objectives
  const walkIntoMordor = document.getElementById("Mordor")
  const mtDoom = document.getElementById("mount-doom")
  const theOneRing = document.getElementById("the-ring") 
  // add Gollum to Mordor
  walkIntoMordor.appendChild(gollumIsHere)
  // take The Ring from Frodo so we can reassign it
  theOneRing.remove()
  // give The Ring to Gollumn
  gollumIsHere.appendChild(theOneRing)
  // move Gollum and The Ring to Mt Doom
  gollumIsHere.remove()
  mtDoom.appendChild(gollumIsHere)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
  
  // selecting Gollum and The Ring and deleting them
  const gollumIsHere = document.getElementById("gollum")
  const theOneRing = document.getElementById("the-ring")
  gollumIsHere.remove()
  theOneRing.remove()
  // selecting Frodo and Sam and removing them from Mordor
  const walkIntoMordor = document.getElementById("Mordor")
  const mordorArray = walkIntoMordor.children
  // console.log("who's in mordor", mordorArray[3])
  liFrodo = mordorArray[2]
  liSam = mordorArray[3]
  mordorArray[3].remove()
  mordorArray[2].remove()
  console.log("frodo", liFrodo)
  // finding Merry and Pippin in Rivendell
  const theFellowship = document.getElementById("the-fellowship")
  const fellowshipArray = theFellowship.children
  // console.log("find the hobbits:", fellowshipArray[0])
  liMerry = fellowshipArray[0]
  liPippin = fellowshipArray[1]
  fellowshipArray[1].remove()
  fellowshipArray[0].remove()
  // reuniting all the Hobbits in The Shire
  const theShire = document.getElementById("The-Shire")
  theShire.appendChild(liFrodo)
  theShire.appendChild(liSam)
  theShire.appendChild(liMerry)
  theShire.appendChild(liPippin)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
