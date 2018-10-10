import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AboutApp from '../components/Active/Active.component';
import {setGigArray} from '../redux/actions/index.actions';



class Active extends Component {

  render () {
    const {zipCode, title, gigArray} = this.props;
    console.log('Im from the render method ');
    return (
      <AboutApp x={title} zipCode={zipCode} gigArray={gigArray} navigation={this.props.navigation}/>

    );
  }


  componentDidMount () {
    let getIt = 'The power of lexical scope';

    let data = fetch('http://localhost:8080/gig/').
      then((results) => results.json()).
        then((json) => {
          console.log(json[0]);
          console.log(typeof json);
          console.log(getIt);

          let x = Object.entries(json);
          console.log(x[1]);
          let y = x[1];
          console.log('here we go the first value ' + y[0] + ' now the second ' + y[1].title);
          x.forEach(function (element) {
            console.log(element);
          });

          console.log('jijjjhuhuhuh');
          console.log(json);
          console.log(Object.values(json));
          return json;
        });

    console.log('this shows async cuz it was written after but called before');

    fetch('https://jsonplaceholder.typicode.com/todos/1').
    then((response) => response.json()).
    then((json) => console.log(json));

  }




 }




Active.propTypes = {
  zipCode: PropTypes.string,
  title: PropTypes.string,

};

const mapStateToProps = (state) => ({
  zipCode: state.content.zipCode,
  title: state.content.title,
  gigArray: state.content.gigArray
});

const mapDispatchToProps = (dispatch) => ({
  setGigArray: (gigArray) => dispatch(setGigArray(gigArray)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Active);
