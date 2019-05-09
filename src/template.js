// THIS IS THE TEMPLATE FOR THE PROJECT
// ALL CONTENT: ANY DATA, IMAGES, ETC WILL BE ADDED HERE

const abouts = []
const contacts = ""
const events = []
const songs = []

class About {
    constructor(background, heading, text, img = null){
        this.background = background
        this.heading = heading
        this.text = text
        this.img = img
    }
}

class Contact {
    constructor(email){
        this.email = email
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

export {abouts, contacts, events, songs}