// function to print the current date into the header
const setCurrentTime = () => {
  const currentTime = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentTime);
};

// function to set the textarea colours based on the time
const setTextAreaColours = () => {
  const currentTimeString = moment().format("H");
  const currentTimeNumber = parseInt(currentTimeString);
  const divContainer = $(".container");
  const allTextArea = divContainer.children().children("textarea");
  const setColour = (index) => {
    const thisTimeString = allTextArea[index].dataset.time;
    const thisTimeNumber = parseInt(thisTimeString);
    if (thisTimeNumber < currentTimeNumber) {
      $(allTextArea[index]).addClass("past");
    } else if (thisTimeNumber === currentTimeNumber) {
      $(allTextArea[index]).addClass("present");
    } else if (thisTimeNumber > currentTimeNumber) {
      $(allTextArea[index]).addClass("future");
    }
  };
  allTextArea.each(setColour);
};

const setTasksIntoMemory = () => {};

const getTasksFromMemory = () => {
  console.log("ready");
};

// event listeners to invoke setCurrentTime() and setTextAreaColours() when DOM has rendered
$(document).ready(setCurrentTime);
$(document).ready(setTextAreaColours);
$(document).ready(getTasksFromMemory);

// function to check the time every 10 seconds and reset textarea colours if needed
setInterval(setTextAreaColours, 10000);
