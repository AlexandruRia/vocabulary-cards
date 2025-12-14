"use client"

import { useEffect, useState } from "react"


export function HomePage() {
    
      const  [wordCount, setWordCount] = useState<number>(0)

  useEffect(() => {
    fetch('api/wordAmount').then(res => {
      res.json().then(res2 => {
        setWordCount(res2.count)
      })
    })
  },[])

return (
<main className="container">
<div className="card">
<h1 className="title">📚 Vocabulary Cards</h1>
<p className="subtitle">Total words in your vocabulary</p>
<div className="count">{wordCount}</div>
</div>


<style jsx>{`
.container {
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(135deg, #6366f1, #8b5cf6);
padding: 1rem;
}


.card {
background: #ffffff;
border-radius: 1.25rem;
padding: 3rem 4rem;
text-align: center;
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
max-width: 420px;
width: 100%;
}


.title {
font-size: 2rem;
font-weight: 700;
margin-bottom: 0.5rem;
color: #111827;
}


.subtitle {
font-size: 1rem;
color: #6b7280;
margin-bottom: 2rem;
}


.count {
font-size: 3.5rem;
font-weight: 800;
color: #4f46e5;
}


@media (max-width: 480px) {
.card {
padding: 2rem;
}


.count {
font-size: 3rem;
}
}
`}</style>
</main>
);
}
