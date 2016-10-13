import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
// import DeepFinger from 'deep-finger';

const sentences = [
  'Love does not consist of gazing at each other, but in looking together in the same direction.',
  'Never regret. If it\'s good, it\'s wonderful. If it\'s bad, its experience.',
  'Vision without action is a daydream. Action without vision is a nightmare.',
  'Don\'t settle for a relationship that won\'t let you be yourself.',
  'If you change the way you look at things, the things you look at change.',
];

const getSentence = () => sentences[Math.round(Math.random() * 100) % sentences.length];

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'learning',
      sentence: getSentence(),
      // instance: new DeepFinger()
    };
  }

  componentDidMount() {
    this.refs.textarea.addEventListener('keydown', console.log.bind(console));
    this.refs.textarea.addEventListener('keyup', console.log.bind(console));
  }

  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <h1>Deep finger example</h1>
        </div>
        <div className="row center-xs">
          {['learning', 'testing'].map((value, i) => (
            <span key={i} style={{margin: 20}}>
              <label>
                <input
                  type="radio"
                  name="status"
                  value={value}
                  checked={this.state.status === value}
                  onChange={() => this.setState({status: value})}
                />
                {value}
              </label>
            </span>
          ))}
        </div>
        <div className="row">
          <div className="col-xs-6">
            <textarea
              readOnly
              style={{width: '100%'}}
              rows={5}
              value={this.state.sentence}
            />
          </div>
          <div className="col-xs-6">
            <textarea
              ref="textarea"
              style={{width: '100%'}}
              rows={5}
            />
          </div>
        </div>
      </div>
    );
  }

};
