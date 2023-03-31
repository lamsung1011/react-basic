import React from "react";


class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',

    }

    handleChangtitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Điền vào hộ bố mày cái!')
            return;
        }
        console.log('>>> Check Data: ', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's Title:</label>
                <br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangtitleJob(event)} />
                <br />
                <label htmlFor="lname">Salary:</label>
                <br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangSalary(event)} />
                <br />
                <br />
                <input
                    type="submit"
                    onClick={(event) => this.handleSubmit(event)} />
            </form>)
    }
}

export default AddComponent;