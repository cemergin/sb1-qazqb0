import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar as CalendarIcon, Clock, MapPin, ArrowLeft, Ticket, PlusCircle } from 'lucide-react'

// ... (keep the existing interfaces and data)

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const concert = concerts.find(c => c.id === Number(id))

  if (!concert) {
    return <div className="text-neon-green">Event not found</div>
  }

  const handleAddToCalendar = () => {
    // ... (keep the existing function)
  };

  return (
    <div className="bg-gray-800 bg-opacity-80 shadow-lg rounded-lg overflow-hidden p-4 md:p-6">
      <Link to="/" className="text-neon-green hover:text-neon-yellow flex items-center mb-4">
        <ArrowLeft className="mr-2" /> Back to Calendar
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neon-yellow">{concert.artist}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-neon-green flex items-center mb-2">
            <CalendarIcon className="mr-2" /> {concert.date.toLocaleDateString()}
          </p>
          <p className="text-neon-green flex items-center mb-2">
            <Clock className="mr-2" /> {concert.time}
          </p>
          <p className="text-neon-green flex items-center mb-2">
            <MapPin className="mr-2" /> {concert.venue}
          </p>
          <p className="text-neon-green mb-4">Genre: {concert.genre}</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-6">
            <a
              href={concert.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon-green text-gray-900 px-4 py-2 rounded-md flex items-center justify-center hover:bg-neon-yellow transition duration-300"
            >
              <Ticket className="mr-2" /> Buy Tickets
            </a>
            <button
              onClick={handleAddToCalendar}
              className="bg-neon-yellow text-gray-900 px-4 py-2 rounded-md flex items-center justify-center hover:bg-neon-green transition duration-300"
            >
              <PlusCircle className="mr-2" /> Add to Calendar
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-neon-green">Event Description</h2>
          <p className="text-gray-300">{concert.description}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-neon-green">Comments</h2>
        {/* Add a comment system here in the future */}
        <p className="text-gray-300">Comments coming soon!</p>
      </div>
    </div>
  )
}

export default EventPage