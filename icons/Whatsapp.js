import React from 'react'

import theme from '../lib/theme'

const Whatsapp = ({ color = 'primary' }) => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <title>Whatsapp icon</title>
    <path
      d="M12 4.864c-3.895 0-7.06 3.166-7.066 7.061a7.03 7.03 0 0 0 1.082 3.755l.166.268-.712 2.604 2.673-.702.257.155a7.042 7.042 0 0 0 3.595.986H12c3.89 0 7.141-3.166 7.141-7.06 0-1.886-.814-3.66-2.148-4.993A7.007 7.007 0 0 0 12 4.864zm4.152 10.093c-.177.498-1.023.948-1.43 1.007-.676.102-1.2.048-2.545-.53-2.127-.921-3.52-3.064-3.627-3.204-.107-.139-.868-1.151-.868-2.196 0-1.045.547-1.559.745-1.773a.773.773 0 0 1 .568-.268c.139 0 .284 0 .407.005.128.006.305-.048.477.365.176.423.6 1.467.653 1.575.054.107.091.23.016.37-.407.813-.84.781-.621 1.156.82 1.41 1.64 1.897 2.887 2.524.215.107.338.09.461-.054.123-.14.53-.621.67-.83.139-.215.284-.177.476-.108.193.07 1.238.584 1.452.691.214.108.354.161.407.247.049.102.049.53-.128 1.023zM21.429 0H2.57A2.572 2.572 0 0 0 0 2.571V21.43A2.572 2.572 0 0 0 2.571 24H21.43A2.572 2.572 0 0 0 24 21.429V2.57A2.572 2.572 0 0 0 21.429 0zm-9.434 20.421a8.488 8.488 0 0 1-4.061-1.034l-4.505 1.184 1.205-4.403a8.465 8.465 0 0 1-1.136-4.248c.006-4.683 3.814-8.491 8.497-8.491a8.44 8.44 0 0 1 6.01 2.49c1.602 1.608 2.566 3.74 2.566 6.011 0 4.683-3.894 8.491-8.576 8.491z"
      fill={theme.colors[color]}
      fillRule="nonzero"
    />
  </svg>
)

export default Whatsapp