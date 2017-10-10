import React from 'react'
import StudentList from './StudentList'
import StudentForm from './StudentsForm'

class StudentContainer extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      students: ["Eugene","Bobby", "Justin","Jil", "Suzy", "Kyle", "Lauren", "Sophie","Ben", "Jennn", "Natalie", "Marco", "Kevin", "Marlon", "Matt", "David"],
    }
  }


  addStudent = (name) => {
    this.setState({
      students: [...this.state.students, name]
    })
  }


  removeStudent = (name) => {
    this.setState({
      students: this.state.students.filter((student) => student != name)
    })
  }

  render() {
    return (
      <div>
        <marquee>{this.state.students.length} students</marquee>
        <StudentForm onAdd={this.addStudent}/>
        <StudentList onRemove={this.removeStudent} students={this.state.students}/>

      </div>
    )
  }
}

export default StudentContainer
