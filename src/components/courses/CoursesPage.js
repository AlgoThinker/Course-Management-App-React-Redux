import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCoursera(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="Submit" value="Save" />
        {this.props.coursesyy.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  coursesyy: PropTypes.array.isRequired,
  createCoursera: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    coursesyy: state.coursesy,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCoursera: (course) => dispatch(courseActions.createCourse(course)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
