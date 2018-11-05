import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.nome}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            {this.props.obj.text}
          </td>
          <td>
            {this.props.obj.status}
          </td>
        </tr>
    );
  }
}

export default TableRow;