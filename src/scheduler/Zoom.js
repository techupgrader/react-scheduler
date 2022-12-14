import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group'

class Zoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: "month"
        }
    }

    change(ev) {
        console.log(ev)
        var newLevel = ev;

        this.setState({
            level: newLevel
        });

        if (this.props.onChange) {
            this.props.onChange({ level: newLevel })
        }

    }

    render() {
        return (
            <RadioGroup name="range" selectedValue={this.state.level} onChange={(ev) => this.change(ev)} className="range-label-group">
                <label className="range-label">
                    <Radio value="month" className="radio-btn" />&nbsp;
                    <p className="label-title">Month</p>
                </label>
                <label className="range-label">
                    <Radio value="week" className="radio-btn" />&nbsp;
                    <p className="label-title">Week</p>
                </label>
                <label className="range-label">
                    <Radio value="day" className="radio-btn" />&nbsp;
                    <p className="label-title">Day</p>
                </label>
            </RadioGroup>
        );
    }
}

export default Zoom;
