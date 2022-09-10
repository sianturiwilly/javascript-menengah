// Pengenalan Object Oriented Programming
// Willi Sianturi
// Sabtu, 3 September 2022
// Full Stack JavaScript Web Developer Tingkat Menengah

// Class Student
// Attributes: name, subjects (array), score
// Method: sebutkanNama(), sebutkanSubject()

class Student {
    constructor(name,subjects,score){
        this.name = name;
        this.subjects = subjects;
        this.score = score;
    }

    sebutkanNama(){
        console.log(this.name)
    }
    sebutkanSubject(){
        console.log(this.subjects)
    }

}

// Proses Instantiation
let willi = new Student("Willi",["math","english"],90);
// console.log(willi);
willi.sebutkanNama();
willi.sebutkanSubject();