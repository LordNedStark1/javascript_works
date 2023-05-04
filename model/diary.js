

class Diary{
    private __userName = ""
    private __userId = ""
    private __diaryId = ""
    private _dateCreated = ""
    private _listOfEntries = []


    get _userName(): string {
        return this.__userName;
    }

    set _userName(value: string) {
        this.__userName = value;
    }

    get _userId(): string {
        return this.__userId;
    }

    set _userId(value: string) {
        this.__userId = value;
    }

    get _diaryId(): string {
        return this.__diaryId;
    }

    set _diaryId(value: string) {
        this.__diaryId = value;
    }

    get dateCreated(): string {
        return this._dateCreated;
    }

    set dateCreated(value: string) {
        this._dateCreated = value;
    }

    get listOfEntries(): [] {
        return this._listOfEntries;
    }

    set listOfEntries(value: Array) {
        this._listOfEntries = value;
    }
}
export default Diary