import React from 'react';


 function Child() {
return (
    <>
    <di>This is children</di>
    </>
)
}

function Parent({children}) {

  return (
    <div>
<h3>Parent Component</h3>
{children}
    </div>
  )
}
export {Parent, Child}