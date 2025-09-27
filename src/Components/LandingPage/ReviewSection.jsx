"use client"

import { FiStar, FiEdit2 } from "react-icons/fi"
import { useState } from "react"

const ReviewSection = ({ isAdmin = false }) => {
  // This data structure makes it easy to integrate with backend later
  const [reviewsData, setReviewsData] = useState({
    title: "What Trade Professionals Are Saying",
    subtitle: "Real feedback from real users who are transforming their trade operations.",
    reviews: [
      {
        id: 1,
        rating: 5,
        text: "This platform cut our due diligence time from 2 weeks to 3 hours. The AI insights are incredibly accurate and the compliance checks have saved us from multiple red flags.",
        author: {
          name: "Sarah Chen",
          title: "VP of Operations, Pacific Trade Solutions",
          avatar: "/professional-woman-diverse.png",
        },
      },
      {
        id: 2,
        rating: 5,
        text: "The document generator alone is worth the subscription. We've streamlined error-free ICPOs and FCOs in minutes instead of hours, and our clients love the professional quality.",
        author: {
          name: "Marcus Rodriguez",
          title: "Trade Finance Director, Global Commerce Ltd",
          avatar: "/professional-man.jpg",
        },
      },
      {
        id: 3,
        rating: 5,
        text: "The freight calculator has transformed our pricing strategy. We now provide transparent CIF/FOB quotes instantly, which has improved our win rate by 40%.",
        author: {
          name: "Emily Watson",
          title: "Senior Trader, Atlantic Commodities",
          avatar: "/professional-woman-trader.jpg",
        },
      },
    ],
  })

  const [editingReview, setEditingReview] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEditClick = (review) => {
    setEditingReview(review.id)
    setEditText(review.text)
  }

  const handleSaveEdit = (reviewId) => {
    setReviewsData((prev) => ({
      ...prev,
      reviews: prev.reviews.map((review) => (review.id === reviewId ? { ...review, text: editText } : review)),
    }))
    setEditingReview(null)
    setEditText("")
  }

  const handleCancelEdit = () => {
    setEditingReview(null)
    setEditText("")
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-slate-600"}`} />
    ))
  }

  return (
    <div className="bg-slate-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{reviewsData.title}</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">{reviewsData.subtitle}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors relative group"
            >
              {/* Admin Edit Button */}
              {isAdmin && (
                <button
                  onClick={() => handleEditClick(review)}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600 p-2 rounded-md"
                >
                  <FiEdit2 className="w-4 h-4 text-slate-300" />
                </button>
              )}

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">{renderStars(review.rating)}</div>

              {/* Quote Mark */}
              <div className="text-4xl text-slate-600 mb-2 font-serif">"</div>

              {/* Review Text */}
              {editingReview === review.id ? (
                <div className="mb-6">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 text-slate-200 resize-none"
                    rows={4}
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleSaveEdit(review.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-slate-300 mb-6 leading-relaxed">{review.text}</p>
              )}

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={review.author.avatar || "/placeholder.svg"}
                  alt={review.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-medium text-sm">{review.author.name}</div>
                  <div className="text-slate-400 text-xs">{review.author.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
