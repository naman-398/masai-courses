import React from 'react'

const Scholarship = (onClick) => {
  return (
    <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-300 rounded-lg shadow-lg">
    <ul class="w-fit p-2 space-y-1 text-sm">
        <li class="rounded p-2 text-sm font-medium font-inter cursor-pointer hover:bg-gray-100">
            <a href="/" onClick={onclick}>Sonu Sood Scholarship</a>
        </li>
        <li class="rounded p-2 text-sm font-medium font-inter cursor-pointer hover:bg-gray-100">
            <a href="/" onClick={onclick}>EmpowerHer Scholarship</a>
        </li>
    </ul>
</div>
  )
}

export default Scholarship