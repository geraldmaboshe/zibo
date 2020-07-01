import React, { Component } from 'react';

export default class ApartmentRow extends Component {
  render() {
    return (
      <table key={this.props.apartment.id}>
        <tr>
          <td>
            <img src="" alt="apartment" />
          </td>
        </tr>
        <tr>
          <td>{this.props.apartment.title}</td>
        </tr>
      </table>
    );
  }
}
