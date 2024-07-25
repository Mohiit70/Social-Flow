import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { PDFDocument, rgb } from 'pdf-lib';
import Calendar from 'react-calendar';
import axios from 'axios';
import '../styles/Calendar.css';

const HowItWorks = () => {
  const [calendarType, setCalendarType] = useState('7');
  const [ideas, setIdeas] = useState('');
  const [generatedContent, setGeneratedContent] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateContent = async () => {
    setIsLoading(true);
    try {
      const prompt = `Create a ${calendarType}-day content calendar based on: ${ideas}. For each day, provide a concise, engaging content idea with a brief description and relevant hashtags.`;

      const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        contents: [{
          parts: [{ text: prompt }]
        }]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`
        },
        params: {
          key: process.env.NEXT_PUBLIC_GEMINI_API_KEY
        }
      });

      const generatedIdeas = response.data.candidates[0].content.parts[0].text.split('\n').filter(idea => idea.trim() !== '');
      
      const generated = generatedIdeas.map((idea, index) => ({
        day: index + 1,
        content: idea,
        date: new Date(selectedDate.getTime() + index * 24 * 60 * 60 * 1000),
      }));

      setGeneratedContent(generated);
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Failed to generate content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;

    generatedContent.forEach((item, index) => {
      page.drawText(`Day ${item.day}: ${item.content}`, {
        x: 50,
        y: height - 50 - index * 20,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'content-calendar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddToGoogleCalendar = () => {
    const events = generatedContent.map(item => ({
      'summary': `Content: ${item.content.substring(0, 50)}...`,
      'description': item.content,
      'start': {
        'dateTime': item.date.toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      'end': {
        'dateTime': new Date(item.date.getTime() + 60 * 60 * 1000).toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }));

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(events[0].summary)}&dates=${events[0].start.dateTime.replace(/[-:]/g, '')}/${events[0].end.dateTime.replace(/[-:]/g, '')}&details=${encodeURIComponent(events[0].description)}`;

    window.open(url, '_blank');
  };

  const tileContent = ({ date }) => {
    const content = generatedContent.find(item => 
      item.date.toDateString() === date.toDateString()
    );
    return content ? (
      <div className="text-xs p-1 bg-blue-600 text-white rounded">
        {content.content.substring(0, 20)}...
      </div>
    ) : null;
  };

  return (
    <div className="relative min-h-screen w-full bg-neutral-950">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl w-full">
          <motion.h1
            className="text-3xl lg:text-5xl font-bold leading-tight text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400">Craft</span> Your
            <br className="hidden sm:inline" /> Content <span className="text-blue-400">Calendar</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform ideas into a structured plan, effortlessly
          </motion.p>

          <div className="bg-neutral-900 p-6 rounded-lg shadow-lg mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2 text-sm">Select Calendar Duration:</label>
                <select
                  className="block w-full p-2 mb-4 bg-gray-800 text-white rounded-md text-sm"
                  value={calendarType}
                  onChange={e => setCalendarType(e.target.value)}
                >
                  <option value="7">1 Week</option>
                  <option value="30">1 Month</option>
                </select>

                <label className="block text-white mb-2 text-sm">Enter Your Ideas or Keywords:</label>
                <input
                  type="text"
                  className="block w-full p-2 mb-4 bg-gray-800 text-white rounded-md text-sm"
                  value={ideas}
                  onChange={e => setIdeas(e.target.value)}
                  placeholder="E.g., social media tips, productivity hacks"
                />

                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-full transition hover:bg-blue-700 w-full text-sm font-semibold"
                  onClick={handleGenerateContent}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Crafting Your Calendar...
                    </span>
                  ) : (
                    'Create My Content Calendar'
                  )}
                </button>
              </div>
              <div>
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  tileContent={tileContent}
                  className="bg-white rounded-lg p-4"
                />
              </div>
            </div>

            {generatedContent.length > 0 && (
              <motion.div 
                className="bg-gray-800 p-4 rounded-lg mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold text-white mb-4">Your Content Plan</h4>
                <ul className="text-blue-300 mb-4 text-sm">
                  {generatedContent.map(item => (
                    <li key={item.day} className="mb-2">Day {item.day}: {item.content}</li>
                  ))}
                </ul>
                <div className="flex justify-between">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-full transition hover:bg-green-700 text-sm"
                    onClick={handleDownloadPDF}
                  >
                    Export as PDF
                  </button>
                  <button
                    className="bg-yellow-600 text-white px-4 py-2 rounded-full transition hover:bg-yellow-700 text-sm"
                    onClick={handleAddToGoogleCalendar}
                  >
                    Sync with Google Calendar
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;