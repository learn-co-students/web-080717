import React from 'react'
import StudentList from './StudentList'
import StudentForm from './StudentsForm'

class StudentContainer extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      //students: [{"Eugene"},"Bobby", "Justin","Jil", "Suzy", "Kyle", "Lauren", "Sophie","Ben", "Jennn", "Natalie", "Marco", "Kevin", "Marlon", "Matt", "David"],
      students: [{name: "Rachel", hometown: "Maine"}, {name: "Max", hometown: "ParkSlope"}, {name: "Johann", hometown: "Trinidad and Tobago"}, {name: "Esmery", hometown: "DR"}]

    }

    // sum = sum + 1


    // NEW sum

    //this.handleHelloWorld = this.handleHelloWorld.bind(this)
    // sum++
  }




  addStudent = (name) => {
    console.log(this)
    this.setState({
      students: [...this.state.students, {name: name}]
    })
  }


  removeStudent = (personToDelete) => {
    this.setState({
      students: this.state.students.filter((student) => student.name != personToDelete.name)
    })
  }

  handleSelectChange = (event) => {
    console.log(event.target.value)
    if (event.target.value == "A-Z") {
      console.log("Ascending")

      this.setState({
        students: this.state.students.sort((a,b) => {
          return a.name > b.name
        })
      })
    } else {
      this.setState({
        students: this.state.students.sort((a,b) => {
          return a.name < b.name
        })
      })

    }


  }

  render() {
    console.log("RENDERING")
    return (
      <div>
        <select onChange={this.handleSelectChange}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
        <marquee>{this.state.students.length} students</marquee>

        <StudentForm onAdd={this.addStudent}/>
        <StudentList onRemove={this.removeStudent} students={this.state.students}/>

      </div>
    )
  }
}

export default StudentContainer
