// Stwórz funkcję paginateArray
// const paginateArray = (dataEntries, settings) => {
//     // ...
//     // return entriesOnSelectedPage
// }
// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony
// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony


const paginateArray = (dataEntries, settings = { actualPageIdx:1, entriesOnPage:10 } ) => {
    let {actualPageIdx:pageIdx, entriesOnPage} = settings;
    let pagesNumber;
 
    let dataEntriesIsArray = Array.isArray(dataEntries) && dataEntries != [];
    let settingsIsObject = typeof settings === 'object';
    let pageIdxIsCorrect = isPositiveNumber(pageIdx);
    let entriesOnPageIsCorrect = isPositiveNumber(entriesOnPage);

    let correctArguments = dataEntriesIsArray && settingsIsObject && pageIdxIsCorrect && entriesOnPageIsCorrect;

    if(correctArguments) {
        pagesNumber = Math.ceil(dataEntries.length/entriesOnPage);
        startDataIdx = (pageIdx -1) * entriesOnPage;
        if(pagesNumber >= pageIdx){
            switch(pagesNumber){
                case pageIdx: return entriesOnSelectedPage = dataEntries.slice(startDataIdx); 
                default: {
                    endDataIdx = pageIdx * entriesOnPage;
                    return entriesOnSelectedPage = dataEntries.slice(startDataIdx, endDataIdx);
                }
            }
        } else {
            console.log("Warunki nie zostały spełnione");
            return;
        }
    } else {
        console.log("Podano nieprawidłowy argument");
        return;
    }
}

const isPositiveNumber = n => typeof n === 'number' && n > 0;

// Dla sprawdzenia działania funkcji:
paginateArray(Array.from({length: 500}, (v, k) => k +1), { actualPageIdx:9, entriesOnPage:50 });

console.log(entriesOnSelectedPage);