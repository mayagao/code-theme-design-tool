import React from 'react'

class ContrastScale extends React.Component {
  
  render() {
    const lowThreshold = 3,
      aaThreshold = 4.5,
      aaaThreshold = 7,
      width = 200,
      radius = 8,
      lineheight = 5;
    const zeroColor = '#F35F20',
      lowColor = '#F5923E',
      aaColor = '#35C380',
      aaaColor = '#159A5B';
    
    let lowXPostion = width*(lowThreshold/aaaThreshold)-radius;
    let aaXPostion = width*(aaThreshold/aaaThreshold)-radius;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        <defs>
          <linearGradient id="to-low" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor:`${zeroColor}`, stopOpacity:1}} />
            <stop offset="100%" style={{ stopColor: `${lowColor}`, stopOpacity:1}} />
          </linearGradient>
           <linearGradient id="to-aa" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor:`${lowColor}`, stopOpacity:1}} />
            <stop offset="100%" style={{ stopColor: `${aaColor}`, stopOpacity:1}} />
          </linearGradient>
           <linearGradient id="to-aaa" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor:`${aaColor}`, stopOpacity:1}} />
            <stop offset="100%" style={{ stopColor: `${aaaColor}`, stopOpacity:1}} />
          </linearGradient>
        </defs>
          <rect style={{fill:'url(#to-low)'}} x={radius*2 - 2} y="26" width={lowXPostion + 4} height={lineheight}/>
          <rect style={{fill:'url(#to-aa)'}} x={lowXPostion - 2} y="26" width={aaXPostion - lowXPostion + 4} height={lineheight}/>
          <rect style={{fill:'url(#to-aaa)'}} x={aaXPostion - 2} y="26" width={width - aaXPostion + 4 } height={lineheight}/>

          <circle style={{fill:`${zeroColor}`}} cx={radius} cy={radius + 20} r={radius}/>
          <circle style={{fill:`${lowColor}`}} cx={lowXPostion} cy={radius + 20} r={radius}/>
          <circle style={{fill:`${aaColor}`}} cx={aaXPostion} cy={radius + 20} r={radius}/>
          <circle style={{fill:`${aaaColor}`}} cx={width} cy={radius + 20} r={radius}/>

          <text style={{fill:`${lowColor}`}} x={lowXPostion - 12} y={13} r={radius}>Low</text>
          <text style={{fill:`${aaColor}`}} x={aaXPostion - 10} y={13} r={radius}>AA</text>
          <text style={{fill:`${aaaColor}`}} x={width - 14} y={13} r={radius}>AAA</text>
         
          <text className='o-50' x={radius - 4} y={50} r={radius}>0</text>
          <text className='o-50' x={lowXPostion - 4} y={50} r={radius}>3</text>
          <text className='o-50' x={aaXPostion - 12} y={50} r={radius}>4.5</text>
          <text className='o-50' x={width - 4} y={50} r={radius}>7</text>


        </svg>
    )
  }
}

export default ContrastScale