import React, { Component } from 'react';

import Intro from '../../ui/components/intro/Intro.jsx';
import Border from '../../ui/components/border/Border.jsx';
import Nav from '../../ui/components/nav/Nav.jsx';

// This component - represents a single page
export const Home = () =>
  <div id="home">
    <Nav />
    <Intro />
    <Border />
  </div>
