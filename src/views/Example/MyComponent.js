import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {
                id: 'Job1',
                title: 'Developer',
                salary: '500'
            },
            {
                id: 'Job2',
                title: 'Tester',
                salary: '300'
            },
            {
                id: 'Job3',
                title: 'Project Manager',
                salary: '1000'
            }
        ]
    }


    addNewJob = (job) => {
        console.log('>>> check job from parent', job)
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job)
        this.setState({
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>


        )
    }
}


export default MyComponent;