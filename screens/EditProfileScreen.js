import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { Container, Content, Item, Input, Form, Label } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as profileActions from '../actions/index';

class EditProfileScreen extends Component {
  state = {
    firstName: null,
    lastName: null,
    age: -1,
    sex: null,
    height: 0,
    weight: 0,
    medicalConditions: []
  };

  /* updates user profile information */
  _updateData = () => {
    const {
      firstName,
      lastName,
      age,
      sex,
      height,
      weight,
      medicalConditions
    } = this.state;

    /* only update if changes were made to the state */
    if (firstName != null) this.props.SleepinessReducer.profileData.firstName = firstName;
    if (lastName != null) this.props.SleepinessReducer.profileData.lastName = lastName;
    if (age != -1) this.props.SleepinessReducer.profileData.age = age;
    if (sex != null) this.props.SleepinessReducer.profileData.sex = sex;
    if (height != 0) this.props.SleepinessReducer.profileData.height = height;
    if (weight != 0) this.props.SleepinessReducer.profileData.weight = weight;
    this.props.SleepinessReducer.profileData.medicalConditions = medicalConditions;
    // console.log('Update data: ', this.props.SleepinessReducer.profileData);
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>First Name</Label>
              <TextInput
                style={styles.textInput}
                placeholder="Hakuna"
                onChangeText={(text) => this.setState({ firstName: text })}
              />
            </Item>
            <Item>
              <Label>Last Name</Label>
              <TextInput
                style={styles.textInput}
                placeholder="Matata"
                onChangeText={(text) => this.setState({ lastName: text })}
              />
            </Item>
            <Item>
              <Label>Age</Label>
              <TextInput
                style={styles.textInput}
                placeholder="35"
                onChangeText={(text) => this.setState({ age: text })}
              />
            </Item>
            <Item>
              <Label>Sex</Label>
              <TextInput
                style={styles.textInput}
                placeholder="female"
                onChangeText={(text) => this.setState({ sex: text })}
              />
            </Item>
            <Item>
              <Label>Weight (pounds)</Label>
              <TextInput
                style={styles.textInput}
                placeholder="150"
                onChangeText={(text) => this.setState({ weight: text })}
              />
            </Item>
            <Item>
              <Label>Height (feet)</Label>
              <TextInput
                style={styles.textInput}
                placeholder="5"
                onChangeText={(text) => this.setState({ height: text })}
              />
            </Item>
            <Item>
              {/* TODO: Get an array of medical conditions */}
              <Label>Medical History</Label>
              <TextInput style={styles.textInput} placeholder="Diabetes" />
            </Item>
          </Form>
        </Content>
        <View style={styles.button}>
          <Button
            onPress={() => this._updateData()}
            title="Submit"
            color="#906090"
            style={{ borderRadius: 5 }}
            hardwareAccelerated
          />
        </View>
      </Container>
    );
  }
}

/* redux implementation */
function mapStateToProps(state) {
  return {
    SleepinessReducer: state.SleepinessReducer,
    profileActions: state.profileActions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(profileActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#001848'
  },
  button: {
    flexDirection: 'column',
    color: '#42bff4',
    padding: 25,
    fontSize: 35
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
