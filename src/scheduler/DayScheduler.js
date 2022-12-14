import React, { Component } from 'react';
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";

class Scheduler extends Component {
    render() {
        return (
            <DayPilotScheduler
                startDate={DayPilot.Date.today().firstDayOfMonth()}
                days={DayPilot.Date.today().daysInMonth()}
                scale={"Day"}
                timeHeaders={[
                    { groupBy: "Month" },
                    { groupBy: "Day", format: "d" }
                ]}
                resources={[
                    { name: "Resource A", id: "A" },
                    { name: "Resource B", id: "B" },
                    { name: "Resource C", id: "C" },
                    { name: "Resource D", id: "D" },
                    { name: "Resource E", id: "E" },
                    { name: "Resource F", id: "F" },
                    { name: "Resource G", id: "G" }
                ]}
                cellWidth={50}
                eventHeight={35}
            />
        );
    }
}

export default Scheduler;