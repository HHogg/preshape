import React, { Component } from 'react';
import { transitionTimeFast, Appear, Base } from 'preshape';
import './Logo.css';

/* eslint-disable react/jsx-max-props-per-line */
export default class Logo extends Component {
  render() {
    return (
      <Base { ...this.props } Component="svg" className="Logo" viewBox="0 0 400 400">
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g transform="translate(0.000000, 10.000000)">
            <Appear Component="g" animation="Pop" className="Logo__group" delay={ (transitionTimeFast * 1.98) } time="base">
              <ellipse className="Logo__shape--fill Logo__shape--fill-text" cx="70.1398887" cy="269.125614" rx="70.1398887" ry="69.6589474"></ellipse>
            </Appear>
            <Appear Component="g" animation="Pop" className="Logo__group" delay={ (transitionTimeFast * 1.65) } time="base">
              <rect className="Logo__shape--fill Logo__shape--fill-accent" height="123.914894" width="123.710281" x="276.289719" y="235.666667"></rect>
            </Appear>
            <Appear Component="g" animation="Pop" className="Logo__group" delay={ (transitionTimeFast * 1.32) } time="base">
              <polygon className="Logo__shape--fill Logo__shape--fill-accent" points="110 148.747609 204.922284 54 230.279362 130.484275 252 196"></polygon>
            </Appear>
            <Appear Component="g" animation="Pop" className="Logo__group" delay={ (transitionTimeFast * 0.99) } time="slow">
              <ellipse className="Logo__shape--stroke Logo__shape--stroke-accent" cx="98.8334795" cy="281.207719" rx="70.1398887" ry="69.6589474" strokeWidth="10"></ellipse>
            </Appear>
            <Appear Component="g" animation="Pop" className="Logo__group" delay={ (transitionTimeFast * 0.66) } time="slow">
              <rect className="Logo__shape--stroke Logo__shape--stroke-text" height="123.914894" strokeWidth="10" width="124.712892" x="239.515405" y="261.085106"></rect>
            </Appear>
            <Appear Component="g" animation="Pop" className="Logo__group" delay={ (transitionTimeFast * 0.33) } time="slow">
              <polygon className="Logo__shape--stroke Logo__shape--stroke-text" points="118 94.7476093 212.922284 -7.10542736e-15 238.279362 76.4842753 260 142" strokeWidth="10"></polygon>
            </Appear>
          </g>
        </g>
      </Base>
    );
  }
}
