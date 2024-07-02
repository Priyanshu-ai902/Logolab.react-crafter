import React from 'react'

function Header() {
    return (
        <div className='h-16 shadow-sm border flex justify-between items-center sticky'>
            <img className='h-20 w-20' src="https://media.licdn.com/dms/image/D4E0BAQHbSld6cP4qMA/company-logo_200_200/0/1690202427105?e=2147483647&v=beta&t=rQOmhAA7XRY4mJRaDKmxRFYMUD2eovEdtkmnG765mv4" alt="image" />
            <button className='bg-blue-400   h-10 w-20 rounded-2xl'>Download</button>
        </div>
    )
}

export default Header
