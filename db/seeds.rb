# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# 
#

user1 = User.create(username: "demoUser", email: "fake@gmail.com", password: "password")

user1_note1 = Note.create(title: "Favorite Motorcycles",
                          body: "1. MV Agusta Brutale 800\n2.Ducati Hypermotard\n3.KTM SuperDuke R\n4.BMW S1000RR\n5.KTM 500 EXC",
                          author_id: user1.id,
                          )

user1_note2 = Note.create(title: "The Road Less Traveled",
                          body: "Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.",
                          author_id: user1.id,
                          )

user1_note3 = Note.create(title: "Shall I Compare thee?",
                          body: "Shall I compare thee to a summer’s day? Thou art more lovely and more temperate.
Rough winds do shake the darling buds of May, And summer’s lease hath all too short a date.
Sometime too hot the eye of heaven shines, And often is his gold complexion dimmed",
                          author_id: user1.id
                          )   
                          
user1_note4 = Note.create(title: "Camping Pack List",
                          body: "-Tent\n-Sleeping bag\n-Sleeping pad\n-80L backpack\n-Camp stove\n-Fuel\n-Lighter\n-Bowl\n-Hiking Shoes\n-Puffy Jacket",
                          author_id: user1.id
                          )
                          
user1_note5 = Note.create(title: "Gift Ideas for Wife",
                          body: "Massage\nFlowers\nHomemade dinner\nWeekend in Marin\nAmazon Kindle\nSailing jacket\nDate night at Kokkari\nCocktail hour after work",
                          author_id: user1.id
                          )
user1_note6 = Note.create(title: "Kennedy's Inaugural",
                          body: "In the long history of the world, only a few generations have been granted the role of defending freedom in its hour of maximum danger. I do not shrink from this responsibility — I welcome it. I do not believe that any of us would exchange places with any other people or any other generation. The energy, the faith, the devotion which we bring to this endeavour will light our country and all who serve it — and the glow from that fire can truly light the world.",
                          author_id: user1.id
                          )

user1_note7 = Note.create(title: "Gettysburg Address",
                          body: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
                          author_id: user1.id
                          )

user1_note8 = Note.create(title: "Marc Antony's Eulogy of Caesar",
                          body: "Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him. The evil that men do lives after them; The good is oft interred with their bones; So let it be with Caesar.",
                          author_id: user1.id
                          )

user1_note9 = Note.create(title: "Obama's New Hampshire Primary",
                          body: "We have been told we cannot do this by a chorus of cynics. And they will only grow louder and more dissonant in the weeks and months to come.\n
We've been asked to pause for a reality check. We've been warned against offering the people of this nation false hope. But in the unlikely story that is America, there has never been anything false about hope.",
                          author_id: user1.id
                          )

user1_note10 = Note.create(title: "Cable guy",
                          body: "555-510-1234\ndude@cablecompany.com",
                          author_id: user1.id
                          )

user1_note11 = Note.create(title: "Cat Toys",
                          body: "Fuzzy dice\nLaser Pointer\nScratch post\nYarn\nFake mouse\nPremium kitty litter",
                          author_id: user1.id
                          )

user1_note12 = Note.create(title: "Favorite Cat Names",
                          body: "Cat Sajax\nLucifurr\nFidel Catstro\nCatniss\nChairman Meow\nFlufferton\nCharles Emerson Winchester III",
                          author_id: user1.id
                          )

user1_note13 = Note.create(title: "Cat Poem",
                          body: "When the cat reaches up\none needled paw to drag down a book\nfrom your desk, then another,\nthat’s not love—that’s dominance.",
                          author_id: user1.id
                          )

user1_note14 = Note.create(title: "Motorcycle Turns",
                          body: "1.  Know your markers (brake, turn in, apax, exit)\n
2. Look through the turn, look where you are going\n
3. No matter how scary it seems, always follow 2\n
4. Trail brake into the corner\n
5. Smooth, smooth! transition at apex from break to gas\n
6. Get the bike upright after the turn\n
7. Exponential throttle on exit",
                          author_id: user1.id
                          )

user1_note15 = Note.create(title: "Chuck Norries Facts",
                          body: "Death once had a near-Chuck-Norris experience.\n
Chuck Norris can kill two stones with one bird.\n
Chuck Norris knows Victoria's secret.\n
Chuck Norris counted to infinity. Twice.\n
Chuck Norris can strangle you with a cordless phone.\n
Chuck Norris can kill your imaginary friends.\n
Chuck Norris can hear sign language.\n
Chuck Norris makes onions cry.\n
Chuck Norris tells Simon what to do.\n
Chuck Norris beat the sun in a staring contest.",
                          author_id: user1.id
                          )

user1_note16 = Note.create(title: "Toiletries",
                          body: "toothbrush\ntoothpaste\nfloss\nshaving cream\nrazor\nshower gel\nshampoo\nconditioner\ndeoderant\ncologne\nadvil\nanti-histamine",
                          author_id: user1.id
                          )

user1_note17 = Note.create(title: "Scuba Dive Trip",
                          body: "Regulator\nBCD\nWetsuit\nMask\nAnti-fog for mask\nBooties\nFins\nHood\nGloves\nKnife\nSafety sausage\nRepair tools",
                          author_id: user1.id
                          )

user1_note18 = Note.create(title: "Bad Coding Jokes",
                          body: "Q: Why was the function sad after a successful first call?
A: It didn’t get a callback.

A user interface is like a joke.  If you have to explain it, it's not that good

Q: How do you get the code for the bank vault?
A: You checkout their branch.",
                          author_id: user1.id
                          )

user1_note19 = Note.create(title: "Motorcycle Gear",
                          body: "helmet\njacket\ngloves\nleather pants\nboots\ntinted helmet visor\npuncture kit\n12v tire inflator",
                          author_id: user1.id
                          )

user1_note20 = Note.create(title: "Journal Entry",
                          body: "Quit our jobs. Sold our home. Gonna ride the TAT. I'm Steve and I'll be riding with my wife, Amanda. We were inspired by watching Ed and Rachel do the TAT...watching their posts on YouTube...reading their blog on ADVrider. It looked like too much fun. Further investigation brought me to the Ride Reports of this fine website. Perusing through two dozen or so of those, and I think we were sold. Sounds like our kind of fun.
                            
I'm on a KTM 500 EXC. She's on a Suzuki DR200. Special thanks to the folks over at the DR200 thread for helping us build an adventure-worthy rig out of the DR200. The bike is a hoot to ride, is capable, and super simple to service. Also, thanks to all those on this website who write constructive, thoughtful, positive posts on how to do this. From tool kits to camping kit, whenever we had a question, we'd consult this website.
  
I'm writing in KTM orange. Amanda will be writing in green. Amanda, say something to the people:  Mark my words, everyone: I will be towing my joker husband with my DR200 somewhere on the trail. Just wait for that post.

The journey starts on August 21. Maybe a little late in the season for a TAT ride, but if we don't do it now, when are we going to do it, right? Our ADV experience is a little thin. But what we lack in experience we hope to make up with time (we have no deadline) and with a cultivated attitude for adventure.
  
Amanda's got an Instagram account, @ratsGoneRogue, that has pics, but I'll try to post some here, too.)",
                          author_id: user1.id
                          )

user1_note21 = Note.create(title: "",
                          body: "girl at bar\n650-338-5601\nredhead\nlikes cats",
                          author_id: user1.id
                          )

user1_note22 = Note.create(title: "Christmas Wish List",
                          body: "",
                          author_id: user1.id
                          )

user1_label1 = Label.create(name: "Packing Lists", user_id: user1.id)
user1_label2 = Label.create(name: "Speeches", user_id: user1.id)
user1_label3 = Label.create(name: "motorcycles", user_id: user1.id)
user1_label4 = Label.create(name: "Cats", user_id: user1.id)
user1_label5 = Label.create(name: "Literature", user_id: user1.id)
user1_label6 = Label.create(name: "favorites", user_id: user1.id)
user1_label7 = Label.create(name: "Planetary Travel", user_id: user1.id)

user1_assignment1 = Assignment.create(note_id: user1_note4.id, label_id: user1_label1.id)
user1_assignment2 = Assignment.create(note_id: user1_note16.id, label_id: user1_label1.id)
user1_assignment3 = Assignment.create(note_id: user1_note17.id, label_id: user1_label1.id)

user1_assignment4 = Assignment.create(note_id: user1_note6.id, label_id: user1_label2.id)
user1_assignment5 = Assignment.create(note_id: user1_note7.id, label_id: user1_label2.id)
user1_assignment6 = Assignment.create(note_id: user1_note8.id, label_id: user1_label2.id)
user1_assignment7 = Assignment.create(note_id: user1_note9.id, label_id: user1_label2.id)

user1_assignment8 = Assignment.create(note_id: user1_note1.id, label_id: user1_label3.id)
user1_assignment9 = Assignment.create(note_id: user1_note14.id, label_id: user1_label3.id)
user1_assignment10 = Assignment.create(note_id: user1_note19.id, label_id: user1_label3.id)

user1_assignment11 = Assignment.create(note_id: user1_note11.id, label_id: user1_label4.id)
user1_assignment12 = Assignment.create(note_id: user1_note12.id, label_id: user1_label4.id)
user1_assignment13 = Assignment.create(note_id: user1_note13.id, label_id: user1_label4.id)

user1_assignment14 = Assignment.create(note_id: user1_note2.id, label_id: user1_label5.id)
user1_assignment15 = Assignment.create(note_id: user1_note3.id, label_id: user1_label5.id)
user1_assignment16 = Assignment.create(note_id: user1_note8.id, label_id: user1_label5.id)

user1_assignment17 = Assignment.create(note_id: user1_note8.id, label_id: user1_label6.id)
user1_assignment18 = Assignment.create(note_id: user1_note9.id, label_id: user1_label6.id)
user1_assignment19 = Assignment.create(note_id: user1_note15.id, label_id: user1_label6.id)
user1_assignment20 = Assignment.create(note_id: user1_note12.id, label_id: user1_label6.id)

