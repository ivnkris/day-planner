const setCurrentTime = () => {
  const currentTime = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentTime);
};

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

$(document).ready(setCurrentTime);
$(document).ready(setTextAreaColours);
