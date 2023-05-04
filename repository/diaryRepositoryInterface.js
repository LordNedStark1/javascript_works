

// interface DiaryRepositoryInterface{
//     saveDiary(diary : Diary)
//     viewDiaryById(diaryId : String)
//     viewAllDiary()
//     deleteDiary(diaryId : String)
// }


class Diary{
    __userName = ""
     __userId = ""
     __diaryId = ""
     _dateCreated = ""
     _listOfEntries = []


    get_userName() {
        return this.__userName;
    }

    set_userName(value) {
        this.__userName = value;
    }

    get_diaryId() {
        return this.__diaryId;
    }

    set_diaryId(value) {
        this.__diaryId = value;
    }

    get dateCreated() {
        return this._dateCreated;
    }

    set dateCreated(value) {
        this._dateCreated = value;
    }

}

class DiaryRepositoryImpl {
    diaries = []
    saveDiary(diary ){
        this.diaries.push(diary)
    }
    viewDiaryById(diaryId ){
        return this.diaries[0]
        // for (const diary in this.diaries) {
        //    if (diary._diaryId === diaryId)
        //        return diary
        // }
    }
    viewAllDiary(){
        return this.diaries
    }
    deleteDiary(diaryId){

    }
}
diaryImpl = new DiaryRepositoryImpl()

diary = new Diary()
diary.set_diaryId = "1"
diary.set_userName = "ned"
diaryImpl.saveDiary(diary)
myDiary = diaryImpl.viewDiaryById(1)

console.log(myDiary)
// console.log(myDiary.get_userName())