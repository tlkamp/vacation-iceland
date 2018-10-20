import React, { Component } from 'react';
import { InputGroup, Input, Collapse, Button } from 'reactstrap';
import './Sidebar.css';

class Sidebar extends Component {

  state = {
    showHide: 'Hide',
    collapse: false
  }

  toggleList = () => {
    this.setState((previousState) => {
      return {
        collapse: !previousState.collapse,
        showHide: !previousState.collapse ? 'Show' : 'Hide'
      }
    });
  }

  updateQuery = (query) => {
    if (this.props.onQueryChange) {
      this.props.onQueryChange(query);
    }
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Input onChange={(event) => this.updateQuery(event.target.value)} className="search-bar" placeholder="search" aria-role="search" />
          <Button size="sm" color="link" onClick={this.toggleList}>{this.state.showHide}</Button>
        </InputGroup>
        <Collapse isOpen={!this.state.collapse}>
          <ul className="location-list">
            {this.props.locations.map(location => (
              <li className="location-list-item" onClick={() => this.props.onLocationClick(location)} key={location.name}>
                {location.name}
                {location.active ? <span>&#9733;</span> : null}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    );
  }
}

export default Sidebar;