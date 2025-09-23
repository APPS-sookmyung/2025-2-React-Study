function printClickEventLogs(logs) {
  logs.forEach((log) => {
    if (log.type === "click") {
      console.log(
        `${log.type} :: ${new Date(log.date).toLocaleString()}`
      );
    }
  });
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },

  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);
