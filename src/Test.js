import React from 'react';

const Test = props => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name} 입니다.
      <br />
      children 값은 {props.children} 입니다.
    </div>
  );
};

export default Test;
