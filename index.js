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

    let correctArguments = Array.isArray(dataEntries) && dataEntries != [] && typeof settings === 'object' && typeof pageIdx === 'number' && pageIdx > 0 && typeof entriesOnPage === 'number' && entriesOnPage > 0;

    if(correctArguments) {
        pagesNumber = Math.ceil(dataEntries.length/entriesOnPage);
    } else {
        console.log("Podano nieprawidłowy argument");
        return;
    }
    let conditions = correctArguments && pagesNumber >= pageIdx;
    startDataIdx = (pageIdx -1) * entriesOnPage;

    if (!conditions){
        console.log("Warunki nie zostały spełnione");
        return;
    } else if (pagesNumber == pageIdx){
        return entriesOnSelectedPage = dataEntries.slice(startDataIdx);     
    } else {  
        endDataIdx = pageIdx * entriesOnPage;
        return entriesOnSelectedPage = dataEntries.slice(startDataIdx, endDataIdx);
    } 
}

// Dla sprawdzenia działania funkcji:
paginateArray(Array.from({length: 500}, (v, k) => k +1), { actualPageIdx:9, entriesOnPage:50 });

console.log(entriesOnSelectedPage);