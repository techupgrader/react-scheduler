import React, { Component } from 'react';
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import Zoom from "./Zoom";

import prev_img from '../assets/images/prev@48.png'
import next_img from '../assets/images/next@48.png'

import "./scheduler.css"

class Scheduler extends Component {

  constructor(props) {
    super(props);

    this.state = {
      businessWeekends: false,
      startDate: new DayPilot.Date(),
      days: new DayPilot.Date().daysInMonth(),
      scale: "Day",
      timeHeaders: [
        { groupBy: "Month" },
        { groupBy: "Day", format: "d" },
      ],
      cellWidthSpec: "Auto",
      cellWidth: 40,
      durationBarVisible: false,
      treeEnabled: true,
      rowHeaderColumns: [
        { name: "LINE" },
      ],
      resources: [
        { name: "Production Line 1", id: "A" },
        { name: "Production Line 2", id: "B" },
        { name: "Production Line 3", id: "C" },
        { name: "Production Line 4", id: "D" },
        { name: "Production Line 5", id: "E" },
        { name: "Production Line 6", id: "F" },
        { name: "Production Line 7", id: "G" },
      ],
      events: [
        // {
        //   id: 101,
        //   text: "Reservation 101",
        //   start: "2021-06-02T00:00:00",
        //   end: "2021-06-05T00:00:00",
        //   resource: "A"
        // },
        // {
        //   id: 102,
        //   text: "Reservation 102",
        //   start: "2021-06-06T00:00:00",
        //   end: "2021-06-10T00:00:00",
        //   resource: "A"
        // },
        // {
        //   id: 103,
        //   text: "Reservation 103",
        //   start: "2021-06-03T00:00:00",
        //   end: "2021-06-10T00:00:00",
        //   resource: "C",
        //   backColor: "#6fa8dc",
        //   locked: true
        // },
        // {
        //   id: 104,
        //   text: "Reservation 104",
        //   start: "2021-06-02T00:00:00",
        //   end: "2021-06-08T00:00:00",
        //   resource: "E",
        //   backColor: "#f6b26b",
        //   plus: true
        // },
        // {
        //   id: 105,
        //   text: "Reservation 105",
        //   start: "2021-06-03T00:00:00",
        //   end: "2021-06-09T00:00:00",
        //   resource: "G",
        // },
        // {
        //   id: 106,
        //   text: "Reservation 106",
        //   start: "2021-06-02T00:00:00",
        //   end: "2021-06-07T00:00:00",
        //   resource: "B",
        // }
      ],
      zoomlabels: "month"
    };

    this.form = [
      { name: "CUSTOMER", id: "customer" },
      { name: "PO#", id: "order_id", type: "number" },
      { name: "SIZE", id: "size" },
      { name: "COLOR", id: "color" },
      { name: "QTY", id: "qty" },
      { name: "CS/RL", id: "csrl" },
      { name: "ORDERED", id: "ordered_date", dateFormat: "MMMM d, yyyy, HH:MM" },
      { name: "SHIP", id: "ship_date", dateFormat: "MMMM d, yyyy, HH:MM" },
      { name: "COMP", id: "comp_date", dateFormat: "MMMM d, yyyy, HH:MM" },
      { name: "LBS", id: "lbs" },
      { name: "CYL", id: "cyl" },
      { name: "RESIN", id: "resin" }
    ];
  }

  changeOrderId = (e) => {
    console.log(e)
  }

  zoomChange(args) {
    switch (args.level) {
      case "month":
        this.setState({
          startDate: this.state.startDate,
          days: this.state.startDate.daysInMonth(),
          scale: "Day",
          timeHeaders: [
            { groupBy: "Month" },
            { groupBy: "Day", format: "d" },
          ],
          zoomlabels: "month",
        });
        break;
      case "week":
        this.setState({
          startDate: this.state.startDate,
          days: 7,
          scale: "Day",
          timeHeaders: [
            { groupBy: "Month" },
            { groupBy: "Day", format: "d" },
          ],
          zoomlabels: "week",
        });
        break;
      case "day":
        this.setState({
          startDate: this.state.startDate,
          days: 1,
          scale: "Hour",
          timeHeaders: [
            { "groupBy": "Default" },
            { "groupBy": "Cell" }
          ],
          zoomlabels: "day",
        })
        break;
      default:
        throw new Error("Invalid zoom level");
    }
  }

  cellWidthChange(ev) {
    const checked = ev.target.checked;
    this.setState({
      cellWidthSpec: checked ? "Auto" : "Fixed"
    });
  }

  prev_range = () => {
    switch (this.state.zoomlabels) {
      case "month":
        this.setState({
          startDate: this.state.startDate.addMonths(-1),
          days: this.state.startDate.addMonths(-1).daysInMonth(),
          scale: "Day",
          timeHeaders: [
            { groupBy: "Month" },
            { groupBy: "Day", format: "d" },
          ]
        });
        break;
      case "week":
        this.setState({
          startDate: this.state.startDate.addDays(-7),
          days: 7,
          scale: "Day",
          timeHeaders: [
            { groupBy: "Month" },
            { groupBy: "Day", format: "d" },
          ]
        });
        break;
      case "day":
        this.setState({
          startDate: this.state.startDate.addDays(-1),
          days: 1,
          scale: "Hour",
          timeHeaders: [
            { "groupBy": "Default" },
            { "groupBy": "Cell" }
          ],
        });
        break;
      default:
        break;
    }
  }

  next_range = () => {
    switch (this.state.zoomlabels) {
      case "month":
        this.setState({
          startDate: this.state.startDate.addMonths(1),
          days: this.state.startDate.addMonths(1).daysInMonth(),
          scale: "Day",
          timeHeaders: [
            { groupBy: "Month" },
            { groupBy: "Day", format: "d" },
          ]
        });
        break;
      case "week":
        this.setState({
          startDate: this.state.startDate.addDays(7),
          days: 7,
          scale: "Day",
          timeHeaders: [
            { groupBy: "Month" },
            { groupBy: "Day", format: "d" },
          ]
        });
        break;
      case "day":
        this.setState({
          startDate: this.state.startDate.addDays(1),
          days: 1,
          scale: "Hour",
          timeHeaders: [
            { "groupBy": "Default" },
            { "groupBy": "Cell" }
          ],
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { ...config } = this.state;
    return (
      <div>
        <div className="toolbar">
          <Zoom onChange={args => this.zoomChange(args)} />
          <div className="prev-next">
            <div className='prev-btn'>
              {/* <button onClick={this.prev_range}>Prev</button> */}
              {/* <span>{"<"}</span> */}
              <img src={prev_img} alt="prev" onClick={this.prev_range} className="arrow-img" />
            </div>
            <div className='next-btn'>
              {/* <button onClick={this.next_range}>Next</button> */}
              <img src={next_img} alt="next" onClick={this.next_range} className="arrow-img" />
            </div>
          </div>
        </div>

        <DayPilotScheduler
          {...config}
          onEventMoved={args => {
            console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
            // this.scheduler.message("Event moved: " + args.e.data.text);
          }}
          onEventResized={args => {
            // console.log("Event resized: ", args.e.data.id, args.newStart, args.newEnd);
            // this.scheduler.message("Event resized: " + args.e.data.text);
          }}
          onTimeRangeSelected={args => {
            // DayPilot.Modal.prompt("New event name", "New Order").then(modal => {
            //   this.scheduler.clearSelection();
            //   if (!modal.result) {
            //     return;
            //   }
            //   this.scheduler.events.add({
            //     id: DayPilot.guid(),
            //     text: modal.result,
            //     start: args.start,
            //     end: args.end,
            //     resource: args.resource
            //   });
            // });
            DayPilot.Modal.form(this.form).then(modal => {
              console.log(modal.result)
              this.scheduler.clearSelection();
              if (!modal.result || !modal.result.customer) {
                return;
              }

              this.scheduler.events.add({
                id: DayPilot.guid(),
                text: modal.result.customer,
                start: args.start,
                end: args.end,
                resource: args.resource,

                customer: modal.result.customer,
                order_id: modal.result.order_id,
                size: modal.result.size,
                color: modal.result.color,
                qty: modal.result.qty,
                csrl: modal.result.csrl,
                ordered_date: modal.result.ordered_date,
                ship_date: modal.result.ship_date,
                comp_date: modal.result.comp_date,
                lbs: modal.result.lbs,
                cyl: modal.result.cyl,
                resin: modal.result.resin
              });
            });
          }}
          onBeforeEventRender={args => {
            console.log(args, "before event")
            if (!args.data.backColor) {
              args.data.backColor = "#93c47d";
            }
            args.data.borderColor = "darker";
            args.data.fontColor = "white";

            args.data.areas = [];
            if (args.data.locked) {
              args.data.areas.push(
                {
                  right: 4,
                  top: 8,
                  height: 18,
                  width: 18,
                  symbol: "icons/daypilot.svg#padlock",
                  fontColor: "white"
                }
              );
            }
            else if (args.data.plus) {
              args.data.areas.push(
                {
                  right: 4,
                  top: 8,
                  height: 18,
                  width: 18,
                  symbol: "icons/daypilot.svg#plus-4",
                  fontColor: "white"
                }
              );
            }
          }}
          ref={component => {
            this.scheduler = component && component.control;
          }}
          onEventClick={(ev) => {
            console.log(ev.e.data, "event data")

            DayPilot.Modal.form(this.form, ev.e.data).then(modal => {
              this.scheduler.clearSelection();
              if (!modal.result || !modal.result.customer) {
                return;
              }

              this.scheduler.events.update({
                id: ev.e.data.id,
                start: ev.e.data.start,
                end: ev.e.data.end,
                resource: ev.e.data.resource,
                text: modal.result.customer,

                customer: modal.result.customer,
                order_id: modal.result.order_id,
                size: modal.result.size,
                color: modal.result.color,
                qty: modal.result.qty,
                csrl: modal.result.csrl,
                ordered_date: modal.result.ordered_date,
                ship_date: modal.result.ship_date,
                comp_date: modal.result.comp_date,
                lbs: modal.result.lbs,
                cyl: modal.result.cyl,
                resin: modal.result.resin
              })
            })
          }}
          eventHeight={75}
        />
      </div>
    );
  }
}

export default Scheduler;
