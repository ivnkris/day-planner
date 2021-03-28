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

const initializeMemory = () => {
  const dayPlannerMemory = localStorage.getItem("dayPlanner");
  if (dayPlannerMemory === null) {
    const dayPlanner = {
      9: {
        hour: 9,
        task: "",
      },
      10: {
        hour: 10,
        task: "",
      },
      11: {
        hour: 11,
        task: "",
      },
      12: {
        hour: 12,
        task: "",
      },
      13: {
        hour: 13,
        task: "",
      },
      14: {
        hour: 14,
        task: "",
      },
      15: {
        hour: 15,
        task: "",
      },
      16: {
        hour: 16,
        task: "",
      },
      17: {
        hour: 17,
        task: "",
      },
    };
    const dayPlannerString = JSON.stringify(dayPlanner);
    localStorage.setItem("dayPlanner", dayPlannerString);
  }
};

const setTasksIntoMemory = (event) => {
  const dayPlannerMemory = localStorage.getItem("dayPlanner");
  const dayPlannerObject = JSON.parse(dayPlannerMemory);
  const target = $(event.target);
  console.log(target);
  if (target[0].localName === "button") {
    const time = target.parent().children("textarea")[0].dataset.time;
    const input = target.parent().children("textarea").val();
    console.log("button");
    console.log(time);
    console.log(input);
  }
  if (target[0].localName === "i") {
    const time = target.parent().parent().children("textarea")[0].dataset.time;
    const input = target.parent().parent().children("textarea").val();
    console.log("favicon");
    console.log(time);
    console.log(input);
  }
};

// event listeners to invoke setCurrentTime() and setTextAreaColours() when DOM has rendered
$(document).ready(setCurrentTime);
$(document).ready(setTextAreaColours);
$(document).ready(initializeMemory);
$(".container").on("click", setTasksIntoMemory);

// function to check the time every 10 seconds and reset textarea colours if needed
setInterval(setTextAreaColours, 10000);
