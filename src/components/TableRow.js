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
          <td>
            <a href={'/edit/' + this.props.obj.id} class="button">Editar</a>
          </td>
          <td>
            <a href={'/delete/' + this.props.obj.id} class="button">Deletar</a>
          </td>
        </tr>
    );
  }
}

export default TableRow;