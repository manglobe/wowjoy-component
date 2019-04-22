import * as React from "react";
import { Link } from "react-router-dom";
import Components from "@src";
class List extends React.Component {
  render() {
    return (
      <ul>
        {Object.keys(Components).map((ele, index) => (
          <li key={index}>
            <Link to={`/detail/${ele}`}>{ele}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
