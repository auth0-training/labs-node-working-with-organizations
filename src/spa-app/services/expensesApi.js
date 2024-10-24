const expensesApi = {
  getTotals: async () => {
    try {
      return {"total":144,"count":2};
    } catch (err) {
      console.log("Error getting total", err);
    }
  },
  getReports: async () => {
    try {
      // 👇 Replace this with call to API 👇
      return [
        {
          date: new Date(),
          description: "Pizza for a Coding Dojo session.",
          value: 102,
        },
        {
          date: new Date(),
          description: "Coffee for a Coding Dojo session.",
          value: 42,
        },
      ];
      // 👆 Replace this with call to API 👆
    } catch (err) {
      console.log("Error getting reports", err);
    }
  },
};

export default expensesApi;
