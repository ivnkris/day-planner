const divContainer = $(".container");
const allTextArea = divContainer.children().children("textarea");

// function to print the current date into the header
const setCurrentTime = () => {
  const currentTime = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentTime);
};

// function to set the textarea colours based on the time
const setTextAreaColours = () => {
  const currentTimeString = moment().format("H");
  const currentTimeNumber = parseInt(currentTimeString);
  const setColour = (index) => {
    const thisTimeString = allTextArea[index].dataset.time;
    const thisTimeNumber = parseInt(thisTimeString);
    if (thisTimeNumber < currentTimeNumber) {
      $(allTextArea[index]).addClass("past");
    } else if (thisTimeNumber === currentTimeNumber) {
      $(allTextArea[index]).addClass("present");
    } else {
      $(allTextArea[index]).addClass("future");
    }
  };
  allTextArea.each(setColour);
};

// initialize local memory if empty and set text content for each text area if not
const initializeMemory = () => {
  const dayPlannerMemory = localStorage.getItem("dayPlanner");
  if (dayPlannerMemory === null) {
    const dayPlanner = {
      9: {
        task: "",
      },
      10: {
        task: "",
      },
      11: {
        task: "",
      },
      12: {
        task: "",
      },
      13: {
        task: "",
      },
      14: {
        task: "",
      },
      15: {
        task: "",
      },
      16: {
        task: "",
      },
      17: {
        task: "",
      },
    };
    const dayPlannerString = JSON.stringify(dayPlanner);
    localStorage.setItem("dayPlanner", dayPlannerString);
  } else {
    const dayPlanner = JSON.parse(dayPlannerMemory);
    const setContent = (index) => {
      $(allTextArea[index]).text(dayPlanner[index + 9].task);
    };
    allTextArea.each(setContent);
  }
};

// on click of the save button upload textarea content into local memory
const setTasksIntoMemory = (event) => {
  const dayPlannerMemory = localStorage.getItem("dayPlanner");
  const dayPlannerObject = JSON.parse(dayPlannerMemory);
  const target = $(event.target);
  if (target[0].localName === "button") {
    const time = target.parent().children("textarea")[0].dataset.time;
    const input = target.parent().children("textarea").val();
    dayPlannerObject[time].task = input;
  }
  if (target[0].localName === "i") {
    const time = target.parent().parent().children("textarea")[0].dataset.time;
    const input = target.parent().parent().children("textarea").val();
    dayPlannerObject[time].task = input;
  }
  const dayPlannerUpload = JSON.stringify(dayPlannerObject);
  localStorage.setItem("dayPlanner", dayPlannerUpload);
};

// event listeners to invoke setCurrentTime() and setTextAreaColours() when DOM has rendered
$(document).ready(setCurrentTime);
$(document).ready(setTextAreaColours);
$(document).ready(initializeMemory);
$(".container").on("click", setTasksIntoMemory);

// function to check the time every 10 seconds and reset textarea colours if needed
setInterval(setTextAreaColours, 10000);
