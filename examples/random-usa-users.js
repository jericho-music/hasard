let h = require('hasard');

let given_names = ['Veronica', 'Mercedes', 'Oswaldo', 'Jaiden', 'Kasey',
'Janiya', 'Lillie', 'Ayla', 'Kenley', 'Bridget', 'Yael', 'Mike', 'Vanessa',
'Heaven', 'Devan', 'Gaven', 'Luca', 'Nola', 'Orlando', 'Lucian', 'Clare',
'Maximus', 'Blaine', 'Allisson', 'Elsa', 'Frank', 'Colten', 'Hazel', 'Taryn',
'Gerardo', 'Derek', 'Jaxon', 'Dawson', 'Alan', 'Jamie', 'Armani', 'Madalynn',
'Lacey', 'Kaydence', 'Dorian', 'Konnor', 'Karlie', 'Karlee', 'Annalise',
'Jakob', 'Abram', 'Litzy', 'Zayden', 'Ashleigh', 'Malaki', 'Eugene',
'Brittany', 'Aydin', 'Kaylyn', 'Amina', 'Antoine', 'Isla', 'Leonidas',
'Katherine', 'Landin', 'Isabelle', 'Augustus', 'Jason', 'Hadley', 'Reuben',
'Lyric', 'Felipe', 'Micaela', 'Edith', 'Richard', 'Shaylee', 'Ashton', 'Reyna',
'Caiden', 'Lorelei', 'Jamya', 'Silas', 'Bernard', 'Kael', 'Atticus', 'Lola',
'Xiomara', 'Khalil', 'Ellis', 'Walter', 'Susan', 'Campbell', 'Zachariah',
'Julissa', 'Angelo', 'Cale', 'Alexzander', 'Amirah', 'Ronnie', 'Lucy',
'Malachi', 'Eliana', 'Laney', 'Paola', 'Linda'];

let family_names = ['Rogers', 'Klein', 'Hardin', 'Garner', 'Hanson', 'Hopkins',
'Hubbard', 'Woods', 'Roy', 'Luna', 'Vazquez', 'Mccormick', 'Mills', 'Giles',
'Beltran', 'George', 'Dennis', 'Wong', 'Mcdonald', 'Aguilar', 'Mercer',
'Edwards', 'Gates', 'Gill', 'Mata', 'Landry', 'Haynes', 'Frye', 'Shea',
'Kline', 'Sims', 'Ayers', 'Jacobs', 'Stevens', 'Ferguson', 'Mcgrath', 'Miles',
'Golden', 'Kemp', 'Woodward', 'Little', 'Chandler', 'Reese', 'Sheppard',
'Escobar', 'Green', 'Howe', 'Romero', 'Morales', 'Mason', 'Walls', 'Herman',
'Howell', 'Hendrix', 'Mcbride', 'Adams', 'Jensen', 'Decker', 'Avila', 'Wise',
'Joyce', 'Mclaughlin', 'Schaefer', 'Austin', 'Weiss', 'Manning', 'Campbell',
'Baldwin', 'Palmer', 'Hester', 'Oliver', 'Valencia', 'Acevedo', 'Clarke',
'Mathis', 'Bird', 'Hale', 'Wells', 'Mccall', 'Stewart', 'Silva', 'Crane',
'Koch', 'Dunn', 'Bell', 'Lawrence', 'Melendez', 'Holmes', 'Wilkins', 'Patel',
'Mccarthy', 'Dawson', 'Gonzales', 'Esparza', 'Kaiser', 'Dixon', 'Everett',
'James', 'Galvan', 'Castaneda'];

let streets = [
" Country Lane", " Hill Street", " 9th Street", " Depot Street", " Hamilton Road",
" Oak Avenue", " Circle Drive", " Augusta Drive", " Route 1", " Oxford Road",
" Harrison Street", " Bridge Street", " Arlington Avenue", " Railroad Avenue",
" Wall Street", " Pleasant Street", " Holly Drive", " Franklin Street",
" Lexington Court", " Buckingham Drive", " Evergreen Drive", " Hillside Drive",
" Beech Street", " Walnut Street", " Brandywine Drive", " Grove Avenue",
" East Street", " 13th Street", " Columbia Street", " Durham Court", " Route 9",
" 3rd Street East", " Lantern Lane", " 12th Street East", " Edgewood Drive",
" Buttonwood Drive", " East Avenue", " South Street", " Washington Street",
" Hamilton Street", " Broad Street West", " Route 10", " State Street",
" Colonial Avenue", " Front Street", " Sheffield Drive", " Briarwood Drive",
" 2nd Avenue", " Park Place", " Taylor Street"
];

let cityState = ["Warner, NH", "East Natchitoches, PA", "Lyon, WV",
"Willow Run, IL", "Conyersville, AZ", "Mount Baker, NY", "Farmington Lake, OK",
"Martins Corner, TX", "Pickerel Narrows, MT", "Willaha, OH", "Center, MA",
"Spring City, MS", "Mittenlane, TX", "East Waterford, ME", "Coltman, WV",
"Scottsville, KS", "Hebron, AZ", "Longview, MA", "Emerson, MT",
"North Knoxville, AL", "Momford Landing, IN", "Ipswich, IA", "Storms, TX",
"Kalauao, SD", "Farwell, FL", "Brentwood Village, MT", "Wilhelm Park, MT",
"Bannister Acres, NC", "Bent Pine, VA", "Mitchell, AZ", "Social Circle, MO",
"Kreutzberg, NY", "Cimarron, WA", "Brookhaven, DC", "Montverde Junction, NJ",
"Midland City, AK", "Sacramento, ME", "Del Rey Oaks, RI", "Coal Creek, OK",
"Rabbitown, TN", "Fairland, GA", "Gaskil, DE", "Morgan Mill, OK",
"Merrimac South, AL", "Stanardsville, NH", "Two Brooks, WI", "Curriers, NM",
"Skookumchuck, VA", "Edgerton, RI", "Slater, MO",
]

let domains = ['.com', '.gov', '.edu']

// Field values
const firstName = h.reference(h.value(given_names));
const lastName = h.reference(h.value(family_names));
const domainName = h.reference(h.value(domains));
const location = h.reference(h.value(cityState));
const street = h.reference(h.value(streets));

const eMail = h.fn((a, b, c) => {
  return a + '.' + b + '@invalid' + c;
});
const preferredName = h.fn((a, b) => {
  return a + '_' + b;
})
const locality = h.fn((a) => {
  return (a.split(',')[0].trim());
})
const region = h.fn((a) => {
  return (a.split(',')[1].trim());
})

// User object
let user = h.object({
  given_name: firstName,
  family_name: lastName,
  email: eMail(firstName, lastName, domainName),
  preferred_username: preferredName(firstName, lastName),
  street: h.add(h.integer(100, 65535), street),
  locality: locality(location),
  region: region(location)
});

// Generate 10 random users and print to console
let users = user.run(10);
console.log(users);
