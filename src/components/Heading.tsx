import React from 'react'

const Heading = ({title}: {title: string}) => {
    return (
        <h1 className="md:p-10 pr-20 pb-10 text-[#C2AB80] text-[32px] lg:text-[40px] font-semibold">
            {title.toUpperCase()}
        </h1>
    )
}

export default Heading
