import React, { Component } from 'react';
import { Container, Content, Item, Input, Form, Label, Header } from 'native-base';
export default class EditProfile extends Component {
  render() {
    console.log('In EditProfile!');
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
