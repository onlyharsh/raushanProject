import React from 'react'

export default function Header() {
  return (
    <header className="shadow-md bg-slate-200">
    <div className="flex items-center justify-between max-w-6xl p-4 mx-auto">
    <h1 className="flex-wrap text-sm font-bold sm:text-xl">
            <span style={{ color: '#ff0000' }}>My</span>
            <span className="text-slate-700">Project</span>
          </h1>
        </div>
    </header>
  )
}
