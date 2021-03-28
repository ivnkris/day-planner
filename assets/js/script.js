const setCurrentTime = () => {
  const currentTime = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentTime);
};

const setTextAreaColours = () => {
  const currentTime = moment().format("H");
  const divContainer = $(".container");
  const allTextArea = divContainer.children().children("textarea");
  const setColour = () => {
    console.log($(this).data(time));
  };
  allTextArea.each(setColour);
};

$(document).ready(setCurrentTime);
$(document).ready(setTextAreaColours);
