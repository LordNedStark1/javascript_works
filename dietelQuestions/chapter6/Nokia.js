
log = console.log

class Nokia{
    userChoiceCount = 0
    choices(){
        if (this.userChoiceCount > 6) this.userChoiceCount = 0
        this.userChoiceCount++
        return this.userChoiceCount
     }
    menu(){
    log(this.menuMessage())
        log(this.userChoiceCount + "This is the switch option\n" +
            "line 14\n ")
        switch (this.choices()
            ){
            case 1: this.contact()
                break
            case 2: this.message()
                break
            case 3: return

            default: this.menu()
        }
    }
    menuMessage(){
        return "Welcome \n" +
            "1 --> contacts\n" +
            "2 --> message \n" +
            "3 --> to end\n" +
            "line 28"
    }

    inbox = []
    outbox = []
    drafts = []
    message(){
        switch (this.choices()){
            case 1:
                this.writeMessage(this.writeMessage())
                this.menu()
                break
            case 2 :
                log(this.inBox())
                this.menu()
                break
            case 3:
                log(this.outBox())
                this.menu()
                break
            case 4:
                this.saveToDraft(this.writeMessage())
                this.menu()
                break
            case 5:
                log(this.viewDraft())
                this.menu()
                break
            case 6: this.deleteMessage()
                break
            default: this.message()
        }
    }

    writeMessage() {
        let messageToWrite = new Message()
        log("Line 63")
        messageToWrite.setBody("this is message " + this.userChoiceCount +
            "\nDont know how to make it vary yet.")
        messageToWrite.setDate()
        messageToWrite.setTitle("title " + this.choices())
        return messageToWrite;
    }

    inBox(){
        return this.inbox
    }

    saveToInBox(Message) {
        this.inbox.push(Message)
    }

    outBox(){
        return this.outbox
    }
    saveToOutBox(Message) {
        this.outbox.push(Message)
    }

    viewDraft(){
        return this.drafts
    }
    saveToDraft(Message) {
    this.drafts.push(Message)
    }

    deleteMessage() {
    }

        contacts = []
    contact(){
        switch (this.choices()){
            case 1:
                log(this.search("nameToSearch"))
                this.menu()
                break
            case 2 :
                this.viewAllContacts()
                this.menu()
                break
            case 3:
                this.saveContact("nameToSearch" )
                this.menu()
                break
            case 4:
                this.deleteNumber("nameToSearch")
                this.menu()
                break
            case 5:
                this.contactSize()
                this.menu()
                break
            default: this.contact()
        }
    }
    viewAllContacts() {
        return this.contacts;
    }

    contactSize() {
        return this.contacts.length
    }

    deleteNumber(nameToDelete) {
        for (const contact of this.contacts) {
            if (contact.getName() === nameToDelete){
              this.contacts.pop(contact)
              return "Delete successful!"
            }
        }
        return "Contact does not exist!"
    }

    saveContact(Contact) {
       this.contacts.push(Contact)

    }

    search(nameToSearch) {
        for (const contact of this.contacts) {
            if (contact.getName() === nameToSearch) return contact
        }
        return nameToSearch + " Doest not exists"
    }



}
class Message{
    setDate(){
        this.date = new Date()
    }
    setTitle(contactName){
        this.title = contactName
    }
    setBody(body){
        this.body = body
    }
    getDate(){
        return this.date
    }
    getTitle(){
        return this.title
    }
    getBody(){
        return this.body
    }
}
class Contact{
    setName(name){
        this.name = name
    }
    setNumber(number){
        this.number = number
    }
    getNumber(){
        return this.number
    }
    getName(){
       return  this.name
    }
}
const nokia = new Nokia()
nokia.menu()
// export (Nokia)