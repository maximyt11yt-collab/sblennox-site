'use client'

import { useState } from 'react'

interface ExpandableTextProps {
  text: string
  maxLength?: number
}

export default function ExpandableText({ text, maxLength = 200 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const shouldTruncate = text.length > maxLength
  const displayText = isExpanded || !shouldTruncate 
    ? text 
    : text.slice(0, maxLength) + '...'

  if (!shouldTruncate) {
    return <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">{text}</p>
  }

  return (
    <div>
      <p className={`text-base text-gray-700 leading-relaxed ${isExpanded ? 'whitespace-pre-line' : ''}`}>
        {displayText}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-redAccent hover:text-redAccentHover text-sm font-medium underline transition-colors"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}









