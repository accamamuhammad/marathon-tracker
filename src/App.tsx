import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentDayData, setCurrentDayData] = useState({
    activity: "",
    date: "",
    distance: "",
  });
  const [tomorrowData, setTomorrowData] = useState({
    activity: "",
    date: "",
    distance: "",
  });

  //& Pre Run Routine
  const preRunRoutine = [
    "Make DIY Drink",
    "Pre Run Prayer",
    "Choose a Route",
    "Setup Run on Strava",
  ];

  //& Post Run Routine
  const postRunRoutine = [
    "Dry Shoes",
    "Dry Clothes",
    "Take a Shower",
    "Analyze my Run",
  ];

  //& Race Data
  const raceData = [
    // Test
    {
      date: "Tuesday 30 September 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "30/9/2025",
    },
    // Week 1
    {
      date: "Wednesday 1 October 2025",
      distance: "3.0 km / cross",
      activity: "🚴🏽",
      formatted: "1/10/2025",
    },
    {
      date: "Thursday 2 October 2025",
      distance: "4.8 km",
      activity: "🏃🏽‍♂️",
      formatted: "2/10/2025",
    },
    {
      date: "Friday 3 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "03/10/2025",
    },
    {
      date: "Saturday 4 October 2025",
      distance: "30 min cross",
      activity: "🚴🏽",
      formatted: "04/10/2025",
    },
    {
      date: "Sunday 5 October 2025",
      distance: "6.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "05/10/2025",
    },

    // Week 2
    {
      date: "Monday 6 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "06/10/2025",
    },
    {
      date: "Tuesday 7 October 2025",
      distance: "4.8 km",
      activity: "🏃🏽‍♂️",
      formatted: "07/10/2025",
    },
    {
      date: "Wednesday 8 October 2025",
      distance: "3.2 km / cross",
      activity: "🚴🏽",
      formatted: "08/10/2025",
    },
    {
      date: "Thursday 9 October 2025",
      distance: "4.8 km",
      activity: "🏃🏽‍♂️",
      formatted: "09/10/2025",
    },
    {
      date: "Friday 10 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "10/10/2025",
    },
    {
      date: "Saturday 11 October 2025",
      distance: "30 min cross",
      activity: "🚴🏽",
      formatted: "11/10/2025",
    },
    {
      date: "Sunday 12 October 2025",
      distance: "6.4 km",
      activity: "🏃🏽‍♂️",
      formatted: "12/10/2025",
    },

    // Week 3
    {
      date: "Monday 13 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "13/10/2025",
    },
    {
      date: "Tuesday 14 October 2025",
      distance: "5.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "14/10/2025",
    },
    {
      date: "Wednesday 15 October 2025",
      distance: "3.2 km / cross",
      activity: "🚴🏽",
      formatted: "15/10/2025",
    },
    {
      date: "Thursday 16 October 2025",
      distance: "5.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "16/10/2025",
    },
    {
      date: "Friday 17 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "17/10/2025",
    },
    {
      date: "Saturday 18 October 2025",
      distance: "35 min cross",
      activity: "🚴🏽",
      formatted: "18/10/2025",
    },
    {
      date: "Sunday 19 October 2025",
      distance: "7.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "19/10/2025",
    },

    // Week 4
    {
      date: "Monday 20 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "20/10/2025",
    },
    {
      date: "Tuesday 21 October 2025",
      distance: "5.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "21/10/2025",
    },
    {
      date: "Wednesday 22 October 2025",
      distance: "3.2 km / cross",
      activity: "🚴🏽",
      formatted: "22/10/2025",
    },
    {
      date: "Thursday 23 October 2025",
      distance: "5.5 km",
      activity: "🏃🏽‍♂️",
      formatted: "23/10/2025",
    },
    {
      date: "Friday 24 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "24/10/2025",
    },
    {
      date: "Saturday 25 October 2025",
      distance: "35 min cross",
      activity: "🚴🏽",
      formatted: "25/10/2025",
    },
    {
      date: "Sunday 26 October 2025",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "26/10/2025",
    },

    // Week 5
    {
      date: "Monday 27 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "27/10/2025",
    },
    {
      date: "Tuesday 28 October 2025",
      distance: "5.5 km",
      activity: "🏃🏽‍♂️",
      formatted: "28/10/2025",
    },
    {
      date: "Wednesday 29 October 2025",
      distance: "3.5 km / cross",
      activity: "🚴🏽",
      formatted: "29/10/2025",
    },
    {
      date: "Thursday 30 October 2025",
      distance: "6.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "30/10/2025",
    },
    {
      date: "Friday 31 October 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "31/10/2025",
    },
    {
      date: "Saturday 1 November 2025",
      distance: "40 min cross",
      activity: "🚴🏽",
      formatted: "01/11/2025",
    },
    {
      date: "Sunday 2 November 2025",
      distance: "9.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "02/11/2025",
    },

    // Week 6
    {
      date: "Monday 3 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "03/11/2025",
    },
    {
      date: "Tuesday 4 November 2025",
      distance: "6.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "04/11/2025",
    },
    {
      date: "Wednesday 5 November 2025",
      distance: "3.5 km / cross",
      activity: "🚴🏽",
      formatted: "05/11/2025",
    },
    {
      date: "Thursday 6 November 2025",
      distance: "6.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "06/11/2025",
    },
    {
      date: "Friday 7 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "07/11/2025",
    },
    {
      date: "Saturday 8 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "08/11/2025",
    },
    {
      date: "Sunday 9 November 2025",
      distance: "5K Race",
      activity: "🏁",
      formatted: "09/11/2025",
    },

    // Week 7
    {
      date: "Monday 10 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "10/11/2025",
    },
    {
      date: "Tuesday 11 November 2025",
      distance: "6.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "11/11/2025",
    },
    {
      date: "Wednesday 12 November 2025",
      distance: "4.0 km / cross",
      activity: "🚴🏽",
      formatted: "12/11/2025",
    },
    {
      date: "Thursday 13 November 2025",
      distance: "6.5 km",
      activity: "🏃🏽‍♂️",
      formatted: "13/11/2025",
    },
    {
      date: "Friday 14 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "14/11/2025",
    },
    {
      date: "Saturday 15 November 2025",
      distance: "40 min cross",
      activity: "🚴🏽",
      formatted: "15/11/2025",
    },
    {
      date: "Sunday 16 November 2025",
      distance: "10.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "16/11/2025",
    },
    // Week 8
    {
      date: "Monday 17 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "17/11/2025",
    },
    {
      date: "Tuesday 18 November 2025",
      distance: "6.5 km",
      activity: "🏃🏽‍♂️",
      formatted: "18/11/2025",
    },
    {
      date: "Wednesday 19 November 2025",
      distance: "4.0 km / cross",
      activity: "🚴🏽",
      formatted: "19/11/2025",
    },
    {
      date: "Thursday 20 November 2025",
      distance: "7.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "20/11/2025",
    },
    {
      date: "Friday 21 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "21/11/2025",
    },
    {
      date: "Saturday 22 November 2025",
      distance: "45 min cross",
      activity: "🚴🏽",
      formatted: "22/11/2025",
    },
    {
      date: "Sunday 23 November 2025",
      distance: "11.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "23/11/2025",
    },

    // Week 9
    {
      date: "Monday 24 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "24/11/2025",
    },
    {
      date: "Tuesday 25 November 2025",
      distance: "7.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "25/11/2025",
    },
    {
      date: "Wednesday 26 November 2025",
      distance: "4.5 km / cross",
      activity: "🚴🏽",
      formatted: "26/11/2025",
    },
    {
      date: "Thursday 27 November 2025",
      distance: "7.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "27/11/2025",
    },
    {
      date: "Friday 28 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "28/11/2025",
    },
    {
      date: "Saturday 29 November 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "29/11/2025",
    },
    {
      date: "Sunday 30 November 2025",
      distance: "12.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "30/11/2025",
    },

    // Week 10
    {
      date: "Monday 1 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "01/12/2025",
    },
    {
      date: "Tuesday 2 December 2025",
      distance: "7.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "02/12/2025",
    },
    {
      date: "Wednesday 3 December 2025",
      distance: "4.8 km / cross",
      activity: "🚴🏽",
      formatted: "03/12/2025",
    },
    {
      date: "Thursday 4 December 2025",
      distance: "7.5 km",
      activity: "🏃🏽‍♂️",
      formatted: "04/12/2025",
    },
    {
      date: "Friday 5 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "05/12/2025",
    },
    {
      date: "Saturday 6 December 2025",
      distance: "45 min cross",
      activity: "🚴🏽",
      formatted: "06/12/2025",
    },
    {
      date: "Sunday 7 December 2025",
      distance: "13.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "07/12/2025",
    },

    // Week 11
    {
      date: "Monday 8 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "08/12/2025",
    },
    {
      date: "Tuesday 9 December 2025",
      distance: "7.5 km",
      activity: "🏃🏽‍♂️",
      formatted: "09/12/2025",
    },
    {
      date: "Wednesday 10 December 2025",
      distance: "5.0 km / cross",
      activity: "🚴🏽",
      formatted: "10/12/2025",
    },
    {
      date: "Thursday 11 December 2025",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "11/12/2025",
    },
    {
      date: "Friday 12 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "12/12/2025",
    },
    {
      date: "Saturday 13 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "13/12/2025",
    },
    {
      date: "Sunday 14 December 2025",
      distance: "10K Race",
      activity: "🏁",
      formatted: "14/12/2025",
    },

    // Week 12
    {
      date: "Monday 15 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "15/12/2025",
    },
    {
      date: "Tuesday 16 December 2025",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "16/12/2025",
    },
    {
      date: "Wednesday 17 December 2025",
      distance: "5.0 km / cross",
      activity: "🚴🏽",
      formatted: "17/12/2025",
    },
    {
      date: "Thursday 18 December 2025",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "18/12/2025",
    },
    {
      date: "Friday 19 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "19/12/2025",
    },
    {
      date: "Saturday 20 December 2025",
      distance: "50 min cross",
      activity: "🚴🏽",
      formatted: "20/12/2025",
    },
    {
      date: "Sunday 21 December 2025",
      distance: "14.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "21/12/2025",
    },

    // Week 13
    {
      date: "Monday 22 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "22/12/2025",
    },
    {
      date: "Tuesday 23 December 2025",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "23/12/2025",
    },
    {
      date: "Wednesday 24 December 2025",
      distance: "5.0 km / cross",
      activity: "🚴🏽",
      formatted: "24/12/2025",
    },
    {
      date: "Thursday 25 December 2025",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "25/12/2025",
    },
    {
      date: "Friday 26 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "26/12/2025",
    },
    {
      date: "Saturday 27 December 2025",
      distance: "50 min cross",
      activity: "🚴🏽",
      formatted: "27/12/2025",
    },
    {
      date: "Sunday 28 December 2025",
      distance: "15.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "28/12/2025",
    },

    // Week 14
    {
      date: "Monday 29 December 2025",
      distance: "Rest",
      activity: "😴",
      formatted: "29/12/2025",
    },
    {
      date: "Tuesday 30 December 2025",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "30/12/2025",
    },
    {
      date: "Wednesday 31 December 2025",
      distance: "5.0 km / cross",
      activity: "🚴🏽",
      formatted: "31/12/2025",
    },
    {
      date: "Thursday 1 January 2026",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "01/01/2026",
    },
    {
      date: "Friday 2 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "02/01/2026",
    },
    {
      date: "Saturday 3 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "03/01/2026",
    },
    {
      date: "Sunday 4 January 2026",
      distance: "12.0 km (cutback)",
      activity: "🏃🏽‍♂️",
      formatted: "04/01/2026",
    },

    // Week 15
    {
      date: "Monday 5 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "05/01/2026",
    },
    {
      date: "Tuesday 6 January 2026",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "06/01/2026",
    },
    {
      date: "Wednesday 7 January 2026",
      distance: "5.0 km / cross",
      activity: "🚴🏽",
      formatted: "07/01/2026",
    },
    {
      date: "Thursday 8 January 2026",
      distance: "8.5 km",
      activity: "🏃🏽‍♂️",
      formatted: "08/01/2026",
    },
    {
      date: "Friday 9 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "09/01/2026",
    },
    {
      date: "Saturday 10 January 2026",
      distance: "55 min cross",
      activity: "🚴🏽",
      formatted: "10/01/2026",
    },
    {
      date: "Sunday 11 January 2026",
      distance: "16.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "11/01/2026",
    },

    // Week 16
    {
      date: "Monday 12 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "12/01/2026",
    },
    {
      date: "Tuesday 13 January 2026",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "13/01/2026",
    },
    {
      date: "Wednesday 14 January 2026",
      distance: "5.0 km / cross",
      activity: "🚴🏽",
      formatted: "14/01/2026",
    },
    {
      date: "Thursday 15 January 2026",
      distance: "9.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "15/01/2026",
    },
    {
      date: "Friday 16 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "16/01/2026",
    },
    {
      date: "Saturday 17 January 2026",
      distance: "55 min cross",
      activity: "🚴🏽",
      formatted: "17/01/2026",
    },
    {
      date: "Sunday 18 January 2026",
      distance: "17.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "18/01/2026",
    },

    // Week 17
    {
      date: "Monday 19 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "19/01/2026",
    },
    {
      date: "Tuesday 20 January 2026",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "20/01/2026",
    },
    {
      date: "Wednesday 21 January 2026",
      distance: "5.0 km / cross",
      activity: "🚴🏽",
      formatted: "21/01/2026",
    },
    {
      date: "Thursday 22 January 2026",
      distance: "9.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "22/01/2026",
    },
    {
      date: "Friday 23 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "23/01/2026",
    },
    {
      date: "Saturday 24 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "24/01/2026",
    },
    {
      date: "Sunday 25 January 2026",
      distance: "18.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "25/01/2026",
    },

    // Week 18
    {
      date: "Monday 26 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "26/01/2026",
    },
    {
      date: "Tuesday 27 January 2026",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "27/01/2026",
    },
    {
      date: "Wednesday 28 January 2026",
      distance: "5.0 km / cross",
      activity: "🚴🏽",
      formatted: "28/01/2026",
    },
    {
      date: "Thursday 29 January 2026",
      distance: "8.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "29/01/2026",
    },
    {
      date: "Friday 30 January 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "30/01/2026",
    },
    {
      date: "Saturday 31 January 2026",
      distance: "60 min cross",
      activity: "🚴🏽",
      formatted: "31/01/2026",
    },
    {
      date: "Sunday 1 February 2026",
      distance: "19.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "01/02/2026",
    },

    // Week 19
    {
      date: "Monday 2 February 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "02/02/2026",
    },
    {
      date: "Tuesday 3 February 2026",
      distance: "6.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "03/02/2026",
    },
    {
      date: "Wednesday 4 February 2026",
      distance: "4.0 km / cross",
      activity: "🚴🏽",
      formatted: "04/02/2026",
    },
    {
      date: "Thursday 5 February 2026",
      distance: "6.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "05/02/2026",
    },
    {
      date: "Friday 6 February 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "06/02/2026",
    },
    {
      date: "Saturday 7 February 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "07/02/2026",
    },
    {
      date: "Sunday 8 February 2026",
      distance: "12.0 km (taper)",
      activity: "🏃🏽‍♂️",
      formatted: "08/02/2026",
    },

    // Week 20
    {
      date: "Monday 9 February 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "09/02/2026",
    },
    {
      date: "Tuesday 10 February 2026",
      distance: "5.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "10/02/2026",
    },
    {
      date: "Wednesday 11 February 2026",
      distance: "3.0 km / cross",
      activity: "🚴🏽",
      formatted: "11/02/2026",
    },
    {
      date: "Thursday 12 February 2026",
      distance: "4.0 km",
      activity: "🏃🏽‍♂️",
      formatted: "12/02/2026",
    },
    {
      date: "Friday 13 February 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "13/02/2026",
    },
    {
      date: "Saturday 14 February 2026",
      distance: "Rest",
      activity: "😴",
      formatted: "14/02/2026",
    },
    {
      date: "Sunday 15 February 2026",
      distance: "Half Marathon (21.1 km)",
      activity: "🏁",
      formatted: "15/02/2026",
    },
  ];

  //* Get Current Date
  const currentData = () => {
    const today = new Date();
    const formatted =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    return formatted;
  };

  //* Calculate Up Coming runs
  const tomorrowRun = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const TomorrowFormatted =
      tomorrow.getDate() +
      "/" +
      (tomorrow.getMonth() + 1) +
      "/" +
      tomorrow.getFullYear();

    return TomorrowFormatted;
  };

  //* Get current day data and match to data
  const handleCurrentDay = () => {
    raceData.forEach((item) => {
      //? Get current day run data
      if (item.formatted === currentData()) {
        setCurrentDayData(item);
      }
      //? Get next day run data
      if (item.formatted === tomorrowRun()) {
        setTomorrowData(item);
      }
    });
  };

  // //* load data
  useEffect(() => {
    handleCurrentDay();
  }, []);

  return (
    <main className="w-full h-fit pb-7 overflow-y-auto bg-neutral-100 flex gap-9 flex-col items-center justify-start">
      {/* Header */}
      <header className="w-full min-h-[320px] h-[320px] rounded-b-3xl bg-red-500 text-white flex gap-16 flex-col items-center justify-center">
        <div className="text-center mt-6 space-y-2.5">
          <h1 className="text-5xl font-bold">Todays Training</h1>
          <p className="opacity-85 text-2xl">{currentDayData.date}</p>
        </div>
        <div className="w-[88%] px-6 py-5 flex items-center justify-between bg-white rounded-3xl">
          <h1 className="text-3xl font-bold text-blue-950">
            <span>{currentDayData.distance === "Rest" ? "" : "Run"}</span>
            <span className="text-red-500">
              {currentDayData.distance}{" "}
              {currentDayData.distance === "Rest" ? "Day" : ""}
            </span>
          </h1>
          <p className="text-4xl font-bold text-blue-950">
            {currentDayData.activity}
          </p>
        </div>
      </header>
      {/* Progress Bar */}
      <section className="w-full flex flex-col px-6 space-y-2">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-blue-950 font-semibold text-2xl">
            Next Training
          </h2>
          <h2 className="text-blue-950 font-semibold opacity-80">
            {tomorrowData.distance} {tomorrowData.activity}
          </h2>
        </div>
        <div className="w-full h-1 rounded-3xl bg-red-500"></div>
      </section>
      {/* Pre Run Routine */}
      <section className="w-full flex flex-col px-6 space-y-2">
        <h2 className="text-blue-950 font-semibold text-2xl">
          Pre Run Routine
        </h2>
        <ul className="list-disc pl-5 pt-1 space-y-2 opacity-85 text-blue-950">
          {preRunRoutine.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>
      {/* Post Run Routine */}
      <section className="w-full flex flex-col px-6 space-y-2">
        <h2 className="text-blue-950 font-semibold text-2xl">
          Post Run Routine
        </h2>
        <ul className="list-disc pl-5 pt-1 space-y-2 opacity-85 text-blue-950">
          {postRunRoutine.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
