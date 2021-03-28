const setCurrentTime = () => {
  const currentTime = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentTime);
};

const setTextAreaColours = () => {
  const currentTime = moment().format("H");
  const divContainer = $(".container");
  const allTextArea = divContainer.children().children("textarea");
  const setColour = (index) => {
    const thisTime = allTextArea[index].dataset.time;
    console.log(thisTime);
    console.log(currentTime);
    console.log(index);
    if (thisTime < currentTime) {
      $(allTextArea[index]).addClass("past");
    } else if (thisTime === currentTime) {
      $(allTextArea[index]).addClass("present");
    } else if (thisTime > currentTime) {
      $(allTextArea[index]).addClass("future");
    }
  };
  allTextArea.each(setColour);
};

$(document).ready(setCurrentTime);
$(document).ready(setTextAreaColours);
