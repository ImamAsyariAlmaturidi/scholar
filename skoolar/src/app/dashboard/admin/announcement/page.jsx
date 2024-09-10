'use client'

import { useState } from 'react'



export default function AnnouncementPage() {
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: "Welcome Back", content: "Welcome to the new school year!", class: "All", date: "2023-09-01" },
        { id: 2, title: "Math Quiz", content: "Math quiz next week", class: "Grade 10", date: "2023-09-05" },
    ])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '', class: '' })

    const handleInputChange = (e) => {
        setNewAnnouncement({ ...newAnnouncement, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date().toISOString().split('T')[0]
        setAnnouncements([...announcements, { ...newAnnouncement, id: Date.now(), date }])
        setNewAnnouncement({ title: '', content: '', class: '' })
        setIsModalOpen(false)
    }

    return (
        <div className="container mx-auto p-10 bg-white rounded-2xl ">
            <h1 className="text-xl font-bold mb-4">Announcements</h1>

            <button
                onClick={() => setIsModalOpen(true)}
                className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
                New Announcement
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4 ">Add New Announcement</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={newAnnouncement.title}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-input rounded-md "
                                    />
                                </div>
                                <div>
                                    <label htmlFor="content" className="block text-sm font-medium mb-1">Content</label>
                                    <textarea
                                        id="content"
                                        name="content"
                                        value={newAnnouncement.content}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-input rounded-md "
                                        rows={3}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="class" className="block text-sm font-medium mb-1">Class</label>
                                    <select
                                        id="class"
                                        name="class"
                                        value={newAnnouncement.class}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-input rounded-md "
                                    >
                                        <option value="">Select a class</option>
                                        <option value="All">All</option>
                                        <option value="Grade 9">Grade 9</option>
                                        <option value="Grade 10">Grade 10</option>
                                        <option value="Grade 11">Grade 11</option>
                                        <option value="Grade 12">Grade 12</option>
                                    </select>
                                </div>
                                <div className="flex justify-end space-x-2 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 border border-input rounded-md text-sm font-medium "
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-primary/90"
                                    >
                                        Add Announcement
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-muted">
                        <tr>
                            <th className="py-3 px-4 text-left font-medium text-muted-foreground">Date</th>
                            <th className="py-3 px-4 text-left font-medium text-muted-foreground">Title</th>
                            <th className="py-3 px-4 text-left font-medium text-muted-foreground">Content</th>
                            <th className="py-3 px-4 text-left font-medium text-muted-foreground">Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {announcements.map((announcement, index) => (
                            <tr key={announcement.id} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}>
                                <td className="py-3 px-4 border-t">{announcement.date}</td>
                                <td className="py-3 px-4 border-t">{announcement.title}</td>
                                <td className="py-3 px-4 border-t">{announcement.content}</td>
                                <td className="py-3 px-4 border-t">{announcement.class}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}