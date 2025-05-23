enum Gender {
    Male,
    Female
}

console.log(Gender.Male)
console.log(Gender.Female)

console.log(Gender[Gender.Male])
console.log(Gender[Gender.Female])

enum Weekends {
    SATURDAY = 6,
    SUNDAY = 7
}

console.log(Weekends.SATURDAY)//return 6
console.log(Weekends.SUNDAY)// return 7