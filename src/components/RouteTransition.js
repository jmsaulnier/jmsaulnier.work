import React, { Component } from 'react';
import TransitionGroup from 'preact-transition-group';

export default (props) => (
  <TransitionGroup>
    <props.component key={props.path} />
  </TransitionGroup>  
)