// THIS IS THE TEMPLATE FOR THE PROJECT
// ALL CONTENT: ANY DATA, IMAGES, ETC WILL BE ADDED HERE

const abouts = []
// const contacts = {}
const events = []
const songs = []

class About {
    constructor(heading, text, background = 'black', img = null){
        this.heading = heading
        this.text = text
        this.background = background
        this.img = img
    }
}

class Contact {
    constructor(email, name){
        this.email = email
        this.name = name
    }
}

class Event {
    constructor(date, location) {
        this.date = date
        this.location = location
    }
}

class Song {
    constructor(title, img) {
        this.title = title
        this.img = img
    }
}

// add some about content
const p1 = new About("About", "my name is jake and i like to produce music", "black", "https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48")
const p2 = new About("Origin", "I come from New York city home of the chainsmokers", "black")
const p3 = new About("influencers", "I love avicii, since his death I've been producing", "black", "https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48")
abouts.push(p1)
abouts.push(p2)
abouts.push(p3)

// add contact content
const contact = new Contact("jake.music@jakesmusic.com", "Jake Shams")

// add events content
const e1 = new Event("01/24/2020", "August Hall, San Francisco, CA")
const e2 = new Event("02/06/2020", "Central ballroom, Boston, MA")
const e3 = new Event("02/16/2020", "Tom's Theatre, Miami, FL")
events.push(e1)
events.push(e2)
events.push(e3)

// add some songs
const s1 = new Song("On the Floor", "https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48")
const s2 = new Song("Break it Down", "https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48")
const s3 = new Song("If You Haven't Seen It", "https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48")
const s4 = new Song("Those Nights", "https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48")
const s5 = new Song("I'm Yours", "https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48")
const s6 = new Song("Generic Song Title", "https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48")
songs.push(s1)
songs.push(s2)
songs.push(s3)
songs.push(s4)
songs.push(s5)
songs.push(s6)

export {abouts, contact, events, songs}