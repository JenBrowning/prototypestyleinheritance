Speaker.prototype.getBiography = function() {
    console.log(`${this.givenName} ${this.biography}`)
}
console.log()
const speaker1 = new Speaker()
speaker1.getBiography()
Speaker.prototype.markInactive = function() {
    this.isActive = false
    this.inactiveDate = new Date
}
function KeynoteSpeaker(givenName, surname, email, biography) {
    this.givenName = "Clinton"
    this.surname = "Johnson"
    this.email = "clintonjohnson@gmail.com"
    this.biography = "bio"
    this.isActive = true
    this.websites = ["clintonjohnson.com"]
    this.breakouts = ["breakouts"]
    Speaker.call(givenName, surname, email, biography)
}
const newKeynoteSpeaker = new KeynoteSpeaker()
console.log(newKeynoteSpeaker)
KeynoteSpeaker.prototype = Object.create(Speaker.prototype);
KeynoteSpeaker.prototype.constructor = KeynoteSpeaker;
function WorkshopSpeaker(givenName, surname, email, biography) {
    this.givenName = "Austin"
    this.surname = "Levine"
    this.email = "austinlevine@gmail.com"
    this.biography = "bio"
    this.isActive = true
    this.workshopTopics = ["workshopTopics"]
    Speaker.call(givenName, surname, email, biography)
}
const newWorkshopSpeaker = new WorkshopSpeaker()
console.log(newWorkshopSpeaker)
WorkshopSpeaker.prototype = Object.create(Speaker.prototype)
WorkshopSpeaker.prototype.constructor = WorkshopSpeaker;



