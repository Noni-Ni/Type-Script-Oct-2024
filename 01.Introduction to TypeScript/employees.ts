function employees(arr: string[]): string {
    let result: string[] = []
    for (let index = 0; index < arr.length; index++) {
        const element: string = arr[index];
        let personalNumber: number = element.length
        result.push(`Name: ${element} -- Personal Number: ${personalNumber}`)

    }
    return result.join('\n')
}

console.log(employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]))
console.log(employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]))