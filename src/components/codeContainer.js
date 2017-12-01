import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/runmode/runmode.js'
import { codeSnippets } from '../constants/codeSnippets.js'
import IconRefresh from '../static/icons/iconRefresh.js'

class CodeContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        key: 0,
        code : codeSnippets[1]
      }
    }
  switchThemeDark = () => {
    this.props.switchTheme('dark')
  }
  switchThemeLight = () => {
    this.props.switchTheme('light')
  } 
  updateCode = (newCode) => {
      this.setState({ code: newCode })
    }
  switchSnippet = () => {
    let numberOfSnippets = codeSnippets.length;
    this.setState({ key: ((this.state.key + 1)%numberOfSnippets) , code: codeSnippets[this.state.key] })
    console.log(this.state.key);
  }

  render() {
    const {
      theme
    } = this.props;
    const options = {
      lineNumbers: true,
      readOnly: false,
      mode: 'javascript'
    };
    return (
      <div className='relative cf'>
       <div className='mb3'>
          <a className={`${theme === 'light' ? '': 'o-50'} pointer mr3`} onClick={this.switchThemeLight}>Light</a>
          <a className={`${theme === 'dark' ? '': 'o-50'} pointer `} onClick={this.switchThemeDark}>Dark</a>
          <a 
            onClick={this.switchSnippet}
            className='fr dib link o-30 hover-black glow pointer'><span className=''>Refresh Snippet</span> <IconRefresh className='v-btm' ratio='1' />
           </a>
        </div>
        
        <CodeMirror 
          key={this.state.key}
          ref='editor' 
          onChange = {this.updateCode}
          value={this.state.code}
          options={options} />
        </div>
    )
  }
}

export default CodeContainer;