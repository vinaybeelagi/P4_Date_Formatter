const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;
// Event listener for changes in date options
dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
// Case for "yyyy-mm-dd" format
case "yyyy-mm-dd":
    // Reverse the date format
    currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
    break;
    // Case for "mm-dd-yyyy-h-mm" format
    case "mm-dd-yyyy-h-mm":
        // Display date, hours, and minutes
        currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;
        // Default case: fallback to the original formatted date
        default:
            currentDateParagraph.textContent = formattedDate;
            break;
    }
});