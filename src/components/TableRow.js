import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Redirect } from 'react-router';
class TableRow extends Component {
  render() {
    const json = localStorage.getItem('token');
    const logged = JSON.parse(json);
    if(!logged){
      return <Redirect to='/' />
    }else{
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
              <NavLink to={'/edit/' + this.props.obj.id} className="button" >Editar</NavLink>
            </td>
            <td>
            <NavLink to={'/delete/' + this.props.obj.id} className="button" >Deletar</NavLink>
            </td>
          </tr>
      );
    }
  }
}

export default TableRow;